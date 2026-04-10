import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import {
  darkOptions,
  lightOptions,
  darkOptionsDoughnut,
  lightOptionsDoughnut,
  darkOptionsRadial,
  lightOptionsRadial,
} from "@/components/DataChart/Themes";
import { ChartConfiguration } from "chart.js";
import { useTheme } from "@emotion/react";

const DataChart = (props: ChartConfiguration) => {
  const theme = useTheme();
  const { data, options } = props;
  const chartRef = useRef<HTMLCanvasElement>(null);

  const assignedOptions = () => {
    const isDarkMode =
      // @ts-ignore
      theme.palette.mode === "dark";
    const isDoughnut = props.type === "doughnut";
    const isRadial = props.type === "radar" || props.type === "polarArea";

    if (isDarkMode && isDoughnut) {
      return { ...darkOptionsDoughnut };
    }

    if (!isDarkMode && isDoughnut) {
      return { ...lightOptionsDoughnut };
    }

    if (isDarkMode && isRadial) {
      return { ...darkOptionsRadial };
    }

    if (!isDarkMode && isRadial) {
      return { ...lightOptionsRadial };
    }

    if (
      isDarkMode &&
      !(isDoughnut || isRadial)
    )
      return { ...darkOptions };
    if (
      !isDarkMode &&
      !(isDoughnut || isRadial)
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
