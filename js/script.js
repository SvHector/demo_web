
document.getElementById('theme-toggle').addEventListener('change', function () {
  document.documentElement.setAttribute('data-theme', this.checked ? 'dark' : 'light');
});
