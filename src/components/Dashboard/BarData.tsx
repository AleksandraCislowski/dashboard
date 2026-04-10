import React from "react";
import DataChart from "../DataChart/DataChart";
import { barData } from "@/helpers/mockData";
import { Paper, Typography } from "@mui/material";
import classes from "@/styles/BarData.module.scss";

const BarData = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Paper className={classes.wrapper}>
      <div className={classes.header}>
        <span className={classes.eyebrow}>Demand</span>
        <Typography variant='h6'>Weekly Demand Signals</Typography>
        <Typography className={classes.subtitle}>
          Balance gross orders, recovered carts, and churn risk to prioritize follow-up.
        </Typography>
      </div>
      <DataChart type={"bar"} data={barData} options={options} />
    </Paper>
  );
};

export default BarData;
