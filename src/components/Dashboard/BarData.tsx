import React from "react";
import DataChart from "../DataChart/DataChart";
import { barData } from "@/helpers/mockData";

const BarData = () => {
  return (
    <>
      <DataChart type={"bar"} data={barData} />
    </>
  );
};

export default BarData;
