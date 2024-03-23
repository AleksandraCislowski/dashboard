import { Box } from "@mui/material";
import React from "react";
import classes from "@/styles/Dashboard.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";

const Dashboard = () => {
  return (
    <Box>
      <DataRibbon />
      <TransactionsPerDay />
    </Box>
  );
};

export default Dashboard;
