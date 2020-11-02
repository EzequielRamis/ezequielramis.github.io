const btn = document.querySelector("#theme-switcher");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const classList = document.body.classList;
const DARK_MODE = "dark-mode";
const LIGHT_MODE = "light-mode";
const DARK = "dark";
const LIGHT = "light";

if (isNull()) {
    prefersDarkScheme.matches ? setDark() : setLight();
    classList.toggle(prefersDarkScheme.matches ? DARK_MODE : LIGHT_MODE);
}
else if (isDark()) {
    classList.add(DARK_MODE);
}
else if (isLight()) {
    classList.add(LIGHT_MODE);
}

btn.addEventListener("click", () => {
    if (isDark()) {
        setLight();
    }
    else if (isLight()) {
        setDark();
    }
    classList.toggle(DARK_MODE);
    classList.toggle(LIGHT_MODE);
});

function getTheme() {
    return localStorage.getItem("theme");
}

function setTheme(theme) {
    return localStorage.setItem("theme", theme);
}

function isDark() {
    return getTheme() == DARK;
}

function isLight() {
    return getTheme() == LIGHT;
}

function isNull() {
    return getTheme() == null;
}

function setDark() {
    setTheme(DARK);
}

function setLight() {
    setTheme(LIGHT);
}