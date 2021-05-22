import Fetch from "./Fetch";

const Request = (url: string, params = {}, method = "POST", timeout = 8000) => {
  let fetch_promise = Fetch(url, params, method);
  if (process.env.NODE_ENV === "development") {
    return fetch_promise;
  } else {
    // var abort_fn = null;
    var abort_promise = new Promise(function (resolve, reject) {
      // abort_fn = function (abort) {
      //   reject(abort);
      // };
    });

    var abortable_promise = Promise.race([fetch_promise, abort_promise]);

    //abortable_promise.abort = abort_fn;

    setTimeout(function () {
      //abortable_promise.abort({ message: "连接超时，请检查网络" });
    }, timeout);
    return abortable_promise;
  }
};

export default Request;
