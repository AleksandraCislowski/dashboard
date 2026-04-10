import React from "react";
import DataChart from "../DataChart/DataChart";
import { radarData } from "@/helpers/mockData";
import { Paper, Typography } from "@mui/material";
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
      <div className={classes.header}>
        <span className={classes.eyebrow}>Efficiency</span>
        <Typography variant='h6'>Channel Efficiency Snapshot</Typography>
        <Typography className={classes.subtitle}>
          Compare ROAS, retention, AOV, and repeat rate across core channels.
        </Typography>
      </div>
      <DataChart type={"radar"} data={radarData} options={options} />
    </Paper>
  );
};

export default Radar;
