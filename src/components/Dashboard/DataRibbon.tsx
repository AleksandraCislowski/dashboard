import React from "react";
import DataCard from "@/components/Dashboard/DataCard";
import classes from "@/styles/DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <div className={classes.dataRibbon}>
      <div>
        <DataCard
          title={"Net Revenue"}
          value={"$25,732.53"}
          trend={"+12.4%"}
          trendLabel={"vs previous 30 days"}
          description={
            "Recognized revenue after discounts and refunds for the active reporting window."
          }
        />
      </div>
      <div>
        <DataCard
          title={"Orders"}
          value={"462"}
          trend={"+8.1%"}
          trendLabel={"steady order volume growth"}
          description={"Completed customer orders captured across all active storefronts."}
        />
      </div>
      <div>
        <DataCard
          title={"Average Order Value"}
          value={"$159.30"}
          trend={"+4.7%"}
          trendLabel={"higher basket size than last month"}
          description={
            "Average basket size across every completed checkout."
          }
        />
      </div>
      <div>
        <DataCard
          title={"Conversion Rate"}
          value={"0.61%"}
          trend={"+0.08pp"}
          trendLabel={"checkout friction trending down"}
          description={"Share of sessions that converted into successful purchases."}
        />
      </div>
    </div>
  );
};

export default DataRibbon;
