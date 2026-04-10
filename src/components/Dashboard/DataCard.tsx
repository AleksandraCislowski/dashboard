import { Paper } from "@mui/material";
import classes from "@/styles/DataCard.module.scss";
import React from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
  trend?: string;
  trendLabel?: string;
};

const DataCard = (props: DataCardProps) => {
  const { title, value, description, trend, trendLabel } = props;
  return (
    <Paper className={classes.dataCard}>
      <div className={classes.header}>
        <Typography fontSize={"h6"} color={"lightslategrey"}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography
              fontSize={16}
            >{`${description} Current value: ${value}.`}</Typography>
          }
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className={classes.valueBlock}>
        <Typography fontSize={"h4"}>{value}</Typography>
        {trend && <span className={classes.trend}>{trend}</span>}
      </div>
      {trendLabel && (
        <Typography className={classes.trendLabel}>{trendLabel}</Typography>
      )}
    </Paper>
  );
};

export default DataCard;
