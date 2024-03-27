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
    if (theme.palette.mode === "dark" && props.type === "doughnut")
      return { ...darkOptionsDoughnut };
    if (theme.palette.mode === "light" && props.type === "doughnut")
      return { ...lightOptionsDoughnut };
    if (theme.palette.mode === "dark" && props.type !== "doughnut")
      return { ...darkOptions };
    if (theme.palette.mode === "light" && props.type !== "doughnut")
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
