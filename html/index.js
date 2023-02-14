const table = document.getElementById("my_table");

// add row form
const addRowForm = document.getElementById("add_row_form");
const columnsInput = document.getElementById("columns_input");
const resetButton = document.getElementById("reset_button");

// edit dialog
const editDialog = document.getElementById("edit_dialog");
const editForm = document.getElementById("edit_form");
const searchInput = document.getElementById("search_work_input");
// const searchResult = document.getElementById("search_result");
const imgFileInput = document.getElementById("img_file_input");
const imgContainer = document.getElementById("img_container");
const imgPreview = document.getElementById("img_preview");
const descriptionInput = document.getElementById("description");
const cancel = document.getElementById("cancel");

const saveButton = document.getElementById("save_button");

// indicate which cell should edit, reassign when user click
let targetImg;
let targetDescription;

/**
 * Add row to table
 *
 * @param {{numColumns: number, descriptionList: string[]}}
 */
function addRow({ numColumns, descriptionList }) {
  if (descriptionList) {
    numColumns = descriptionList.length;
  } else if (!numColumns) {
    numColumns = table.rows[0].cells.length;
  }

  function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  const row = table.insertRow(-1);
  for (let i = 0; i < numColumns; i++) {
    const cell = row.insertCell(i);
    cell.innerHTML =
      `<div class="cell-wrapper"><img class="cell-img" src="data:," alt="data:," /><div class="cell-description"></div></div>`;
    targetImg = cell.querySelector(".cell-img");
    targetDescription = cell.querySelector(".cell-description");
    if (descriptionList) {
      editTargetCell(
        "https://picsum.photos/" +
          getRandomArbitrary(250, 300) +
          "/" +
          getRandomArbitrary(400, 450),
        descriptionList[i],
      );
    } else {
      editTargetCell(
        "https://picsum.photos/" +
          getRandomArbitrary(250, 300) +
          "/" +
          getRandomArbitrary(400, 450),
        "點擊選擇",
      );
    }
  }
}

function editTargetCell(imgURL, description) {
  if (imgURL !== "data:,") {
    targetImg.src = imgURL;
    targetImg.alt = imgURL;
  }
  targetDescription.innerText = description;
}

// handle submit edit cell form
editForm.addEventListener("submit", function (e) {
  e.preventDefault();
  editTargetCell(imgPreview.src, descriptionInput.value);
  // reset imgPreview
  imgPreview.src = "data:,";
  imgPreview.style.display = "none";

  editDialog.style.display = "none";
  // searchResult.innerHTML = "";
  editForm.reset();
});

cancel.addEventListener("click", function () {
  editDialog.style.display = "none";
});

function updateImgPreviewFromFile(file) {
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    imgPreview.src = reader.result;
    imgPreview.style.display = "block";
  });
  reader.readAsDataURL(file);
}

imgFileInput.addEventListener("change", function () {
  const file = imgFileInput.files[0];
  updateImgPreviewFromFile(file);
});

// paste, update image
editForm.addEventListener("paste", function (e) {
  const data = e.clipboardData || window.clipboardData;
  if (!data) return;
  const item = [...data.items].find((i) => i.type.includes("image"));

  if (item?.kind === "file") {
    updateImgPreviewFromFile(item.getAsFile());
  }
});

// open edit editDialog
table.addEventListener("click", function (e) {
  editDialog.style.display = "block";
  const targetCell = e.target.closest(".cell-wrapper");
  targetImg = targetCell.querySelector(".cell-img");
  targetDescription = targetCell.querySelector(".cell-description");
  descriptionInput.value = targetDescription.innerText;
  searchInput.focus();
});

// clear all table data
resetButton.addEventListener("click", function () {
  columnsInput.disabled = false;
  table.innerHTML = "";
});

// handle add row form submit
addRowForm.addEventListener("submit", function (e) {
  e.preventDefault();
  columnsInput.disabled = true;
  addRow({ numColumns: columnsInput.value });
});

saveButton.addEventListener("click", async function () {
  saveButton.innerText = "載入中...";
  // table_container is the target for final image rendering.
  const target = document.getElementById("table_container_wrapper");
  try {
    const canvas = await html2canvas(target, {
      useCORS: true,
    });
    // download rendered image
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = canvas.toDataURL();
    link.click();

    // show rendered image at bottom
    // const img = document.createElement("img");
    // document.getElementById("table_container_wrapper").appendChild(img);
    // img.src = canvas.toDataURL();
  } catch (err) {
    console.error(err);
  }
  saveButton.innerText = "儲存";
});

