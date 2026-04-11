import * as React from "react";
import type { GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import {
  Box,
  Button,
  InputBase,
  Paper,
  Typography,
  alpha,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import SearchIcon from "@mui/icons-material/Search";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import classes from "@/styles/Analytics.module.scss";

const DataGrid = dynamic(
  () => import("@mui/x-data-grid").then((module) => module.DataGrid),
  {
    ssr: false,
  }
);

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

type OrderRow = {
  id: number;
  orderId: string;
  channel: string;
  customer: string;
  segment: string;
  region: string;
  revenue: string;
  revenueValue: number;
  risk: "Low" | "Medium" | "High";
  status: string;
};

const channelFilters = [
  "All channels",
  "Paid Search",
  "Email",
  "Paid Social",
  "Organic",
  "Direct",
  "Affiliates",
] as const;

type ChannelFilter = (typeof channelFilters)[number];

type ActiveFilters = {
  last30Days: boolean;
  channel: ChannelFilter;
  highValueCustomers: boolean;
  targetMarkets: boolean;
};

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

const orderRows: OrderRow[] = [
  {
    id: 1,
    orderId: "#NC-1048",
    channel: "Paid Search",
    customer: "Marta Jensen",
    segment: "Returning",
    region: "Nordics",
    revenue: "$428",
    revenueValue: 428,
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
    revenueValue: 1240,
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
    revenueValue: 286,
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
    revenueValue: 512,
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
    revenueValue: 960,
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
    revenueValue: 184,
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
    revenueValue: 372,
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
    revenueValue: 1120,
    risk: "Low",
    status: "Fulfilled",
  },
  {
    id: 9,
    orderId: "#NC-1056",
    channel: "Paid Social",
    customer: "Sofia Rossi",
    segment: "Returning",
    region: "EU",
    revenue: "$648",
    revenueValue: 648,
    risk: "Medium",
    status: "Stockout risk",
  },
  {
    id: 10,
    orderId: "#NC-1057",
    channel: "Organic",
    customer: "Mika Tanaka",
    segment: "VIP",
    region: "APAC",
    revenue: "$1,480",
    revenueValue: 1480,
    risk: "Low",
    status: "Priority shipped",
  },
  {
    id: 11,
    orderId: "#NC-1058",
    channel: "Direct",
    customer: "Amelia Clark",
    segment: "New shopper",
    region: "North America",
    revenue: "$226",
    revenueValue: 226,
    risk: "High",
    status: "Fraud check",
  },
  {
    id: 12,
    orderId: "#NC-1059",
    channel: "Email",
    customer: "Erik Hansen",
    segment: "Returning",
    region: "Nordics",
    revenue: "$540",
    revenueValue: 540,
    risk: "Low",
    status: "Fulfilled",
  },
  {
    id: 13,
    orderId: "#NC-1060",
    channel: "Paid Search",
    customer: "Priya Patel",
    segment: "VIP",
    region: "UK",
    revenue: "$1,860",
    revenueValue: 1860,
    risk: "Low",
    status: "Packed",
  },
  {
    id: 14,
    orderId: "#NC-1061",
    channel: "Affiliates",
    customer: "Lucas Meyer",
    segment: "Returning",
    region: "DACH",
    revenue: "$734",
    revenueValue: 734,
    risk: "Medium",
    status: "Delayed shipment",
  },
  {
    id: 15,
    orderId: "#NC-1062",
    channel: "Paid Social",
    customer: "Isla Wilson",
    segment: "New shopper",
    region: "North America",
    revenue: "$198",
    revenueValue: 198,
    risk: "Low",
    status: "Fulfilled",
  },
  {
    id: 16,
    orderId: "#NC-1063",
    channel: "Email",
    customer: "Freja Lind",
    segment: "VIP",
    region: "Nordics",
    revenue: "$1,320",
    revenueValue: 1320,
    risk: "Low",
    status: "Priority shipped",
  },
  {
    id: 17,
    orderId: "#NC-1064",
    channel: "Organic",
    customer: "Daniel Kim",
    segment: "Returning",
    region: "APAC",
    revenue: "$612",
    revenueValue: 612,
    risk: "Medium",
    status: "Payment review",
  },
  {
    id: 18,
    orderId: "#NC-1065",
    channel: "Direct",
    customer: "Clara Dubois",
    segment: "VIP",
    region: "EU",
    revenue: "$1,040",
    revenueValue: 1040,
    risk: "High",
    status: "Address issue",
  },
  {
    id: 19,
    orderId: "#NC-1066",
    channel: "Paid Search",
    customer: "Noah Miller",
    segment: "New shopper",
    region: "North America",
    revenue: "$310",
    revenueValue: 310,
    risk: "Low",
    status: "Packed",
  },
  {
    id: 20,
    orderId: "#NC-1067",
    channel: "Email",
    customer: "Emma Schneider",
    segment: "Returning",
    region: "DACH",
    revenue: "$476",
    revenueValue: 476,
    risk: "Low",
    status: "Fulfilled",
  },
];

const generatedOrderRows: OrderRow[] = Array.from({ length: 30 }, (_, index) => {
  const id = index + 21;
  const channels = [
    "Paid Search",
    "Email",
    "Paid Social",
    "Organic",
    "Direct",
    "Affiliates",
  ];
  const customers = [
    "Hanna Larsen",
    "Marco Bellini",
    "Grace Evans",
    "Felix Bauer",
    "Yuki Nakamura",
    "Mila Kowalski",
    "Oscar Nielsen",
    "Iris Laurent",
    "Ravi Kapoor",
    "Ella Thompson",
  ];
  const segments = ["New shopper", "Returning", "VIP"];
  const regions = ["Nordics", "UK", "EU", "DACH", "North America", "APAC", "CEE"];
  const statuses = [
    "Fulfilled",
    "Packed",
    "Delayed shipment",
    "Payment review",
    "Priority shipped",
    "Stockout risk",
    "Address issue",
    "Fraud check",
  ];
  const riskByStatus: Record<string, OrderRow["risk"]> = {
    Fulfilled: "Low",
    Packed: "Low",
    "Priority shipped": "Low",
    "Delayed shipment": "Medium",
    "Payment review": "Medium",
    "Stockout risk": "Medium",
    "Address issue": "High",
    "Fraud check": "High",
  };
  const status = statuses[index % statuses.length];
  const revenueValue = 180 + ((index * 137) % 1680);

  return {
    id,
    orderId: `#NC-${1068 + index}`,
    channel: channels[index % channels.length],
    customer: customers[index % customers.length],
    segment: segments[index % segments.length],
    region: regions[index % regions.length],
    revenue: `$${revenueValue.toLocaleString("en-US")}`,
    revenueValue,
    risk: riskByStatus[status],
    status,
  };
});

const allOrderRows = [...orderRows, ...generatedOrderRows];
const targetMarketRegions = new Set([
  "Nordics",
  "UK",
  "EU",
  "DACH",
  "North America",
  "CEE",
]);
const defaultActiveFilters: ActiveFilters = {
  last30Days: false,
  channel: "All channels",
  highValueCustomers: false,
  targetMarkets: false,
};

const Analytics = () => {
  const theme = useTheme();
  const matchesDesktopGrid = useMediaQuery("(min-width: 760px)", {
    noSsr: true,
  });
  const [isMounted, setIsMounted] = React.useState(false);
  const showDesktopGrid = isMounted && matchesDesktopGrid;
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeQuickView, setActiveQuickView] = React.useState(quickViews[0]);
  const [activeFilters, setActiveFilters] =
    React.useState<ActiveFilters>(defaultActiveFilters);
  const [paginationModel, setPaginationModel] =
    React.useState<GridPaginationModel>({
      page: 0,
      pageSize: 50,
    });
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

  const handleResetFilters = () => {
    setActiveFilters(defaultActiveFilters);
    setActiveQuickView(quickViews[0]);
    setSearchQuery("");
    setPaginationModel({
      page: 0,
      pageSize: 50,
    });
  };

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    setPaginationModel((currentModel) => ({
      ...currentModel,
      page: 0,
    }));
  }, [activeFilters, activeQuickView, searchQuery]);

  const filteredRows = React.useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return allOrderRows.filter((row) => {
      const matchesSavedFilters =
        (!activeFilters.last30Days || row.id % 6 !== 0) &&
        (activeFilters.channel === "All channels" ||
          row.channel === activeFilters.channel) &&
        (!activeFilters.highValueCustomers ||
          row.segment === "VIP" ||
          row.revenueValue >= 900) &&
        (!activeFilters.targetMarkets || targetMarketRegions.has(row.region));
      const matchesQuickView =
        activeQuickView === "All orders" ||
        (activeQuickView === "At-risk orders" && row.risk !== "Low") ||
        (activeQuickView === "High AOV orders" && row.revenueValue >= 900) ||
        (activeQuickView === "Returning customer orders" &&
          row.segment !== "New shopper");

      if (!matchesSavedFilters || !matchesQuickView) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return [
        row.orderId,
        row.channel,
        row.customer,
        row.segment,
        row.region,
        row.revenue,
        row.risk,
        row.status,
      ].some((value) => value.toLowerCase().includes(normalizedQuery));
    });
  }, [activeFilters, activeQuickView, searchQuery]);

  const atRiskRows = filteredRows.filter((row) => row.risk !== "Low");
  const fastestGrowingSource =
    filteredRows.find((row) => row.channel === "Paid Search")?.channel ??
    filteredRows[0]?.channel ??
    "No source";
  const activeFilterLabels = [
    activeFilters.last30Days ? "Last 30 days" : null,
    activeFilters.channel !== "All channels" ? activeFilters.channel : null,
    activeFilters.highValueCustomers ? "High-value customers" : null,
    activeFilters.targetMarkets ? "EU + North America" : null,
  ].filter((label): label is string => Boolean(label));
  const mobilePreviewRows = filteredRows.slice(0, 5);
  const hasCustomFilters =
    activeFilters.last30Days !== defaultActiveFilters.last30Days ||
    activeFilters.channel !== defaultActiveFilters.channel ||
    activeFilters.highValueCustomers !== defaultActiveFilters.highValueCustomers ||
    activeFilters.targetMarkets !== defaultActiveFilters.targetMarkets ||
    activeQuickView !== quickViews[0] ||
    searchQuery.length > 0;
  const summaryCards = [
    {
      label: "Tracked orders",
      value: `${filteredRows.length}`,
      context:
        searchQuery ||
        activeQuickView !== "All orders" ||
        activeFilterLabels.length > 0
          ? "records matching the current table view"
          : "active records in current view",
    },
    {
      label: "At-risk orders",
      value: `${atRiskRows.length}`,
      context: "shipping, fraud, or payment review",
    },
    {
      label: "Fastest-growing source",
      value: fastestGrowingSource,
      context: "based on the current filtered view",
    },
  ];

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
            <Typography variant='h5' component='h3'>
              Saved views and active filters
            </Typography>
          </div>
          <p>
            Adjust the core filters directly, then use quick slices to switch
            between monitoring, risk review, and customer-value analysis.
          </p>
        </div>
        <div className={classes.filterGrid}>
          <label className={classes.filterControl}>
            <span>Date range</span>
            <select
              value={activeFilters.last30Days ? "last30" : "all"}
              onChange={(event) =>
                setActiveFilters((currentFilters) => ({
                  ...currentFilters,
                  last30Days: event.target.value === "last30",
                }))
              }
            >
              <option value='last30'>Last 30 days</option>
              <option value='all'>All dates</option>
            </select>
          </label>
          <label className={classes.filterControl}>
            <span>Channel</span>
            <select
              value={activeFilters.channel}
              onChange={(event) =>
                setActiveFilters((currentFilters) => ({
                  ...currentFilters,
                  channel: event.target.value as ChannelFilter,
                }))
              }
            >
              {channelFilters.map((channel) => (
                <option key={channel} value={channel}>
                  {channel}
                </option>
              ))}
            </select>
          </label>
          <label className={classes.filterControl}>
            <span>Customer value</span>
            <select
              value={activeFilters.highValueCustomers ? "highValue" : "all"}
              onChange={(event) =>
                setActiveFilters((currentFilters) => ({
                  ...currentFilters,
                  highValueCustomers: event.target.value === "highValue",
                }))
              }
            >
              <option value='highValue'>High-value customers</option>
              <option value='all'>All customer values</option>
            </select>
          </label>
          <label className={classes.filterControl}>
            <span>Region</span>
            <select
              value={activeFilters.targetMarkets ? "targetMarkets" : "all"}
              onChange={(event) =>
                setActiveFilters((currentFilters) => ({
                  ...currentFilters,
                  targetMarkets: event.target.value === "targetMarkets",
                }))
              }
            >
              <option value='targetMarkets'>EU + North America</option>
              <option value='all'>All regions</option>
            </select>
          </label>
          <Button
            className={classes.resetFilters}
            variant='text'
            onClick={handleResetFilters}
            disabled={!hasCustomFilters}
          >
            Reset filters
          </Button>
        </div>
        <div className={classes.quickViewRow}>
          {quickViews.map((view) => (
            <button
              key={view}
              className={`${classes.quickView} ${
                activeQuickView === view ? classes.quickViewActive : ""
              }`}
              type='button'
              onClick={() => setActiveQuickView(view)}
              aria-pressed={activeQuickView === view}
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
              <Typography variant='h5' component='h3'>
                Operational order records
              </Typography>
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
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  inputProps={{
                    "aria-label": "search the order intelligence table",
                  }}
                />
              </Search>
            </div>
          </div>
          <div className={classes.resultMeta} role='status' aria-live='polite'>
            Showing {filteredRows.length} of {allOrderRows.length} records
            {searchQuery ? ` for "${searchQuery}"` : ""} in {activeQuickView}.
            {activeFilterLabels.length
              ? ` Active filters: ${activeFilterLabels.join(", ")}.`
              : ""}
          </div>
          {!showDesktopGrid && (
            <div className={classes.mobileRecordList}>
              <div className={classes.mobileRecordHeader}>
                <span className={classes.sectionKicker}>Mobile summary</span>
                <Typography variant='h6' component='h4'>
                  Showing the first {mobilePreviewRows.length} matching records.
                </Typography>
                <Typography className={classes.subtleText}>
                  The full sortable grid is available on tablet and desktop,
                  where column actions and pagination have enough space to work
                  properly.
                </Typography>
              </div>
              {mobilePreviewRows.map((row) => (
                <article key={row.orderId} className={classes.mobileRecordCard}>
                  <div>
                    <strong>{row.orderId}</strong>
                    <span>{row.customer}</span>
                  </div>
                  <div>
                    <strong>{row.revenue}</strong>
                    <span>{row.channel}</span>
                  </div>
                  <div className={classes.mobileRecordMeta}>
                    <span>{row.segment}</span>
                    <span>{row.region}</span>
                    <span>{row.risk} risk</span>
                  </div>
                  <p>{row.status}</p>
                </article>
              ))}
            </div>
          )}
          {showDesktopGrid && (
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
                  "& .MuiDataGrid-columnHeader .MuiDataGrid-iconButtonContainer, & .MuiDataGrid-columnHeader .MuiDataGrid-menuIcon":
                    {
                      opacity: 1,
                    },
                  "& .MuiDataGrid-columnHeader .MuiSvgIcon-root": {
                    fill: "rgba(255, 255, 255, 0.92)",
                  },
                  "& .MuiDataGrid-columnHeader .MuiIconButton-root:hover .MuiSvgIcon-root, & .MuiDataGrid-columnHeader .MuiIconButton-root:focus-visible .MuiSvgIcon-root":
                    {
                      fill: "#ffffff",
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
                rows={filteredRows}
                columns={orderColumns}
                disableRowSelectionOnClick
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[10, 20, 50]}
              />
            </div>
          )}
        </Paper>

        <Paper className={classes.notesPanel}>
          <div className={classes.notesHeader}>
            <span className={classes.sectionKicker}>Watchlist</span>
            <Typography variant='h6' component='h3'>
              Operational notes
            </Typography>
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
