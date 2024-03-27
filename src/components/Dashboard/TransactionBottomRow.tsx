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
import { Box } from "@mui/material";

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
          width: { xs: "49%", md: "24%" },
        }}
      >
        <p>TransActions per user type</p>
        <DataChart
          type={"doughnut"}
          data={doughnutChartData1}
          options={options}
        />
      </Paper>
      <Paper
        className={classes.wrapper}
        sx={{
          width: { xs: "49%", md: "24%" },
        }}
      >
        <p>Social-media marketing</p>
        <DataChart
          type={"doughnut"}
          data={doughnutChartData2}
          options={options}
        />
      </Paper>
      <Paper
        className={classes.wrapper}
        sx={{
          width: { xs: "49%", md: "24%" },
        }}
      >
        <p>Departments size</p>
        <DataChart
          type={"doughnut"}
          data={doughnutChartData3}
          options={options}
        />
      </Paper>
      <Paper
        className={classes.wrapper}
        sx={{
          width: { xs: "49%", md: "24%" },
        }}
      >
        <p>Customer database</p>
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
