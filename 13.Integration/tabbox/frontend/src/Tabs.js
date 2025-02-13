import React from "react";
import TabItem from "./TabItems";
import styled from "styled-components";

const StyledUL = styled.ul`
  height: 24px;
`;

function Tabs({ tabs, selectTab }) {
  return (
    <StyledUL>
      {tabs.map((tab) => (
        <TabItem
          no={tab.no}
          name={tab.name}
          active={tab.active}
          selectTab={selectTab}
        />
      ))}
    </StyledUL>
  );
}

export default Tabs;
