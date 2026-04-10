import React from "react";
import classes from "@/styles/TransactionsPerMonth.module.scss";
import { Card, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import DataChart from "@/components/DataChart/DataChart";
import { lineChartData } from "@/helpers/mockData";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionsPerMonth = () => {
  const theme = useTheme();

  return (
    <Grid container gap={2} className={classes.wrapper}>
      <Paper className={classes.transactions}>
        <div className={classes.chart}>
          <Typography>Revenue Trend by Channel</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={classes.cardWrapper}>
          <Card className={classes.card} variant={"outlined"}>
            <div className={classes.cardTitle}>
              <Typography>Returning Customer Share</Typography>
            </div>
            <div className={classes.cardValue}>
              <Typography>38.4%</Typography>
              <Typography color={theme.palette.success.main}>+6.8%</Typography>
            </div>
          </Card>
          <Card className={classes.card} variant={"outlined"}>
            <div className={classes.cardTitle}>
              <Typography>Checkout Completion</Typography>
            </div>
            <div className={classes.cardValue}>
              <Typography>71.2%</Typography>
              <Typography color={theme.palette.success.main}>+3.1%</Typography>
            </div>
          </Card>
          <Card className={classes.card} variant={"outlined"}>
            <div className={classes.cardTitle}>
              <Typography>Refund Rate</Typography>
            </div>
            <div className={classes.cardValue}>
              <Typography>1.9%</Typography>
              <Typography color={theme.palette.success.main}>-0.4%</Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionsPerMonth;
