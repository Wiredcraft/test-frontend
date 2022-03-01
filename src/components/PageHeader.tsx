import React, { useState } from "react";

import { observer } from "mobx-react";
import { useStoreContext } from "../store";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import { ReactComponent as NoticeSVG } from "../assets/notice.svg";
import { ReactComponent as ProfileSVG } from "../assets/profile.svg";
import { ReactComponent as SearchSVG } from "../assets/search.svg";

export const PageHeader = observer(() => {
  const pageStore = useStoreContext();
  return (
    <>
      <div className="page-header-placeholder"></div>
      <div className="page-header">
        <div className="search-wrapper">
          <SearchSVG className="search-icon" />
          <input
            className="search-input"
            onChange={(e) => {
              pageStore.changeSearchKey(e.target.value);
            }}
            type="text"
          />
        </div>
        <HomeSVG className="icon" />
        <NoticeSVG className="icon" />
        <ProfileSVG className="icon" />
      </div>
    </>
  );
});
