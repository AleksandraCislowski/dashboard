import { ChartConfiguration } from "chart.js";

const lightLegendLabels = {
  color: "#3d4752",
  boxWidth: 12,
  boxHeight: 12,
  usePointStyle: true,
  pointStyle: "circle" as const,
};

const darkLegendLabels = {
  color: "#ffffff",
  boxWidth: 12,
  boxHeight: 12,
  usePointStyle: true,
  pointStyle: "circle" as const,
};

export const lightOptions: ChartConfiguration["options"] = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(41, 92, 133, 0.12)",
      },
      ticks: {
        color: "#5f6b7a",
      },
    },
    x: {
      grid: {
        color: "rgba(41, 92, 133, 0.08)",
      },
      ticks: {
        color: "#5f6b7a",
      },
    },
  },
  plugins: {
    legend: {
      labels: lightLegendLabels,
    },
  },
};

export const darkOptions: ChartConfiguration["options"] = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.22)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.9)",
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.16)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.9)",
      },
    },
  },
  plugins: {
    legend: {
      labels: darkLegendLabels,
    },
  },
};

export const lightOptionsDoughnut: ChartConfiguration["options"] = {
  scales: {
    x: {
      grid: {
        color: "rgba(41, 92, 133, 0.08)",
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "rgba(41, 92, 133, 0.08)",
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      labels: lightLegendLabels,
    },
  },
};

export const darkOptionsDoughnut: ChartConfiguration["options"] = {
  scales: {
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.16)",
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "rgba(255, 255, 255, 0.16)",
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      labels: darkLegendLabels,
    },
  },
};

export const lightOptionsRadial: ChartConfiguration["options"] = {
  scales: {
    r: {
      angleLines: {
        color: "rgba(41, 92, 133, 0.18)",
      },
      grid: {
        color: "rgba(41, 92, 133, 0.16)",
      },
      pointLabels: {
        color: "#4c5968",
      },
      ticks: {
        color: "#1F2933",
        backdropColor: "rgba(255, 253, 249, 0.82)",
        backdropPadding: 4,
      },
    },
  },
  plugins: {
    legend: {
      labels: lightLegendLabels,
    },
  },
};

export const darkOptionsRadial: ChartConfiguration["options"] = {
  scales: {
    r: {
      angleLines: {
        color: "rgba(255, 255, 255, 0.24)",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
      },
      pointLabels: {
        color: "rgba(255, 255, 255, 0.9)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.94)",
        backdropColor: "rgba(15, 23, 32, 0.74)",
        backdropPadding: 4,
      },
    },
  },
  plugins: {
    legend: {
      labels: darkLegendLabels,
    },
  },
};

export const lightOptionsPolar: ChartConfiguration["options"] = {
  scales: {
    r: {
      angleLines: {
        color: "rgba(41, 92, 133, 0.16)",
      },
      grid: {
        color: "rgba(41, 92, 133, 0.14)",
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      labels: lightLegendLabels,
    },
  },
};

export const darkOptionsPolar: ChartConfiguration["options"] = {
  scales: {
    r: {
      angleLines: {
        color: "rgba(255, 255, 255, 0.22)",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.18)",
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      labels: darkLegendLabels,
    },
  },
};
