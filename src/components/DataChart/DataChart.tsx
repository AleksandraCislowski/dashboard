import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import {
  darkOptions,
  lightOptions,
  darkOptionsDoughnut,
  lightOptionsDoughnut,
  darkOptionsRadial,
  lightOptionsRadial,
  darkOptionsPolar,
  lightOptionsPolar,
} from "@/components/DataChart/Themes";
import { ChartConfiguration } from "chart.js";
import { useTheme } from "@mui/material/styles";

const DataChart = (props: ChartConfiguration) => {
  const theme = useTheme();
  const { data, options } = props;
  const chartRef = useRef<HTMLCanvasElement>(null);
  const modeOptions = React.useMemo(() => {
    const isDarkMode = theme.palette.mode === "dark";
    const isDoughnut = props.type === "doughnut";
    const isPolar = props.type === "polarArea";
    const isRadial = props.type === "radar" || props.type === "polarArea";

    if (isDarkMode && isDoughnut) return { ...darkOptionsDoughnut };
    if (!isDarkMode && isDoughnut) return { ...lightOptionsDoughnut };
    if (isDarkMode && isPolar) return { ...darkOptionsPolar };
    if (!isDarkMode && isPolar) return { ...lightOptionsPolar };
    if (isDarkMode && isRadial) return { ...darkOptionsRadial };
    if (!isDarkMode && isRadial) return { ...lightOptionsRadial };
    if (isDarkMode) return { ...darkOptions };

    return { ...lightOptions };
  }, [props.type, theme.palette.mode]);

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: { ...options, ...modeOptions },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data, modeOptions, options, props]);
  return <canvas ref={chartRef} />;
};
Chart.register(...registerables);

export default DataChart;
