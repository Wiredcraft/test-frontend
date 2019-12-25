/*=responsive-ux: start*/
(function (win, data) {
  var doc = document;

  /*=toggle-nav: start*/
  function toggleNav(obj) {
    if (!doc.querySelector(obj["nav"])) {
      throw new Error(obj["nav"] + " does not exist");
    }

    var nav = doc.querySelector(obj["nav"]),
      link = doc.querySelector(obj["link"]),
      className = obj["class"];

    link.addEventListener("click", function () {
      nav.classList.toggle(className);
    }, false);
  }
  /*=toggle-nav: end*/

  /*=render-table: start*/
  function renderTable(obj) {
    if (!doc.querySelector(obj["box"])) {
      throw new Error(obj["box"] + " does not exist");
    }

    var box = doc.querySelector(obj["box"]);

    if (data && data.length > 0) {
      var txt = '';

      data.forEach(function (item, index) {
        var current = item;

        txt += '<tr data-region="' + (current.type) + '" data-search="' + (current.search) + '" data-level="' + (current.level) + '" data-download="' + (current.download) + '" class="data-tree-level-' + (current.level) + '">';
        txt += '<th>';
        txt += '<dl class="data-tree">';
        txt += '<dt class="item-index"><i class="badge">' + (current.badge) + '</i></dt>';
        txt += '<dd class="item-main">';
        txt += '<span class="item-txt">' + (current.name) + '</span>';
        txt += '<a class="item-link" href="#">';
        txt += '<span class="visually-hidden">download <i>' + (current.name) + '</i> file</span>';
        txt += '<i class="icon icon-download" aria-label=""></i>';
        txt += '</a>';
        txt += '</dd>';
        txt += '<dd class="item-aside">';
        txt += '<a data-region="' + (current.type) + '" data-level="' + (current.level) + '" data-state="' + (current.state) + '" class="item-link item-toggle" href="#">';
        txt += '<span class="visually-hidden">fold <i>' + (current.name) + '</i> citys</span>';
        txt += '<i class="icon icon-fold" aria-label=""></i>';
        txt += '</a>';
        txt += '</dd>';
        txt += '</dl>';
        txt += '</th>';
        txt += '<td data-label="update">' + (current.update) + '</td>';
        txt += '<td data-label="download">' + (current.download) + '</td>';
        txt += '</tr>';

        if (current.citys && current.citys.length > 0) {
          current.citys.forEach(function (item, index) {
            var city = item;

            txt += '<tr data-region="' + (current.type) + '" data-key="' + (city.key) + '" data-search="' + (city.search) + '" data-level="' + (city.level) + '" data-download="' + (city.download) + '" class="data-tree-level-' + (city.level) + '">';
            txt += '<th>';
            txt += '<dl class="data-tree">';
            txt += '<dt class="item-index"><i class="badge">' + (city.badge) + '</i></dt>';
            txt += '<dd class="item-main">';
            txt += '<span class="item-txt">' + (city.name) + '</span>';
            txt += '<a class="item-link" href="#">';
            txt += '<span class="visually-hidden">download <i>' + (city.name) + '</i> file</span>';
            txt += '<i class="icon icon-download" aria-label=""></i>';
            txt += '</a>';
            txt += '</dd>';
            txt += '<dd class="item-aside">';

            if (city.districts && city.districts.length > 0) {
              txt += '<a data-region="' + (current.type) + '" data-city="' + (city.key) + '" data-level="' + (city.level) + '" data-state="' + (city.state) + '" class="item-link item-toggle" href="#">';
              txt += '<span class="visually-hidden">fold <i>' + (city.name) + '</i> districts</span>';
              txt += '<i class="icon icon-fold" aria-label=""></i>';
              txt += '</a>';
            }

            txt += '</dd>';
            txt += '</dl>';
            txt += '</th>';
            txt += '<td data-label="update">' + (city.update) + '</td>';
            txt += '<td data-label="download">' + (city.download) + '</td>';
            txt += '</tr>';

            if (city.districts && city.districts.length > 0) {
              city.districts.forEach(function (item, index) {
                var district = item;

                txt += '<tr data-region="' + (current.type) + '" data-key="' + (city.key) + '" data-search="' + (city.search) + '" data-level="' + (district.level) + '" data-download="' + (district.download) + '" class="data-tree-level-' + (district.level) + '">';
                txt += '<th>';
                txt += '<dl class="data-tree">';
                txt += '<dt class="item-index"><i class="badge">' + (district.badge) + '</i></dt>';
                txt += '<dd class="item-main">';
                txt += '<span class="item-txt">' + (district.name) + '</span>';
                txt += '<a class="item-link" href="#">';
                txt += '<span class="visually-hidden">download <i>' + (district.name) + '</i> file</span>';
                txt += '<i class="icon icon-download" aria-label=""></i>';
                txt += '</a>';
                txt += '</dd>';
                txt += '</dl>';
                txt += '</th>';
                txt += '<td data-label="update">' + (district.update) + '</td>';
                txt += '<td data-label="download">' + (district.download) + '</td>';
                txt += '</tr>';
              });
            }
          });
        }
      });

      box.innerHTML = txt;
    }
  }
  /*=render-table: end*/

  /*=data-filter: start*/
  function dataFilter(obj) {
    if (!doc.querySelector(obj["box"])) {
      throw new Error(obj["box"] + " does not exist");
    }

    var tbody = doc.querySelector(obj["box"]).tBodies[0],
      wraper = document.createDocumentFragment(),
      target = doc.getElementById(obj["id"]),
      rows = tbody.rows,
      arr = [];

    arr = [].slice.call(rows, 0);

    target.addEventListener("change", function () {
      var self = this,
        output = [];

      tbody.innerHTML = "";

      if (self.value === "all") {
        output = arr;
      }
      else {
        output = arr.filter(function (item, index) {
          return item.getAttribute("data-region") === self.value;
        });
      }

      output.forEach(function (item, index) {
        wraper.appendChild(item);
      });

      tbody.appendChild(wraper);
    }, false);
  }
  /*=data-filter: end*/

  /*=data-search: start*/
  function dataSearch(obj) {
    if (!doc.querySelector(obj["box"])) {
      throw new Error(obj["box"] + " does not exist");
    }

    var tbody = doc.querySelector(obj["box"]).tBodies[0],
      wraper = document.createDocumentFragment(),
      input = doc.getElementById(obj["inputId"]),
      submit = doc.getElementById(obj["submitId"]),
      rows = tbody.rows,
      arr = [];

    arr = [].slice.call(rows, 0);

    function dataOutput() {
      var value = input.value.toLowerCase().trim(),
        output = [];

      tbody.innerHTML = "";

      output = arr.forEach(function (item, index) {
        if (item.hasAttribute("data-search")) {
          var keys = item.getAttribute("data-search").split(",");
          var result = keys.some(function (item, index) {
            if (value === "") {
              return true;
            }
            else {
              return item === value;
            }
          });

          if (result) {
            wraper.appendChild(item);
          }
        }
      });

      tbody.appendChild(wraper);
    }

    input.addEventListener("keypress", function (e) {
      if (e.keyCode === 13) {
        dataOutput();
      }
    }, false);

    submit.addEventListener("click", function (e) {
      e.preventDefault();
      dataOutput();
    }, false);
  }
  /*=data-search: end*/

  /*=data-toggle: start*/
  function dataToggle(obj) {
    if (!doc.querySelector(obj["box"])) {
      throw new Error(obj["box"] + " does not exist");
    }

    var box = doc.querySelector(obj["box"]),
      links = box.querySelectorAll(obj["links"]),
      tbody = box.querySelector("table").tBodies[0],
      rows = tbody.rows,
      arr = [];

    links = [].slice.call(links, 0);
    arr = [].slice.call(rows, 0);

    links.forEach(function (item, index, array) {
      var current = item;

      current.addEventListener("click", function (e) {
        e.preventDefault();

        var level = Number(this.getAttribute("data-level")),
          region = this.getAttribute("data-region"),
          state = this.getAttribute("data-state"),
          icon = this.querySelector(".icon");

        array.forEach(function (item, index) {
          item.classList.remove("active");
        });
        current.classList.add("active");

        if (state === "unfold") {
          current.setAttribute("data-state", "fold");
          icon.classList.remove("icon-fold");
          icon.classList.add("icon-unfold");

          for (var i = 0; i < rows.length; i++) {
            if (
              rows[i].getAttribute("data-region") === region &&
              rows[i].hasAttribute("data-level") &&
              Number(rows[i].getAttribute("data-level")) > level
            ) {
              if (rows[i].querySelector(".item-toggle")) {
                var link = rows[i].querySelector(".item-toggle"),
                  icon = link.querySelector(".icon");

                icon.classList.remove("icon-unfold");
                icon.classList.add("icon-fold");
                link.setAttribute("data-state", "unfold");
              }

              rows[i].classList.add("hide");
            }
          }
        }
        else {
          current.setAttribute("data-state", "unfold");
          icon.classList.remove("icon-unfold");
          icon.classList.add("icon-fold");

          for (var i = 0; i < rows.length; i++) {
            if (
              rows[i].getAttribute("data-region") === region &&
              rows[i].hasAttribute("data-level") &&
              Number(rows[i].getAttribute("data-level")) > level
            ) {
              rows[i].classList.remove("hide");
            }
          }
        }
      }, false);
    });
  }
  /*=data-toggle: end*/

  win.UX = {
    "renderTable": renderTable,
    "dataFilter": dataFilter,
    "dataSearch": dataSearch,
    "dataToggle": dataToggle,
    "toggleNav": toggleNav,
  };

  return win.UX;
}(window, data));
/*=responsive-ux: end*/

function uxLoad() {
  window.UX["renderTable"]({
    "box": ".data-show > table > tbody",
  });

  window.UX["dataFilter"]({
    "box": ".data-show > table",
    "id": "region",
  });

  window.UX["dataSearch"]({
    "box": ".data-show > table",
    "submitId": "search-submit",
    "inputId": "search",
  });

  window.UX["dataToggle"]({
    "box": ".data-show",
    "links": ".data-show .item-toggle",
  });

  window.UX["toggleNav"]({
    "link": ".navigator-toggle",
    "nav": ".navigator-list",
    "class": "show-flex",
  });
}

window.addEventListener("DOMContentLoaded", uxLoad, false);