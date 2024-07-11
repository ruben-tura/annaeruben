window.onload = function () {
    let lang = navigator.language.slice(0, 2);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const queryLang = urlParams.get('lang');
    //console.log(lang);

    if (queryLang !== "") {
        if (queryLang === "it") {
            document.querySelectorAll('.lang-en').forEach(elem => elem.classList.add("lang-hidden"));
        } else {
            document.querySelectorAll('.lang-it').forEach(elem => elem.classList.add("lang-hidden"));
        }
    } else if (lang === "it") {
        document.querySelectorAll('.lang-en').forEach(elem => elem.classList.add("lang-hidden"));
    } else {
        document.querySelectorAll('.lang-it').forEach(elem => elem.classList.add("lang-hidden"));
    }
}

function setEnglish() {
    document.querySelectorAll('.lang-it').forEach(elem => elem.classList.add("lang-hidden"));
    document.querySelectorAll('.lang-en').forEach(elem => elem.classList.remove("lang-hidden"));
}

function setItalian() {
    document.querySelectorAll('.lang-en').forEach(elem => elem.classList.add("lang-hidden"));
    document.querySelectorAll('.lang-it').forEach(elem => elem.classList.remove("lang-hidden"));
}