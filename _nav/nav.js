// Навігатор: будує бокове меню з window.NAV_TREE (_nav/tree.js).
// Сторінка підключає його так (data-root — шлях від сторінки до кореня репо):
//   <link rel="stylesheet" href="./_nav/nav.css">
//   <script src="./_nav/tree.js" defer></script>
//   <script src="./_nav/nav.js" data-root="./" defer></script>
(function () {
  var script = document.currentScript;
  var root = (script && script.getAttribute("data-root")) || "./";
  if (root.slice(-1) !== "/") root += "/";

  // index.html і "тека/" — одна й та сама сторінка
  function normalize(url) {
    return new URL(url, location.href).href.replace(/[?#].*$/, "").replace(/\/index\.html$/, "/");
  }

  var here = normalize(location.href);

  function link(page) {
    var url = new URL(root + page.href, location.href).href;
    var a = document.createElement("a");
    a.className = "nav-link";
    a.href = url;
    a.textContent = page.title;
    if (normalize(url) === here) {
      a.classList.add("nav-current");
      a.setAttribute("aria-current", "page");
    }
    return a;
  }

  function list(pages) {
    var ul = document.createElement("ul");
    ul.className = "nav-list";
    pages.forEach(function (page) {
      var li = document.createElement("li");
      li.appendChild(link(page));
      if (page.children && page.children.length) li.appendChild(list(page.children));
      ul.appendChild(li);
    });
    return ul;
  }

  function build() {
    var nav = document.createElement("nav");
    nav.className = "nav";
    nav.setAttribute("aria-label", "Сторінки репо");

    var loosePages = [];
    function flush() {
      if (loosePages.length) nav.appendChild(list(loosePages));
      loosePages = [];
    }

    (window.NAV_TREE || []).forEach(function (item) {
      if (item.branch) {
        flush();
        var title = document.createElement("div");
        title.className = "nav-branch";
        title.textContent = item.branch;
        nav.appendChild(title);
        nav.appendChild(list(item.pages || []));
      } else {
        loosePages.push(item);
      }
    });
    flush();

    document.body.insertBefore(nav, document.body.firstChild);
    document.documentElement.classList.add("has-nav");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
