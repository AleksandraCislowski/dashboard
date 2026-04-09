import { ChartConfiguration } from "chart.js";

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
      labels: {
        color: "#3d4752",
        boxWidth: 12,
        boxHeight: 12,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};

export const darkOptions: ChartConfiguration["options"] = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.12)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.82)",
      },
    },
    x: {
      grid: {
        color: "rgba(255, 255, 255, 0.08)",
      },
      ticks: {
        color: "rgba(255, 255, 255, 0.82)",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#ffffff",
        boxWidth: 12,
        boxHeight: 12,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};

export const lightOptionsDoughnut: ChartConfiguration["options"] = {
  scales: {
    x: {
      ticks: {
        display: false,
      },
    },

    y: {
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#3d4752",
        boxWidth: 12,
        boxHeight: 12,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};

export const darkOptionsDoughnut: ChartConfiguration["options"] = {
  scales: {
    x: {
      ticks: {
        display: false,
      },
    },

    y: {
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#ffffff",
        boxWidth: 12,
        boxHeight: 12,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};
