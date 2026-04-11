import React, { useEffect, useRef } from "react";
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  DoughnutController,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  Tooltip,
  type ChartConfiguration,
} from "chart.js";
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
import { useTheme } from "@mui/material/styles";

Chart.register(
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  DoughnutController,
  Filler,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  PolarAreaController,
  RadarController,
  RadialLinearScale,
  Tooltip
);

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
  return (
    <canvas
      ref={chartRef}
      role='img'
      aria-label={`${props.type} chart showing Northstar Commerce analytics data`}
    />
  );
};

export default DataChart;
