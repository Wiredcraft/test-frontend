import Masonry from "masonry-layout";

/**
 *  自动调整图片大小方法
 * @param {*} fixWidth  固定宽度
 * @param {*} objImg   当前图片的实例
 */
export const AutoResizeImage = (fixWidth, objImg) => {
    let w = objImg.width;
    let h = objImg.height;

    let wRatio = fixWidth / w;
    let authHeight = h * wRatio;

    objImg.height = authHeight;
    objImg.width = fixWidth;
};

/**
 * 获取瀑布流实例
 * @returns
 */
export const getMasonry = () => {
    // new Masonry(节点, 配置)
    let obj = new Masonry(document.querySelector(".grid"), {
        itemSelector: ".grid-item", // 要布局的网格元素
        columnWidth: 201, // 获取节点 可以自动计算每列的宽度
        fitWidth: true, // 设置网格容器宽度等于网格宽度
        gutter: 14,
        originLeft: true,
        initLayout: true,
    });
    return obj;
};

/**
 * 判断两个数组元素是否一样
 * @param {*} array1  数组1
 * @param {*} array2  数组2
 * @returns
 */
export const isAllEqual = (array1, array2) => {
    return (
        array1.length === array2.length &&
        array1.every(function (v, i) {
            return v._id === array2[i]._id;
        })
    );
};
