window.onload = function () {
    let lang = navigator.language.slice(0, 2);
    //console.log(lang);

    if (lang === "it") {
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