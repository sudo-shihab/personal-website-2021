async function initPortfolio(name) {
  const portfolio = await (await import("./scripts/app.js")).default;
  portfolio();
}

window.addEventListener("load", function (e) {
  initPortfolio("shihab");
});
