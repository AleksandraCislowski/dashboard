import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import classes from "@/styles/Dashboard.module.scss";

const Dashboard = () => {
  return (
    <Box>
      <Grid container gap={2} className={classes.topCardsContainer}>
        <Grid>
          <Paper className={classes.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={classes.dataCard}>xs=4</Paper>
        </Grid>
        <Grid>
          <Paper className={classes.dataCard}>xs=4</Paper>
        </Grid>
      </Grid>
      <Grid xs={12} marginY={2}>
        <Paper className={classes.dataCard}>xs=8</Paper>
      </Grid>
    </Box>
  );
};

export default Dashboard;
