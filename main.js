// --vhというカスタムプロパティを作成
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

const viewer = document.getElementById("model-viewer");

const arDescriptionText = document.getElementById("ar-description-text");
const pcAlertText = document.getElementById("pc-alert-text");
const noArMsg = document.getElementById("no-ar-msg");

window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

const ua = window.navigator.userAgent.toLowerCase();

if (
  ua.indexOf("iphone") > 0 ||
  (ua.indexOf("android") > 0 && ua.indexOf("mobile") > 0)
) {
} else if (
  ua.indexOf("ipad") > 0 ||
  (ua.indexOf("macintosh") > -1 && "ontouchend" in document) ||
  ua.indexOf("android") > 0
) {
} else {
  arDescriptionText.style.display = "none";
  pcAlertText.style.display = "block";
}

viewer.addEventListener("load", () => {
  document.getElementById("no-ar-msg").style.display = "block";
});
