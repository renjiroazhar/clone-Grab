import React, { Component } from "react";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import Caraousel from "./Caraousel";

const tabs = [
  { title: <Badge text={"3"}>Transport</Badge> },
  { title: <Badge text={20}>Food</Badge> },
  { title: <Badge dot>Delivery</Badge> }
];

export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <Tabs
          tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
          }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff"
            }}>
            Content of first tab
          </div>
          <div>
            <Caraousel />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff"
            }}>
            Content of third tab
          </div>
        </Tabs>
        <WhiteSpace />

        <WhiteSpace />
      </div>
    );
  }
}
