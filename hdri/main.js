// --vhというカスタムプロパティを作成
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

if (
  navigator.userAgent.indexOf("iPhone") > 0 ||
  (navigator.userAgent.indexOf("Android") > 0 &&
    navigator.userAgent.indexOf("Mobile") > 0)
) {
} else if (
  navigator.userAgent.indexOf("iPad") > 0 ||
  navigator.userAgent.indexOf("Android") > 0
) {
} else {
  document.getElementById("ar-description-text").style.display = "none";
  document.getElementById("pc-alert-text").style.display = "block";
}

if (
  navigator.userAgent.indexOf("iPhone") > 0 ||
  navigator.userAgent.indexOf("iPad") > 0
) {
  document.getElementById("model-viewer-ios").style.display = "block";
  document.getElementById("model-viewer-default").style.display = "none";
}
