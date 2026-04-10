import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";
import {
  Box,
  Button,
  InputBase,
  Paper,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import classes from "@/styles/Analytics.module.scss";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 999,
  backgroundColor: alpha(theme.palette.secondary.light, 0.12),
  border: `1px solid ${alpha(theme.palette.secondary.light, 0.25)}`,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.2, 1.5, 1.2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    width: "100%",
  },
}));

const LoadingOverlay = () => <LinearProgress />;

const summaryCards = [
  {
    label: "Tracked orders",
    value: "462",
    context: "active records in current view",
  },
  {
    label: "At-risk orders",
    value: "18",
    context: "shipping, fraud, or payment review",
  },
  {
    label: "Fastest-growing source",
    value: "Paid Search",
    context: "up 12.4% vs previous period",
  },
];

const filters = [
  "Last 30 days",
  "All channels",
  "High-value customers",
  "EU + North America",
];

const quickViews = [
  "All orders",
  "At-risk orders",
  "High AOV orders",
  "Returning customer orders",
];

const operationalNotes = [
  "Delayed shipments account for the largest share of flagged orders this week.",
  "Paid Search is driving higher order volume, but Email keeps the strongest repeat rate.",
  "VIP customer orders continue to show the lowest refund risk across the current window.",
];

const Analytics = () => {
  const theme = useTheme();
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 12,
  });

  return (
    <Box className={classes.page}>
      <section className={classes.hero}>
        <div className={classes.heroIntro}>
          <span className={classes.kicker}>Order Intelligence</span>
          <h2>From top-line KPI to record-level decisions.</h2>
          <p>
            Investigate the records behind revenue, conversion, and fulfillment
            trends so the operations team can move from signal to action
            without leaving the workspace.
          </p>
        </div>
        <Paper className={classes.heroPanel}>
          <span className={classes.panelEyebrow}>Workspace status</span>
          <div className={classes.statusRow}>
            <strong>Synced 5 min ago</strong>
            <span>3 watchlist alerts need follow-up</span>
          </div>
          <div className={classes.actionRow}>
            <Button variant='contained' startIcon={<FileDownloadOutlinedIcon />}>
              Export report
            </Button>
            <Button variant='outlined' startIcon={<TuneOutlinedIcon />}>
              Customize view
            </Button>
          </div>
        </Paper>
      </section>

      <section className={classes.summaryGrid}>
        {summaryCards.map((card) => (
          <Paper key={card.label} className={classes.summaryCard}>
            <span className={classes.cardLabel}>{card.label}</span>
            <strong>{card.value}</strong>
            <span className={classes.cardContext}>{card.context}</span>
          </Paper>
        ))}
      </section>

      <section className={classes.filterSection}>
        <div className={classes.filterHeader}>
          <div>
            <span className={classes.sectionKicker}>Filters</span>
            <Typography variant='h5'>Saved views and active filters</Typography>
          </div>
          <p>
            Use quick slices to jump between broad order monitoring, risk
            review, and customer-value analysis.
          </p>
        </div>
        <div className={classes.filterRow}>
          {filters.map((filter) => (
            <span key={filter} className={classes.filterPill}>
              {filter}
            </span>
          ))}
        </div>
        <div className={classes.quickViewRow}>
          {quickViews.map((view, index) => (
            <button
              key={view}
              className={`${classes.quickView} ${
                index === 0 ? classes.quickViewActive : ""
              }`}
              type='button'
            >
              {view}
            </button>
          ))}
        </div>
      </section>

      <section className={classes.workspaceGrid}>
        <Paper className={classes.tablePanel}>
          <div className={classes.tableHeader}>
            <div>
              <span className={classes.sectionKicker}>Dataset</span>
              <Typography variant='h5'>Operational order records</Typography>
              <Typography className={classes.subtleText}>
                Search by channel, customer, or metric label to narrow the
                current table view.
              </Typography>
            </div>
            <div className={classes.searchWrap}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Search orders, channels, or customers...'
                  inputProps={{
                    "aria-label": "search the order intelligence table",
                  }}
                />
              </Search>
            </div>
          </div>
          <div className={classes.tableWrap}>
            <DataGrid
              sx={{
                maxWidth: 1500,
                width: "100%",
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "18px",
                "& .MuiDataGrid-row:hover": {
                  backgroundColor: alpha(theme.palette.secondary.light, 0.12),
                },
                "& .MuiDataGrid-columnHeader": {
                  backgroundColor: theme.palette.primary.main,
                  position: "sticky",
                  color: "white",
                },
                "& .MuiDataGrid-row": {
                  backgroundColor: "default",
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                  },
                },
                "& .MuiSvgIcon-root": {
                  fill: theme.palette.secondary.main,
                },
              }}
              slots={{
                loadingOverlay: LoadingOverlay,
              }}
              loading={!data}
              {...data}
            />
          </div>
        </Paper>

        <Paper className={classes.notesPanel}>
          <div className={classes.notesHeader}>
            <span className={classes.sectionKicker}>Watchlist</span>
            <Typography variant='h6'>Operational notes</Typography>
            <Typography className={classes.subtleText}>
              Keep a running view of the issues most likely to impact revenue,
              customer satisfaction, or fulfillment speed.
            </Typography>
          </div>
          <div className={classes.noteList}>
            {operationalNotes.map((note, index) => (
              <div key={note} className={classes.noteItem}>
                <span className={classes.noteIndex}>0{index + 1}</span>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </Paper>
      </section>
    </Box>
  );
};

export default Analytics;
