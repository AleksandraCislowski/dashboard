import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "@/components/DataChart";
import Paper from "@mui/material/Paper";
import {
  doughnutChartData1,
  doughnutChartData2,
  doughnutChartData3,
  doughnutChartData4,
} from "@/helpers/mockData";
import classes from "@/styles/TransactionBottomRow.module.scss";

const TransactionBottomRow = () => {
  return (
    <Grid container className={classes.bottomRow}>
      <Grid>
        <Paper className={classes.dataCard}>
          <p>TransActions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData1} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={classes.dataCard}>
          <p>Social-media marketing</p>
          <DataChart type={"doughnut"} data={doughnutChartData2} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={classes.dataCard}>
          <p>Departments size</p>
          <DataChart type={"doughnut"} data={doughnutChartData3} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={classes.dataCard}>
          <p>Customer database</p>
          <DataChart type={"doughnut"} data={doughnutChartData4} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;
