import React from "react";
import { Grid } from "@mui/material";
import DataCard from "@/components/Dashboard/DataCard";
import classes from "@/styles/DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <Grid container gap={2} className={classes.dataRibbon}>
      <Grid>
        <DataCard
          title={"Net Revenue"}
          value={"$25,732.53"}
          description={
            "Recognized revenue after discounts and refunds for the active reporting window."
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Orders"}
          value={"462"}
          description={"Completed customer orders captured across all active storefronts."}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Average Order Value"}
          value={"$159.30"}
          description={
            "Average basket size across every completed checkout."
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Conversion Rate"}
          value={"0.61%"}
          description={"Share of sessions that converted into successful purchases."}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
