import React from "react";
import DataChart from "../DataChart/DataChart";
import { radarData } from "@/helpers/mockData";
import { Box } from "@mui/material";

const Radar = () => {
  return (
    <Box>
      <DataChart type={"radar"} data={radarData} />
    </Box>
  );
};

export default Radar;
