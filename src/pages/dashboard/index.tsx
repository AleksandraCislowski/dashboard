import { Box, Paper } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import classes from "@/styles/UnitData.module.scss";
import homeClasses from "@/styles/DashboardHome.module.scss";
import dynamic from "next/dynamic";

const ChartPanelFallback = () => (
  <Paper className={homeClasses.chartFallback} aria-hidden='true' />
);

const TransactionsPerDay = dynamic(
  () => import("@/components/Dashboard/TransactionsPerMonth"),
  {
    ssr: false,
    loading: ChartPanelFallback,
  }
);
const TransactionBottomRow = dynamic(
  () => import("@/components/Dashboard/TransactionBottomRow"),
  {
    ssr: false,
    loading: ChartPanelFallback,
  }
);
const Radar = dynamic(() => import("@/components/Dashboard/Radar"), {
  ssr: false,
  loading: ChartPanelFallback,
});
const PolarArea = dynamic(() => import("@/components/Dashboard/PolarArea"), {
  ssr: false,
  loading: ChartPanelFallback,
});
const BarData = dynamic(() => import("@/components/Dashboard/BarData"), {
  ssr: false,
  loading: ChartPanelFallback,
});

const Dashboard = () => {
  const filters = ["Last 30 days", "All channels", "EU + North America", "Returning customers"];
  const highlights = [
    "Paid Search revenue is up 12.4% month over month.",
    "Checkout completion improved after the cart UX update.",
    "Refund risk remains concentrated in delayed shipments.",
  ];

  return (
    <Box className={homeClasses.page}>
      <section className={homeClasses.hero}>
        <div className={homeClasses.heroIntro}>
          <span className={homeClasses.kicker}>Northstar Commerce</span>
          <h1>Operational visibility for the storefront team.</h1>
          <p>
            Track revenue, order volume, conversion quality, and channel
            efficiency from one workspace built for e-commerce operations.
          </p>
          <div className={homeClasses.filterRow}>
            {filters.map((filter) => (
              <span key={filter} className={homeClasses.filterPill}>
                {filter}
              </span>
            ))}
          </div>
        </div>
        <Paper className={homeClasses.heroPanel}>
          <span className={homeClasses.panelEyebrow}>Today&apos;s signal</span>
          <h2>Revenue is accelerating while refund pressure stays contained.</h2>
          <p>
            Northstar last synced 5 minutes ago. Paid Search and Email are
            carrying growth, while shipping-related issues are the main source
            of operational friction.
          </p>
          <div className={homeClasses.heroStats}>
            <div>
              <strong>5 min</strong>
              <span>time since refresh</span>
            </div>
            <div>
              <strong>3</strong>
              <span>priority alerts</span>
            </div>
            <div>
              <strong>71.2%</strong>
              <span>checkout completion</span>
            </div>
          </div>
        </Paper>
      </section>

      <section className={homeClasses.section}>
        <div className={homeClasses.sectionHeader}>
          <div>
            <span className={homeClasses.sectionKicker}>Overview</span>
            <h2>Core storefront metrics</h2>
          </div>
          <p>Prioritized KPIs for daily performance checks across revenue, demand, and conversion.</p>
        </div>
        <DataRibbon />
      </section>

      <section className={homeClasses.section}>
        <div className={homeClasses.sectionHeader}>
          <div>
            <span className={homeClasses.sectionKicker}>Trend</span>
            <h2>Revenue and retention momentum</h2>
          </div>
          <p>See which channels are driving growth and whether returning customers are holding steady.</p>
        </div>
        <div className={homeClasses.mainGrid}>
          <TransactionsPerDay />
        </div>
      </section>

      <section className={homeClasses.section}>
        <div className={homeClasses.sectionHeader}>
          <div>
            <span className={homeClasses.sectionKicker}>Insights</span>
            <h2>Acquisition, risk, and customer composition</h2>
          </div>
          <p>Quick-read widgets for lifecycle mix, acquisition health, order risk, and loyalty distribution.</p>
        </div>
        <TransactionBottomRow />
      </section>

      <section className={homeClasses.section}>
        <div className={homeClasses.sectionHeader}>
          <div>
            <span className={homeClasses.sectionKicker}>Signals</span>
            <h2>Where to act next</h2>
          </div>
          <p>Channel efficiency, category performance, and weekly demand help the operations team prioritize follow-up.</p>
        </div>
        <div className={homeClasses.insightStrip}>
          {highlights.map((highlight) => (
            <Paper key={highlight} className={homeClasses.insightCard}>
              {highlight}
            </Paper>
          ))}
        </div>
      </section>

      <Box className={classes.double_wrapper}>
        <Radar />
        <PolarArea />
      </Box>
      <section className={homeClasses.section}>
        <BarData />
      </section>
    </Box>
  );
};

export default Dashboard;
