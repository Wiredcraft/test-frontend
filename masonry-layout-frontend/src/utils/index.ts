export function getClient() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }
}


export function throttle(func, wait = 500) {
  let timer = null,
    previous = 0;
  return function anonymous(...params) {
    let now = new Date().getTime(),
      remaining = wait - (now - previous);
    if (remaining <= 0) {
      clearTimeout(timer);
      timer = null;
      previous = now;
      func.call(this, ...params);
    } else if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        previous = new Date().getTime();
        func.call(this, ...params);
      }, remaining);
    }
  };
}

function getCss(element, attr) {
  let value = window.getComputedStyle(element)[attr],
    reg = /^\d+(px|rem|em)?$/i;
  if (reg.test(value)) {
    value = parseFloat(value).toString();
  }
  return value;
}

function setCss(element, attr, value) {
  if (attr === "opacity") {
    element['style']['opacity'] = value;
    element['style']['filter'] = `alpha(opacity=${value * 100})`;
    return;
  }
  let reg = /^(width|height|margin|padding)?(top|left|bottom|right)?$/i;
  if (reg.test(attr)) {

    if (!isNaN(value)) {
      value += 'px';
    }
  }
  element['style'][attr] = value;
}

function setGroupCss(element, options) {
  for (let key in options) {
    if (!options.hasOwnProperty(key)) break;
    setCss(element, key, options[key]);
  }
}

export function css(element, ...args) {
  let len = arguments.length,
    attr = arguments[1],
    value = arguments[2];
  if (len >= 3) {
    setCss(element, attr, value);
    return;
  }
  if (attr !== null && typeof attr === "object") {
    setGroupCss(element, attr);
    return;
  }
  return getCss(element, attr);
}