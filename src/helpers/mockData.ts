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
      label: "Paid Search",
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
      label: "Email",
      data: [21, 23, 35, 48, 61, 68, 87, 92, 100, 76, 55, 98],
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
      label: "Organic",
      data: [44, 50, 67, 58, 49, 57, 64, 55, 54, 53, 48, 65],
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
  labels: ["New shoppers", "Returning customers", "VIP customers"],
  datasets: [
    {
      label: "Customer lifecycle mix",
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
  labels: ["Paid Search", "Paid Social", "Email", "Direct", "Affiliates"],
  datasets: [
    {
      label: "Acquisition mix",
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
    "Refund risk",
    "Delivery delay",
    "Payment review",
    "Stockout risk",
    "Address issue",
    "Fraud check",
  ],
  datasets: [
    {
      label: "Order risk signals",
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
  labels: ["First order", "Repeat buyer", "Loyal customer"],
  datasets: [
    {
      label: "Loyalty tiers",
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
    "ROAS",
    "Conversion",
    "Retention",
    "AOV",
    "Revenue share",
    "Repeat rate",
    "Margin quality",
  ],
  datasets: [
    {
      label: "Paid Search",
      data: [78, 62, 31, 64, 88, 28, 59],
      fill: true,
      backgroundColor: withOpacity(chartPalette.navy, 0.18),
      borderColor: chartPalette.navy,
      pointBackgroundColor: chartPalette.navy,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: chartPalette.navy,
    },
    {
      label: "Email",
      data: [61, 71, 84, 72, 56, 79, 68],
      fill: true,
      backgroundColor: withOpacity(chartPalette.teal, 0.18),
      borderColor: chartPalette.teal,
      pointBackgroundColor: chartPalette.teal,
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: chartPalette.teal,
    },
    {
      label: "Organic",
      data: [49, 58, 76, 63, 67, 82, 74],
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
    "Apparel",
    "Home",
    "Beauty",
    "Accessories",
    "Bundles",
  ],
  datasets: [
    {
      label: "Revenue share",
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
      label: "Gross orders",
      data: [5, 1, 18, 81, 46, 32, 42],
      backgroundColor: withOpacity(chartPalette.navy, 0.72),
      borderColor: chartPalette.navy,
      borderWidth: 1,
      borderRadius: 8,
    },
    {
      label: "Recovered carts",
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
