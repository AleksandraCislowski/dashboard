import React from "react";
import DataChart from "../DataChart/DataChart";
import { polarData } from "@/helpers/mockData";
import { Box } from "@mui/material";

const PolarArea = () => {
  return (
    <Box>
      <DataChart type={"polarArea"} data={polarData} />
    </Box>
  );
};

export default PolarArea;
