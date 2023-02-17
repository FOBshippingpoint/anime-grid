// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language
const availableLangs = ['zh-TW', 'zh', 'zh-CN', 'en', 'ja'];

async function loadLocale() {
  try {
    let userLang = navigator.language || navigator.userLanguage;
    if (availableLangs.indexOf(userLang) === -1) {
      userLang = "en";
    }
    const response = await fetch(`./_locale/${userLang}.json`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

function createTranslate(locale) {
  return (key) => {
    return locale[key] || key;
  };
}

export { createTranslate, loadLocale };
