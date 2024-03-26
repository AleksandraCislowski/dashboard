import React from "react";
import DataChart from "../DataChart/DataChart";
import { polarData } from "@/helpers/mockData";

const PolarArea = () => {
  return (
    <>
      <DataChart type={"polarArea"} data={polarData} />
    </>
  );
};

export default PolarArea;
