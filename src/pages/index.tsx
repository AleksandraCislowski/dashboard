import Dashboard from "./dashboard/Dashboard";
import classes from "@/styles/Home.module.scss";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className={classes.main}>
      <Dashboard />
    </main>
  );
};

export default Home;
