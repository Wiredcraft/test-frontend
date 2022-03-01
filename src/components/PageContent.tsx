import React, { useState, useRef, useEffect } from "react";
import { useGetImage } from "../server/getImage";
import { observer } from "mobx-react";
import Masonry from "react-masonry-component";
import { useStoreContext } from "../store";

export const PageContent = observer(() => {
  const pageStore = useStoreContext();
  const queryInstance = useGetImage(pageStore.searchKey);
  // const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="page-content">
      <Masonry
        className={"my-gallery-class"}
        options={{
          columnWidth: 200,
          gutter: 14,
          fitWidth: true,
        }}
        updateOnEachImageLoad
      >
        {queryInstance.data?.pages.map((pageData) => {
          return pageData.map((item) => {
            return (
              <div className="img-item" key={item._id + item.index}>
                <img src={item.src} alt={item.name} />
              </div>
            );
          });
        })}
        {/* 采用了  无限滚动的query 方式，可以扩充 */}
      </Masonry>
    </div>
  );
});
