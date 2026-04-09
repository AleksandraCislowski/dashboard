import { months } from "@/helpers/Util";

const chartPalette = {
  navy: "#295C85",
  teal: "#2F7F90",
  sage: "#6E8F72",
  amber: "#D5A44B",
  coral: "#CF6A5C",
  plum: "#8A5A86",
  slate: "#7A8798",
  sky: "#6EA9D7",
};

const withOpacity = (hex: string, opacity: number) => {
  const sanitized = hex.replace("#", "");
  const value = parseInt(sanitized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Product",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: chartPalette.navy,
      backgroundColor: withOpacity(chartPalette.navy, 0.18),
      pointBackgroundColor: chartPalette.navy,
      pointBorderColor: "#ffffff",
      pointHoverBackgroundColor: "#ffffff",
      pointHoverBorderColor: chartPalette.navy,
      pointRadius: 3,
      pointHoverRadius: 5,
      tension: 0.35,
    },
    {
      label: "Operations",
      data: [1, 23, 35, 110, 100, 90, 87, 92, 100, 76, 55, 98],
      fill: false,
      borderColor: chartPalette.teal,
      backgroundColor: withOpacity(chartPalette.teal, 0.18),
      pointBackgroundColor: chartPalette.teal,
      pointBorderColor: "#ffffff",
      pointHoverBackgroundColor: "#ffffff",
      pointHoverBorderColor: chartPalette.teal,
      pointRadius: 3,
      pointHoverRadius: 5,
      tension: 0.35,
    },
    {
      label: "People",
      data: [44, 50, 67, 38, 39, 37, 34, 25, 24, 23, 18, 35],
      fill: false,
      borderColor: chartPalette.amber,
      backgroundColor: withOpacity(chartPalette.amber, 0.18),
      pointBackgroundColor: chartPalette.amber,
      pointBorderColor: "#ffffff",
      pointHoverBackgroundColor: "#ffffff",
      pointHoverBorderColor: chartPalette.amber,
      pointRadius: 3,
      pointHoverRadius: 5,
      tension: 0.35,
    },
  ],
};

export const doughnutChartData1 = {
  labels: ["Students", "Professionals", "Retirees"],
  datasets: [
    {
      label: "Transactions",
      data: [150, 280, 20],
      backgroundColor: [
        chartPalette.navy,
        chartPalette.teal,
        chartPalette.amber,
      ],
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartData2 = {
  labels: ["LinkedIn", "Facebook", "Twitter", "Instagram", "TikTok"],
  datasets: [
    {
      label: "Channel mix",
      data: [120, 150, 80, 100, 8],
      backgroundColor: [
        chartPalette.navy,
        chartPalette.coral,
        chartPalette.sage,
        chartPalette.plum,
        chartPalette.sky,
      ],
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartData3 = {
  labels: [
    "Customer service",
    "Marketing",
    "Sales",
    "Management",
    "Refunds",
    "HR",
  ],
  datasets: [
    {
      label: "Department share",
      data: [120, 10, 80, 10, 15, 15],
      backgroundColor: [
        chartPalette.amber,
        chartPalette.plum,
        chartPalette.sky,
        chartPalette.navy,
        chartPalette.coral,
        chartPalette.sage,
      ],
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartData4 = {
  labels: ["Ages 18-25", "Ages 26-45", "Ages 46+"],
  datasets: [
    {
      label: "Customer age groups",
      data: [120, 150, 100],
      backgroundColor: [
        chartPalette.navy,
        chartPalette.teal,
        chartPalette.sage,
      ],
      borderWidth: 0,
      hoverOffset: 4,
    },
  ],
};

export const radarData = {
  labels: [
    "Deep work",
    "Meetings",
    "Reporting",
    "Assignments",
    "Coding",
    "Debugging",
    "Design",
  ],
  datasets: [
    {
      label: "Engineering",
      data: [65, 59, 90, 11, 126, 125, 40],
      fill: true,
      backgroundColor: withOpacity(chartPalette.navy, 0.18),
      borderColor: chartPalette.navy,
      pointBackgroundColor: chartPalette.navy,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: chartPalette.navy,
    },
    {
      label: "Sales",
      data: [128, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: withOpacity(chartPalette.teal, 0.18),
      borderColor: chartPalette.teal,
      pointBackgroundColor: chartPalette.teal,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: chartPalette.teal,
    },
    {
      label: "Marketing",
      data: [15, 139, 8, 70, 26, 75, 60],
      fill: true,
      backgroundColor: withOpacity(chartPalette.amber, 0.2),
      borderColor: chartPalette.amber,
      pointBackgroundColor: chartPalette.amber,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: chartPalette.amber,
    },
  ],
};

export const polarData = {
  labels: [
    "Adaptability",
    "Teamwork",
    "Problem solving",
    "Leadership",
    "Creativity",
  ],
  datasets: [
    {
      label: "Employee profile",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        chartPalette.navy,
        chartPalette.teal,
        chartPalette.amber,
        chartPalette.slate,
        chartPalette.coral,
      ],
      borderWidth: 0,
    },
  ],
};

export const barData = {
  labels: months({ count: 7 }),
  datasets: [
    {
      label: "Sales",
      data: [5, 1, 18, 81, 46, 32, 42],
      backgroundColor: withOpacity(chartPalette.navy, 0.72),
      borderColor: chartPalette.navy,
      borderWidth: 1,
      borderRadius: 8,
    },
    {
      label: "Qualified leads",
      data: [12, 20, 25, 44, 56, 30, 10],
      backgroundColor: withOpacity(chartPalette.teal, 0.72),
      borderColor: chartPalette.teal,
      borderWidth: 1,
      borderRadius: 8,
    },
    {
      label: "Churn risk",
      data: [0, 0, 8, 1, 6, 0, 0],
      backgroundColor: withOpacity(chartPalette.coral, 0.72),
      borderColor: chartPalette.coral,
      borderWidth: 1,
      borderRadius: 8,
    },
  ],
};
