import React from "react";
import Card from "../card/Card";
import memberData from "../../data/memberData";

function grid() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
      <Card item={memberData[0]}/>
      <Card item={memberData[1]}/>
      <Card item={memberData[2]}/>
      <Card item={memberData[3]}/>
    </div>
  );
}

export default grid;
