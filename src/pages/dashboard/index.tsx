import { Box, Grid } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerMonth";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";
import Radar from "@/components/Dashboard/Radar";
import PolarArea from "@/components/Dashboard/PolarArea";
import BarData from "@/components/Dashboard/BarData";
import classes from "@/styles/UnitData.module.scss";

const Dashboard = () => {
  return (
    <>
      <Box>
        <h1>Welcome to the DataSoft Dashboard!</h1>
        <Grid container gap={4} marginTop={2}>
          <DataRibbon />
          <TransactionsPerDay />
        </Grid>
        <TransactionBottomRow />
      </Box>
      <Box className={classes.double_wrapper}>
        <Radar />
        <PolarArea />
      </Box>
      <BarData />
    </>
  );
};

export default Dashboard;
