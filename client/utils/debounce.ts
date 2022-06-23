export const debounce = (fn: any, wait: number) => {
  let callback = fn;    
  let timerId: number = 0;

  function debounced(this: any) {
      const context = this;
      const args = arguments;        

      clearTimeout(timerId);
      
      timerId = window.setTimeout(function() {            
        callback.apply(context, args);
      }, wait);
  }
  
  return debounced;   
}

export const throttle = (fn: any, wait: number) => {
  let callback = fn;    
  let timerId: number = 0;

  let firstInvoke = true;

  function throttled(this: any) {
    const context = this;
    let args = arguments;           

    if (firstInvoke) {
      callback.apply(context, args);
      firstInvoke = false;
      return;
    }

    if (timerId) {
      return;
    }

    timerId = window.setTimeout(function() {  
      clearTimeout(timerId);
      timerId = 0;

      callback.apply(context, args);
    }, wait);
  }

  return throttled;
}