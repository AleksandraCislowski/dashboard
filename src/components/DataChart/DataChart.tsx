import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import {
  darkOptions,
  lightOptions,
  darkOptionsDoughnut,
  lightOptionsDoughnut,
} from "@/components/DataChart/Themes";
import { months } from "@/helpers/Util";
import { ChartConfiguration } from "chart.js";
import { useTheme } from "@emotion/react";

const DataChart = (props: ChartConfiguration) => {
  const theme = useTheme();
  const { data, options } = props;
  const chartRef = useRef<HTMLCanvasElement>(null);

  const labels = months({ count: 7 });
  const assignedOptions = () => {
    if (
      // @ts-ignore
      theme.palette.mode === "dark" &&
      (props.type === "doughnut" ||
        props.type === "radar" ||
        props.type === "polarArea")
    )
      return { ...darkOptionsDoughnut };
    if (
      // @ts-ignore
      theme.palette.mode === "light" &&
      (props.type === "doughnut" ||
        props.type === "radar" ||
        props.type === "polarArea")
    )
      return { ...lightOptionsDoughnut };
    if (
      // @ts-ignore
      theme.palette.mode === "dark" &&
      !(
        props.type === "doughnut" ||
        props.type === "radar" ||
        props.type === "polarArea"
      )
    )
      return { ...darkOptions };
    if (
      // @ts-ignore
      theme.palette.mode === "light" &&
      !(
        props.type === "doughnut" ||
        props.type === "radar" ||
        props.type === "polarArea"
      )
    )
      return { ...lightOptions };
  };
  useEffect(() => {
    const mode = assignedOptions();
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: { ...options, ...mode },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data, theme]);
  return <canvas ref={chartRef} />;
};
Chart.register(...registerables);

export default DataChart;
