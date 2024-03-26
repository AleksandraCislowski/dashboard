import { months } from "@/helpers/Util";

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "IT - department",
      data: [65, 59, 80, 81, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Insurance",
      data: [1, 23, 35, 110, 100, 90, 87, 92, 100, 76, 55, 98],
      fill: false,
      borderColor: "rgb(192, 75, 161)",
      tension: 0.1,
    },
    {
      label: "Human resources",
      data: [44, 50, 67, 38, 39, 37, 34, 25, 24, 23, 18, 35],
      fill: false,
      borderColor: "rgb(192, 190, 75)",
      tension: 0.1,
    },
  ],
};

export const doughnutChartData1 = {
  labels: ["Students", "Employee", "Pensioners"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [150, 280, 20],
      backgroundColor: [
        "rgb(251, 255, 137)",
        "rgb(178,3,106)",
        "rgb(7, 39, 165)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartData2 = {
  labels: ["LinkedIn", "Facebook", "Twitter", "Instagram", "TikTok"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [120, 150, 80, 100, 8],
      backgroundColor: [
        "rgb(230, 234, 10)",
        "rgb(178, 3, 3)",
        "rgb(3, 178, 6)",
        "rgb(91, 7, 165)",
        "rgb(11, 232, 140)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartData3 = {
  labels: [
    "Customer service",
    "Marketing",
    "Sales",
    "Menagement",
    "Refunds",
    "HR",
  ],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [120, 10, 80, 10, 15, 15],
      backgroundColor: [
        "rgb(216, 167, 20)",
        "rgb(75, 0, 90)",
        "rgb(16, 229, 232)",
        "rgb(7, 39, 165)",
        "rgb(65, 1, 1)",
        "rgb(244, 137, 104)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const doughnutChartData4 = {
  labels: ["Age 18-25", "Age 25-45", "Age 45+"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [120, 150, 100],
      backgroundColor: [
        "rgb(30, 5, 140)",
        "rgb(25, 224, 228)",
        "rgb(24, 224, 28)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const radarData = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

export const polarData = {
  labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
  datasets: [
    {
      label: "My First Dataset",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ],
};

export const barData = {
  labels: months({ count: 7 }),
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
    {
      label: "My second Dataset",
      data: [12, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};
