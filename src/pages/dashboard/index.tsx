import { Box, Grid } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerMonth";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";
import Radar from "@/components/Dashboard/Radar";
import PolarArea from "@/components/Dashboard/PolarArea";
import BarData from "@/components/Dashboard/BarData";

const Dashboard = () => {
  return (
    <>
      <Box>
        <Grid container gap={4} marginTop={2}>
          <DataRibbon />
          <TransactionsPerDay />
        </Grid>
        <TransactionBottomRow />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Radar />
        <PolarArea />
        <BarData />
      </Box>
    </>
  );
};

export default Dashboard;
