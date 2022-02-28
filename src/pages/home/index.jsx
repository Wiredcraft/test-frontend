/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import { useCallback, useEffect, useRef, useState } from "react";
import { getImages } from "../../service/images";
import { useSelector, useDispatch } from "react-redux";
import { setImages } from "../../store/action/images";
import { AutoResizeImage, getMasonry, isAllEqual } from "./methods";
import Header from "../../components/Header";
import InfiniteScroll from "react-infinite-scroll-component";
import loadingGif from "../../static/images/loading.gif";

export default function Home() {
    //页面滑动容器 制作懒加载功能
    const bodyRef = useRef();
    // 请求loading
    const [loading, setLoading] = useState(false);
    // 数据的条数
    const [count, setCount] = useState(0);
    // dispatch
    const dispatch = useDispatch();

    // 获取状态
    let { images, page, queryStr } = useSelector(state => {
        return state.images;
    });

    // 图片列表渲染好之后会触发effect，此时图片dom被创建，图片则为异步加载
    useEffect(() => {
        if (images && images.length > 0) {
            // 实例一个瀑布流
            let masonryObj = getMasonry();
            let imgDom = document.getElementsByClassName("item-img");
            let imgArr = Array.from(imgDom);
            imgArr.map(item => {
                const urlWidth = (item.width = 240);
                item.height = parseInt(
                    item.src.split(`${urlWidth}/`)[1].split("?random")[0]
                );
                AutoResizeImage(201, item);
                // 事件委托
                item.onload = function () {
                    masonryObj.layout();
                };
                return null;
            });
        }
    }, [images]);

    // 一次请求20张，缓解加载压力，提升性能
    const getImagesList = useCallback(
        async (page = 1) => {
            if (loading) {
                return;
            }
            setLoading(true);
            let obj = await getImages({ page, limit: 20, queryStr });
            let newImages = [];
            console.log(isAllEqual(images, obj.list));

            // 优化查询闪动

            if (queryStr) {
                if (isAllEqual(images, obj.list)) {
                    newImages = obj.list;
                } else if (page > 1) {
                    newImages = [...images, ...obj.list];
                } else {
                    newImages = obj.list;
                }
            } else {
                newImages = [...images, ...obj.list];
            }

            dispatch(
                setImages({
                    images: newImages,
                    page: page + 1,
                })
            );
            setCount(obj.count);
            setLoading(false);
        },
        [queryStr, dispatch, loading, images]
    );

    // 条件查询
    useEffect(() => {
        getImagesList();
    }, [queryStr]);

    return (
        <div id="scrollableDiv" className="home-body" ref={bodyRef}>
            <Header />

            <InfiniteScroll
                dataLength={images.length}
                next={() => getImagesList(page)}
                scrollableTarget="scrollableDiv"
                hasMore={images.length < count}
            >
                <div className="grid">
                    {images.map(item => (
                        <div className="grid-item" key={item._id}>
                            <img
                                className="item-img"
                                alt=""
                                title={item.name}
                                style={{
                                    backgroundImage: `url(${loadingGif})`,
                                }}
                                src={item.src}
                            ></img>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}