// template 2d array
function initTableFromTemplate(template) {
  for (const descriptionList of template) {
    addRow({ descriptionList });
  }
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

async function handleSearch(e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
  let keyword = searchInput.value;

  // use wiki to get japanese artwork title
  if (keyword.length >= 3) {
    const title = await searchWikiTitle(keyword);
    keyword = title ?? keyword;
  }

  const images = await searchImageFromAniList(keyword);
  // show image search result
  imgContainer.innerHTML = "";
  for (const url of images) {
    const img = document.createElement("img");
    img.src = url;
    img.addEventListener("click", function () {
      imgPreview.src = img.src;
      imgPreview.style.display = "block";
      imgContainer.innerHTML = "";
    });
    imgContainer.appendChild(img);
  }
}

// handle search
searchInput.addEventListener("keydown", debounce(handleSearch));

async function searchWikiTitle(keyword) {
  keyword = encodeURIComponent(keyword);
  // wiki page title search
  // docs: https://www.mediawiki.org/wiki/API:Opensearch
  let url =
    `https://zh.wikipedia.org/w/api.php?action=opensearch&search=${keyword}&limit=10&namespace=0&redirects=resolve&format=json&origin=*`;
  try {
    let response = await fetch(url);
    let json = await response.json();

    if (!json[1][0]) return;
    keyword = json[1][0];
    // langlinks search
    // docs: https://www.mediawiki.org/wiki/API:Langlinks
    url =
      `https://zh.wikipedia.org/w/api.php?action=query&lllimit=1&prop=langlinks&lllang=ja&titles=${keyword}&format=json&origin=*`;
    response = await fetch(url);
    json = await response.json();

    if (Object.values(json.query.pages).length === 0) return;
    // get first object
    const langlinks = Object.values(json.query.pages)[0].langlinks;
    if (!langlinks) return;

    const item = langlinks[0];
    // replace like "進撃の巨人 (漫画)" -> "進撃の巨人"
    const title = item["*"].replace(/\s\(.*\)/, "");
    return title;
  } catch (err) {
    console.error(err);
  }
  // searchResult.innerHTML =
  //   `<a href="https://www.google.com/search?tbm=isch&q=${keyword}" target="_blank">在Google圖片搜尋</a>` +
  //   "<div>右鍵複製圖片後在此貼上</div>";
}

async function searchImageFromAniList(keyword) {
  const query = `
  query ($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(search: $search, sort: FAVOURITES_DESC) {
        title {
          romaji
          english
          native
        }
        coverImage {
          large
        }
      }
    }
  }
  `;

  const variables = {
    page: 1,
    perPage: 12,
    search: keyword,
  };

  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip",
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await response.json();
  const mediaList = json?.data?.Page?.media;
  if (Array.isArray(mediaList) && mediaList.length > 0) {
    const images = mediaList.map((m) => {
      return m.coverImage.large;
    });
    return images;
  }
  return [];
}

// itorr's initial grid context
const initialTemplate = [
  ["入坑作", "最喜歡", "看最多次", "最想安利", "最佳劇情"],
  ["最佳畫面", "最佳配樂", "最佳配音", "最治癒", "最感動"],
  ["最虐心", "最被低估", "最過譽", "最離譜", "最討厭"],
];

const templateOptions = [
  "入坑作",
  "最喜歡",
  "看最多次",
  "最想安利",
  "最佳劇情",
  "最佳畫面",
  "最佳配樂",
  "最佳配音",
  "最治癒",
  "最感動",
  "最虐心",
  "最被低估",
  "最過譽",
  "最離譜",
  "最討厭",
  "最治癒",
  "最感動",
  "最虐心",
  "最被低估",
  "最過譽",
  "最離譜",
  "最討厭",
];

function addOption(options) {
  options.forEach((element) => {
    const option = document.createElement("option");
    option.text = element;
    option.value = element;
    descriptionInput.add(option);
  });
}

addOption(templateOptions);

initTableFromTemplate(initialTemplate);
