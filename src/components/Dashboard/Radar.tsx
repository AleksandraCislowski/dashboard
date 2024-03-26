import React from "react";
import DataChart from "../DataChart/DataChart";
import { radarData } from "@/helpers/mockData";

const Radar = () => {
  return (
    <>
      <DataChart type={"radar"} data={radarData} />
    </>
  );
};

export default Radar;
