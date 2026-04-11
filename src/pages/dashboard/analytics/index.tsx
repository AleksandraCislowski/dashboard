import * as React from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
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

const orderColumns: GridColDef[] = [
  { field: "orderId", headerName: "Order", minWidth: 120, flex: 0.7 },
  { field: "channel", headerName: "Channel", minWidth: 140, flex: 1 },
  { field: "customer", headerName: "Customer", minWidth: 170, flex: 1.1 },
  { field: "segment", headerName: "Segment", minWidth: 150, flex: 1 },
  { field: "region", headerName: "Region", minWidth: 140, flex: 0.9 },
  { field: "revenue", headerName: "Revenue", minWidth: 120, flex: 0.8 },
  { field: "risk", headerName: "Risk", minWidth: 140, flex: 0.9 },
  { field: "status", headerName: "Status", minWidth: 160, flex: 1 },
];

const orderRows = [
  {
    id: 1,
    orderId: "#NC-1048",
    channel: "Paid Search",
    customer: "Marta Jensen",
    segment: "Returning",
    region: "Nordics",
    revenue: "$428",
    risk: "Low",
    status: "Fulfilled",
  },
  {
    id: 2,
    orderId: "#NC-1049",
    channel: "Email",
    customer: "Oliver Smith",
    segment: "VIP",
    region: "UK",
    revenue: "$1,240",
    risk: "Low",
    status: "Priority shipped",
  },
  {
    id: 3,
    orderId: "#NC-1050",
    channel: "Paid Social",
    customer: "Ava Chen",
    segment: "New shopper",
    region: "North America",
    revenue: "$286",
    risk: "Medium",
    status: "Payment review",
  },
  {
    id: 4,
    orderId: "#NC-1051",
    channel: "Organic",
    customer: "Jonas Berg",
    segment: "Returning",
    region: "DACH",
    revenue: "$512",
    risk: "Low",
    status: "Packed",
  },
  {
    id: 5,
    orderId: "#NC-1052",
    channel: "Direct",
    customer: "Nora Garcia",
    segment: "VIP",
    region: "EU",
    revenue: "$960",
    risk: "High",
    status: "Address issue",
  },
  {
    id: 6,
    orderId: "#NC-1053",
    channel: "Affiliates",
    customer: "Theo Martin",
    segment: "New shopper",
    region: "North America",
    revenue: "$184",
    risk: "Medium",
    status: "Delayed shipment",
  },
  {
    id: 7,
    orderId: "#NC-1054",
    channel: "Email",
    customer: "Lina Novak",
    segment: "Returning",
    region: "CEE",
    revenue: "$372",
    risk: "Low",
    status: "Fulfilled",
  },
  {
    id: 8,
    orderId: "#NC-1055",
    channel: "Paid Search",
    customer: "Elias Brown",
    segment: "VIP",
    region: "UK",
    revenue: "$1,120",
    risk: "Low",
    status: "Fulfilled",
  },
];

const Analytics = () => {
  const theme = useTheme();
  const [actionMessage, setActionMessage] = React.useState(
    "Ready to export or customize this workspace view."
  );

  const handleExportReport = () => {
    setActionMessage(
      "Demo report prepared. In production, this would download the current Order Intelligence view as CSV."
    );
  };

  const handleCustomizeView = () => {
    setActionMessage(
      "Customize mode preview enabled. Saved views and visible columns would open in a production workspace."
    );
  };

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
            <Button
              variant='contained'
              startIcon={<FileDownloadOutlinedIcon />}
              onClick={handleExportReport}
            >
              Export report
            </Button>
            <Button
              variant='outlined'
              startIcon={<TuneOutlinedIcon />}
              onClick={handleCustomizeView}
            >
              Customize view
            </Button>
          </div>
          <div className={classes.actionFeedback} role='status' aria-live='polite'>
            {actionMessage}
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
                  backgroundColor: theme.palette.background.paper,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.secondary.main, 0.08),
                  },
                },
                "& .MuiSvgIcon-root": {
                  fill: theme.palette.secondary.main,
                },
              }}
              rows={orderRows}
              columns={orderColumns}
              disableRowSelectionOnClick
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 8 },
                },
              }}
              pageSizeOptions={[8]}
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
