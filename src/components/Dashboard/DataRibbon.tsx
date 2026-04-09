import React from "react";
import { Grid } from "@mui/material";
import DataCard from "@/components/Dashboard/DataCard";
import classes from "@/styles/DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <Grid container gap={2} className={classes.dataRibbon}>
      <Grid>
        <DataCard
          title={"Orders Processed"}
          value={"462"}
          description={
            "Completed orders recorded across the current reporting period."
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Revenue"}
          value={"$25,732.53"}
          description={"Gross revenue generated during the current reporting period."}
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Average Order Value"}
          value={"$159.30"}
          description={
            "Average basket size across completed orders."
          }
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Conversion Rate"}
          value={"0.61%"}
          description={"Share of opportunities that turned into completed orders."}
        />
      </Grid>
    </Grid>
  );
};

export default DataRibbon;
