const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type MonthConfig = {
  count?: number;
  section?: number;
};

export const months = (config: MonthConfig = {}) => {
  const cfg = config || {};
  const count = cfg.count || 12;
  const section = cfg.section;
  const values: string[] = [];

  for (let i = 0; i < count; ++i) {
    const value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
};
