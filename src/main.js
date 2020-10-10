const btn = document.querySelector("#theme-switcher");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const classList = document.body.classList;

if (isNull()) {
    prefersDarkScheme.matches ? setDark() : setLight();
    classList.toggle(prefersDarkScheme.matches ? "dark-mode" : "light-mode");
}
else if (isDark()) {
    classList.add("dark-mode");
}
else if (isLight()) {
    classList.add("light-mode");
}

btn.addEventListener("click", () => {
    if (isDark()) {
        setLight();
    }
    else if (isLight()) {
        setDark();
    }
    classList.toggle("dark-mode");
    classList.toggle("light-mode");
});

function getTheme() {
    return localStorage.getItem("theme");
}

function setTheme(theme) {
    return localStorage.setItem("theme", theme);
}

function isDark() {
    return getTheme() == "dark";
}

function isLight() {
    return getTheme() == "light";
}

function isNull() {
    return getTheme() == null;
}

function setDark() {
    setTheme("dark");
}

function setLight() {
    setTheme("light");
}