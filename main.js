// --vhというカスタムプロパティを作成
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

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
  document.getElementById("ar-description-text").style.display = "none";
  document.getElementById("pc-alert-text").style.display = "block";
}

if (ua.indexOf("iphone") > 0 || ua.indexOf("ipad") > 0) {
  document.getElementById("model-viewer-ios").style.display = "block";
  document.getElementById("model-viewer-default").style.display = "none";
}
