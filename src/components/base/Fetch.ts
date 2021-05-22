import qs from "qs";

const Fetch = (url: string, params = {}, method = "POST") => {
  let isOk = false;

  let host = process.env.REACT_APP_BASE_URL;
  if (method.toUpperCase() === "GET") {
    host = `${host}${url}?${qs.stringify(params)}`;
  } else {
    host = `${host}${url}`;
  }

  return new Promise((resolve, reject) => {
    // @ts-ignore
    fetch(host, {
      method: method,
      mode: "cors",
      headers: {
        //'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        if (isOk) {
          let ct = response.headers.get("Content-Type");
          if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
            response
              .clone()
              .text()
              .then((content) => {});
            return response.json();
          } else {
            reject({ message: "返回格式错误" });
          }
        } else {
          reject({ message: "服务器内部错误" });
        }
      })
      .then((responseData) => {
        if (isOk) {
          resolve(responseData);
        } else if (responseData.errorCode) {
        } else {
          if (!responseData.msg || responseData.msg === "") {
            responseData.msg = "服务器异常";
          }
          reject({ message: responseData.msg });
        }
      })
      .catch((error) => {
        if (error.message === "Network request failed") {
          error.message = "网络连接失败,请检查网络";
        } else {
          error.message = "服务器内部错误";
          reject(error);
        }
      });
  });
};

export default Fetch;
