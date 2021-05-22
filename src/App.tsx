import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "App.scss";
import { connect } from "dva";
import { LazyImage, Header } from "./components";
// @ts-ignore
const App = ({ dispatch, data, limit, pager, name }) => {
  const loadingRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        console.log("app called");
        dispatch({
          type: "model/getPage",
          payload: { _page: pager, _limit: limit },
        }).then((res: any) => {});
      }
    });
    observer.observe(loadingRef.current);

    return () => {
      if (loadingRef && loadingRef.current) {
        observer.unobserve(loadingRef.current);
        observer.disconnect();
      }
    };
  }, [pager, data, name]);

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        {data.map(
          (item: { _id: string; src: string; name: string }, index: number) => {
            return <LazyImage id={item._id} src={item.src} name={item.name} />;
          }
        )}
      </div>
      <div ref={loadingRef}></div>
    </div>
  );
};

// @ts-ignore
export default connect(({ model }) => ({
  ...model,
}))(App);
