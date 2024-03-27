import React from "react";
import DataChart from "../DataChart/DataChart";
import { radarData } from "@/helpers/mockData";
import { Paper } from "@mui/material";
import classes from "@/styles/UnitData.module.scss";

const Radar = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Paper
      className={classes.wrapper}
      sx={{ width: { xs: "100%", md: "49%" } }}
    >
      <DataChart type={"radar"} data={radarData} options={options} />
    </Paper>
  );
};

export default Radar;
