import React from "react";
import TableMain from "./TableMain";

import { Regions } from "./Regions.js";

import styles from "./Styles/appstyles.module.css";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <div>
        <h1>Navbar</h1>
      </div>
      <TableMain Regions={Regions} />
    </div>
  );
}
