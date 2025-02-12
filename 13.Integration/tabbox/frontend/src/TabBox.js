import React from "react";
import Tabs from "./Tabs";
import data from "./assets/json/data.js";
import TabView from "./TabView";
import { Tab_Box } from "./assets/scss/TabBox.scss";

function TabBox() {
  return (
    <div className={Tab_Box}>
      <Tabs tabs={data} />
      <TabView />
    </div>
  );
}

export default TabBox;
