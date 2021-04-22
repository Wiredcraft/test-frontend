import React, { useState, useEffect, useLayoutEffect } from 'react'
import style from './Masonry.styl'

const Masonry = props => {
    const { renderUid, imgList, imgWidth, ImgBottom, ImgRight } = props
    const waterfallImgRight = ImgRight || 10;
    const waterfallImgBottom = ImgBottom || 10;
    let waterfallImgWidth = imgWidth || 200
    let waterfallImgCol;
    let waterfallDeviationHeight = []

    const [waterfallList, setWaterfallList] = useState([])

    useEffect(() => {
        setWaterfallList([])
        calculationWidth()
    }, [renderUid])

    useLayoutEffect(() => {
        let imgItems = [...document.querySelectorAll('img')];
    	lazyLoad(imgItems)
    })

    const lazyLoad = (imgItems) => {
        if (IntersectionObserver) {
            let lazyImageObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach((entry, index) => {
                let lazyImage = entry.target;
                // 如果元素可见
                if (entry.intersectionRatio > 0) {
                  if (lazyImage.getAttribute("src").includes("loading.gif")) {
                    lazyImage.src = lazyImage.getAttribute("data-src");
                  }
                  lazyImageObserver.unobserve(lazyImage)
                }
              })
            })

            imgItems.forEach((img) => {
                lazyImageObserver.observe(img);
            })
          }
    }

    const calculationWidth = () => {
        let domWidth = document.getElementById("waterfall").offsetWidth;
        if (!waterfallImgWidth && waterfallImgCol) {
            waterfallImgWidth = (domWidth - waterfallImgRight * waterfallImgCol) / waterfallImgCol;
        } else if (waterfallImgWidth && !waterfallImgCol) {
            waterfallImgCol = Math.floor(domWidth / (waterfallImgWidth + waterfallImgRight))
        }
        //初始化偏移高度数组
        waterfallDeviationHeight = new Array(waterfallImgCol).fill(0);
        imgPreloading()
    }
    //图片预加载
    const imgPreloading = () => {
        imgList.forEach(img => {
            let aImg = new Image();
            aImg.src = img.src;
            aImg.onload = aImg.onerror = e => {
                let imgData = {};
                imgData.height = (waterfallImgWidth / aImg.width) * aImg.height;
                imgData.src = img.src;
                rankImg(imgData);
            }
        });
    }
    //瀑布流布局
    const rankImg = (imgData) => {
        let minIndex = filterMin();
        imgData.top = waterfallDeviationHeight[minIndex];
        imgData.left = minIndex * (waterfallImgRight + waterfallImgWidth);
        waterfallDeviationHeight[minIndex] += (imgData.height + waterfallImgBottom);
        setWaterfallList(oldArray => [...oldArray, imgData]);
    }

    /**
     * 找到最短的列并返回下标
     * @returns {number} 下标
     */
    const filterMin = () => {
        const min = Math.min.apply(null, waterfallDeviationHeight);
        return waterfallDeviationHeight.indexOf(min);
    }

    return (
        <div className={style.waterfall} id="waterfall">
            {
                waterfallList.map(img => (
                    <div
                        key={img._id}
                        className={style.item}
                        style={{ top: img.top + 'px', left: img.left + 'px', width: waterfallImgWidth + 'px', height: img.height }}>
                        <img
                            data-src={img.src}
                            src="../images/loading.gif"
                            alt="img"
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Masonry
