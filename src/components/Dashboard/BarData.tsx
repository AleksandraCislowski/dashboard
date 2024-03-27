import React from "react";
import DataChart from "../DataChart/DataChart";
import { barData } from "@/helpers/mockData";
import { Paper } from "@mui/material";
import classes from "@/styles/UnitData.module.scss";

const BarData = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Paper className={classes.wrapper}>
      <DataChart type={"bar"} data={barData} options={options} />
    </Paper>
  );
};

export default BarData;
