/**
 * 模拟阻塞多少秒执行
 * @param {*} delay  多少秒
 */
export const sleep = delay => {
    var start = new Date().getTime();
    while (new Date().getTime() - start < delay) {
        continue;
    }
};
