/* TODO: set this to the repo that actually holds your Releases. */
const CODE_REPO = 'uu-mimos/mimos-tools';

(function () {
  const latest = `https://github.com/${CODE_REPO}/releases/latest`;
  const all = `https://github.com/${CODE_REPO}/releases`;
  document.querySelectorAll('[data-latest-link]').forEach(el => { el.href = latest; });
  document.querySelectorAll('[data-releases-link]').forEach(el => { el.href = all; });
})();
