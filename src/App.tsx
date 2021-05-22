import React, { useEffect } from "react";
import { useRef } from "react";
import "App.scss";
import { connect } from "dva";
import { LazyImage, Header } from "./components";
// @ts-ignore
const App = ({ dispatch, data, limit, pager, name }) => {
  const loadingRef = useRef<any>(null);

  useEffect(() => {
    let current = loadingRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        dispatch({
          type: "model/getPage",
          payload: { _page: pager, _limit: limit },
        }).then((res) => {});
      }
    });
    observer.observe(current);

    return () => {
      if (loadingRef && current) {
        observer.unobserve(current);
        observer.disconnect();
      }
    };
  }, [pager, data, name, dispatch, limit]);

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
