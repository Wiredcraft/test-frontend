

export function getScrollTop () {
  let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

export function getScrollHeight () {
  let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if(document.body){
    bodyScrollHeight = document.body.scrollHeight;
  }
  if(document.documentElement){
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight ;
  return scrollHeight;
}

function getWindowHeight () {
  let windowHeight = 0;
  if (document.compatMode === "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

export function isScrollEnd (scrollThreshold = 0) {
  return getScrollHeight() - getScrollTop() - getWindowHeight() <= scrollThreshold
}