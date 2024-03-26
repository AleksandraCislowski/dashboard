import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { darkOptions, lightOptions } from "@/components/DataChart/Themes";
import { months } from "@/helpers/Util";
import { ChartConfiguration } from "chart.js";
import { useTheme } from "@emotion/react";

const DataChart = (props: ChartConfiguration) => {
  const theme = useTheme();
  const { data, options } = props;
  const chartRef = useRef<HTMLCanvasElement>(null);

  const labels = months({ count: 7 });
  useEffect(() => {
    const mode =
      theme.palette.mode === "dark" ? { ...darkOptions } : { ...lightOptions };
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
