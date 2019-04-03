// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/code.js":[function(require,module,exports) {
// Adding the town files
// $(function(){
//   var a = [[1,1], [4,1], [4,1], [4,1], [4,1], [4,1], [4,1]];
//   $(".table_content:first").text(" ");
//   $.each(a, function(index, value){
//     $(".table_content:first").append($("<div>", {"class":"table_row"}).load("snippets/state.html"));
//     for(var i = 0; i < value[0]; i++){
//       $(".table_content:first").append($("<div>", {"class":"table_row_district"}).load("snippets/district.html"));
//       // for(var j = 0; j < value[1]; j++ ){
//         $(".table_content:first").append($("<div>", {"class":"table_row_township"}).load("snippets/township.html"));
//       // };
//     };
//     });
// });
// $(function(){
//   var a = [[1,1], [4,1], [4,1], [4,1], [4,1], [4,1], [4,1]];
//   $.each(a, function(index, value){
//     $(".district_number:eq("+ index +")").text(value[0]);
//   });
// });
//Enabling the dropdown
$(function () {
  // Dropdwon for states
  $(".table_row_state_select").click(function () {
    var parent_this = $(this).parent().parent().parent(); // console.log(parent_this);

    next_district = parent_this.nextUntil(".table_row", ".table_row_district");
    next_township = parent_this.nextUntil(".table_row", ".table_row_township"); // console.log(next_district);
    // Dropdown enabled sign =

    if ($(this).attr("drop_down") !== "enabled") {
      $(this).attr("drop_down", "enabled");
      next_district.css("display", "inline-grid"); //Change the sign to -

      $(this).children().last().html("<b>-</b>");
    } // Dropdown disabled sign +
    else {
        $(this).children().last().html("<b>+</b>");
        $(this).attr("drop_down", "disabled");
        $.each(next_district, function (index) {
          var district_trigger = $(this).children().first().children().last().children().last();
          district_trigger.attr("drop_down", "disabled");
          district_trigger.children().last().html("<b>+</b>");
        });
        next_district.css("display", "none");
        next_township.css("display", "none");
      }

    ;
  }); //Dropdown for Townships

  $(".table_row_district_select").click(function () {
    var parent_this = $(this).parent().parent().parent();
    console.log(parent_this);
    next_township = parent_this.nextUntil(".table_row_district", ".table_row_township");
    console.log(next_township);

    if ($(this).attr("drop_down") !== "enabled") {
      $(this).attr("drop_down", "enabled");
      next_township.css("display", "inline-grid"); //Change the sign to -

      $(this).children().last().html("<b>-</b>");
    } else {
      $(this).children().last().html("<b>+</b>");
      $(this).attr("drop_down", "disabled");
      next_township.css("display", "none");
    }

    ;
  });
}); //Search function

$(function () {
  $("#search_button").click(function () {
    //Get the Filter
    var filter = $("#search_select option:selected").text();
    console.log(filter); //If filter is empty do not do anything

    if (filter == "Filter") {
      console.log("no filter");
      $("#search_alert").text("Please select a filter.");
      return false;
    }

    ; //Change the button to x

    $("#search_button").attr("id", "reset_button");
    $("#reset_button").html("<span>X</span>");
    $("#reset_button").click(function () {
      location.reload();
    }); // $(".table_row_district_select").click();
    //Get the search string

    var search_string = $("#search_input").val();
    console.log(search_string); //search

    function search_data(mode, search_string) {
      console.log(".table_row_data_" + mode);
      $.each($(".table_content:first").find(".table_row_data_" + mode), function (index) {
        value = $(this).text();
        console.log(value);
        console.log(search_string);

        if (value.trim() == search_string) {
          $(this).parent().css("display", "inline-grid");
        } else {
          $(this).parent().css("display", "none");
        }

        ;
      });
    }

    ;

    switch (filter) {
      case "Region":
        console.log("Region selected"); // var values = [];

        $.each($(".table_content:first").find(".table_row_title_content"), function (index) {
          value = $(this).children().eq(1).text(); // values.push(value);

          if (value == search_string) {
            $(this).parent().parent().css("display", "inline-grid");
          } else {
            $(this).parent().parent().css("display", "none");
          }

          ;
        }); // console.log(values);

        break;

      case "Last Input":
        console.log("LI selected");
        search_data(1, search_string);
        break;

      case "Number of Forms":
        console.log("NF selected");
        search_data(2, search_string);
        break;

      case "Number of Voters":
        console.log("NV selected");
        search_data(3, search_string);
        break;

      case "Update":
        console.log("U selected");
        search_data(4, search_string);
        break;

      default:
        console.log("Illegal Filter");
    }

    ;
  });
});
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50243" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/code.js"], null)
//# sourceMappingURL=/code.71fee06c.js.map