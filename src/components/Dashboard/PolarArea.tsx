import React from "react";
import DataChart from "../DataChart/DataChart";
import { polarData } from "@/helpers/mockData";
import { Paper, Typography } from "@mui/material";
import classes from "@/styles/UnitData.module.scss";

const PolarArea = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <Paper
      className={classes.wrapper}
      sx={{ width: "100%" }}
    >
      <div className={classes.header}>
        <span className={classes.eyebrow}>Merchandising</span>
        <Typography variant='h6'>Revenue Share by Category</Typography>
        <Typography className={classes.subtitle}>
          Spot which product categories are carrying the strongest contribution to revenue.
        </Typography>
      </div>
      <div className={classes.chartFrame}>
        <DataChart type={"polarArea"} data={polarData} options={options} />
      </div>
    </Paper>
  );
};

export default PolarArea;
