import request from "../utils/request";

// 请求本地的public文件夹获取图片列表资源
export const getImages = data => {
    return request.get(`json/data.json`).then(res => {
        let lists = [];
        // 条件模糊查询
        if (data.queryStr) {
            lists = res.filter(
                item =>
                    item.name
                        .toLowerCase()
                        .indexOf(data.queryStr.toLowerCase()) !== -1
            );
        } else {
            // 没用条件查询
            lists = res;
        }
        return {
            list: lists.slice(
                (data.page - 1) * data.limit,
                data.page * data.limit
            ),
            count: lists.length,
        };
    });
};
