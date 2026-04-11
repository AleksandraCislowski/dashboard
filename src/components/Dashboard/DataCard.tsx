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
        <Typography sx={{ color: "lightslategrey", fontSize: "1rem" }}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography
              sx={{ fontSize: 16 }}
            >{`${description} Current value: ${value}.`}</Typography>
          }
        >
          <IconButton aria-label={`View details for ${title}`}>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className={classes.valueBlock}>
        <Typography sx={{ fontSize: "2.125rem" }}>{value}</Typography>
        {trend && <span className={classes.trend}>{trend}</span>}
      </div>
      {trendLabel && (
        <Typography className={classes.trendLabel}>{trendLabel}</Typography>
      )}
    </Paper>
  );
};

export default DataCard;
