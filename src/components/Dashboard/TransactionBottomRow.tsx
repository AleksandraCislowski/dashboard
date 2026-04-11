import React from "react";
import DataChart from "@/components/DataChart/DataChart";
import Paper from "@mui/material/Paper";
import {
  doughnutChartData1,
  doughnutChartData2,
  doughnutChartData3,
  doughnutChartData4,
} from "@/helpers/mockData";
import classes from "@/styles/TransactionBottomRow.module.scss";
import { Box, Typography } from "@mui/material";

const TransactionBottomRow = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: true,
  };
  return (
    <Box className={classes.double_wrapper}>
      <Paper
        className={classes.wrapper}
        sx={{
          width: "100%",
        }}
      >
        <div className={classes.header}>
          <span className={classes.eyebrow}>Customers</span>
          <Typography variant='h6'>Customer Mix by Lifecycle Stage</Typography>
          <Typography className={classes.subtitle}>
            Track how much of the order base comes from new, repeat, and VIP shoppers.
          </Typography>
        </div>
        <DataChart
          type={"doughnut"}
          data={doughnutChartData1}
          options={options}
        />
      </Paper>
      <Paper
        className={classes.wrapper}
        sx={{
          width: "100%",
        }}
      >
        <div className={classes.header}>
          <span className={classes.eyebrow}>Acquisition</span>
          <Typography variant='h6'>Acquisition Channel Mix</Typography>
          <Typography className={classes.subtitle}>
            See which channels are generating the strongest share of storefront demand.
          </Typography>
        </div>
        <DataChart
          type={"doughnut"}
          data={doughnutChartData2}
          options={options}
        />
      </Paper>
      <Paper
        className={classes.wrapper}
        sx={{
          width: "100%",
        }}
      >
        <div className={classes.header}>
          <span className={classes.eyebrow}>Risk</span>
          <Typography variant='h6'>Order Risk Breakdown</Typography>
          <Typography className={classes.subtitle}>
            Surface the operational issues most likely to slow order fulfillment.
          </Typography>
        </div>
        <DataChart
          type={"doughnut"}
          data={doughnutChartData3}
          options={options}
        />
      </Paper>
      <Paper
        className={classes.wrapper}
        sx={{
          width: "100%",
        }}
      >
        <div className={classes.header}>
          <span className={classes.eyebrow}>Retention</span>
          <Typography variant='h6'>Loyalty Tier Distribution</Typography>
          <Typography className={classes.subtitle}>
            Measure how many customers are moving from first purchase to loyalty.
          </Typography>
        </div>
        <DataChart
          type={"doughnut"}
          data={doughnutChartData4}
          options={options}
        />
      </Paper>
    </Box>
  );
};

export default TransactionBottomRow;
