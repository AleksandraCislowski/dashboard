import React from "react";
import classes from "@/styles/TransactionsPerDay.module.scss";
import { Card, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import DataChart from "@/components/DataChart/DataChart";
import { lineChartData } from "@/components/mockData";

export type TransactionCardType = {
  title: string;
  value: string;
  changeValue: string;
};

const TransactionsPerDay = () => {
  const theme = useTheme();

  return (
    <Grid container gap={2} className={classes.wrapper}>
      <Paper className={classes.transactions}>
        <div className={classes.chart}>
          <Typography>TransActions per month</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={classes.cardWrapper}>
          <Card className={classes.card} variant={"outlined"}>
            <div className={classes.cardTitle}>
              <Typography>Total Products</Typography>
            </div>
            <div className={classes.cardValue}>
              <Typography>1.275</Typography>
              <Typography color={theme.palette.success.main}>428.7%</Typography>
            </div>
          </Card>
          <Card className={classes.card} variant={"outlined"}>
            <div className={classes.cardTitle}>
              <Typography>Buy-to-detail</Typography>
            </div>
            <div className={classes.cardValue}>
              <Typography>4.40%</Typography>
              <Typography color={theme.palette.success.main}>899.4%</Typography>
            </div>
          </Card>
          <Card className={classes.card} variant={"outlined"}>
            <div className={classes.cardTitle}>
              <Typography>Refunds</Typography>
            </div>
            <div className={classes.cardValue}>
              <Typography>0</Typography>
              <Typography color={theme.palette.success.main}>0</Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
};

export default TransactionsPerDay;
