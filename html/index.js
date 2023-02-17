import placeholderImgURL from "./assets/placeholder.webp";
import templateI18n from "./templates/template1.json";
import { createTranslate, loadLocale } from "./translate.js";

loadLocale().then((locale) => {
  const t = createTranslate(locale);

  // translate template
  const template = {};
  template.table = templateI18n.table.map((row) => {
    return row.map(t);
  });
  template.options = templateI18n.options.map(t);

  // translate html
  const nodesToTranslate = document.querySelectorAll("[data-i18n]");
  nodesToTranslate.forEach((node) => {
    const translated = t(node.getAttribute("data-i18n"));
    node.innerText = translated;
  });

  const table = document.getElementById("my_table");

  // add row form
  const addRowForm = document.getElementById("add_row_form");
  const columnsInput = document.getElementById("columns_input");
  const resetButton = document.getElementById("reset_button");

  // edit dialog
  const editForm = document.getElementById("edit_form");
  const searchInput = document.getElementById("search_work_input");
  const searchResult = document.getElementById("search_result");
  const imgFileInput = document.getElementById("img_file_input");
  const imgContainer = document.getElementById("img_container");
  const imgPreview = document.getElementById("img_preview");
  const descriptionInput = document.getElementById("description");
  const cancel = document.getElementById("cancel");
  const dialog = document.querySelector("dialog");

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

    const row = table.insertRow(-1);
    for (let i = 0; i < numColumns; i++) {
      const cell = row.insertCell(i);
      cell.innerHTML =
        `<div class="cell-wrapper"><img class="cell-img" src="data:," alt="data:," /><div class="cell-description"></div></div>`;
      targetImg = cell.querySelector(".cell-img");
      targetDescription = cell.querySelector(".cell-description");
      let description;
      if (descriptionList) {
        description = descriptionList[i];
      } else {
        description = t("click_to_edit");
      }
      editTargetCell(placeholderImgURL, description);
    }
  }

  function editTargetCell(imgURL, description) {
    targetImg.src = imgURL;
    targetImg.alt = imgURL;
    targetDescription.innerText = description;
  }

  dialog.addEventListener("close", () => {
    imgContainer.innerHTML = "";
  });

  // handle submit edit cell form
  editForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let imgURL;
    if (imgPreview.src === "data:,") {
      imgURL = placeholderImgURL;
    } else {
      imgURL = imgPreview.src;
    }
    editTargetCell(imgURL, descriptionInput.value);
    // reset imgPreview
    imgPreview.src = "data:,";
    imgPreview.style.display = "none";

    dialog.close();
    editForm.reset();
  });

  cancel.addEventListener("click", function () {
    dialog.close();
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
    dialog.showModal();
    const targetCell = e.target.closest(".cell-wrapper");
    targetImg = targetCell.querySelector(".cell-img");
    targetDescription = targetCell.querySelector(".cell-description");
    descriptionInput.value = targetDescription.innerText;
    searchInput.focus();
    triggerSearch();
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
    saveButton.innerText = t("loading");
    // table_container is the target for final image rendering.
    const target = document.getElementById("table_container_wrapper");
    // printElement(target);
    try {
      const canvas = await html2canvas(target, {
        useCORS: true,
      });
      // download rendered image
      const link = document.createElement("a");
      link.download = "anime-grid.png";
      link.href = canvas.toDataURL();
      link.click();

      // show rendered image at bottom
      // const img = document.createElement("img");
      // document.getElementById("table_container_wrapper").appendChild(img);
      // img.src = canvas.toDataURL();
    } catch (err) {
      console.error(err);
    }
    saveButton.innerText = t("save_image");
  });

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  async function handleSearchInput(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    triggerSearch();
  }

  const PROXY_URL = "https://imageproxy-rvvouazbtq-de.a.run.app/";

  async function triggerSearch() {
    let keyword = searchInput.value;
    if (keyword === "") {
      return;
    }

    // use wiki to get japanese artwork title
    const title = await searchWikiTitle(keyword);
    keyword = title ?? keyword;

    searchResult.innerHTML = `<div>${t("searching")}</div><div>&nbsp</div>`;
    const images = await searchImageFromAniList(keyword);

    // show image search result
    imgContainer.innerHTML = "";
    for (const url of images) {
      const img = document.createElement("img");
      img.src = url;
      img.addEventListener("click", function () {
        imgPreview.src = PROXY_URL + img.src;
        imgPreview.style.display = "block";
        imgContainer.innerHTML = "";
      });
      imgContainer.appendChild(img);
    }
    searchResult.innerHTML = `<span>${t("cant_find_desired_image?")}</span>` +
      `<a href="https://www.google.com/search?tbm=isch&q=${keyword}" target="_blank">${
        t("search_in_google_image")
      }</a>` +
      `<div>${t("paste_here")}</div>`;
  }

  // handle search
  searchInput.addEventListener("keydown", debounce(handleSearchInput));
  searchInput.addEventListener("input", debounce(handleSearchInput));

  async function searchWikiTitle(keyword) {
    // wiki page title search
    // docs: https://www.mediawiki.org/wiki/API:Opensearch
    let url = new URL("https://zh.wikipedia.org/w/api.php");
    url.searchParams.set("action", "opensearch");
    url.searchParams.set("limit", "10");
    url.searchParams.set("namespace", "0");
    url.searchParams.set("redirects", "resolve");
    url.searchParams.set("format", "json");
    url.searchParams.set("origin", "*");
    url.searchParams.set("search", keyword);

    try {
      let response = await fetch(url);
      let json = await response.json();

      if (!json[1][0]) return;
      keyword = json[1][0];

      // langlinks search
      // docs: https://www.mediawiki.org/wiki/API:Langlinks
      url = new URL("https://zh.wikipedia.org/w/api.php");
      url.searchParams.set("action", "query");
      url.searchParams.set("lllimit", "1");
      url.searchParams.set("prop", "langlinks");
      url.searchParams.set("lllang", "ja");
      url.searchParams.set("format", "json");
      url.searchParams.set("origin", "*");
      url.searchParams.set("titles", keyword);

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
      }`;

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

  function initFromTemplate(template) {
    // init table
    for (const descriptionList of template.table) {
      addRow({ descriptionList });
    }
    // addOption
    template.options.forEach((element) => {
      const option = document.createElement("option");
      option.text = element;
      option.value = element;
      descriptionInput.add(option);
    });
  }

  initFromTemplate(template);

  // deprecated method for printing
  // function printElement(el) {
  //   let cloned = el.cloneNode(true);
  //   document.body.appendChild(cloned);
  //   cloned.classList.add("printable");
  //   window.print();
  //   document.body.removeChild(cloned);
  // }
});
