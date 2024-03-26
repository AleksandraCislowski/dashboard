import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useTheme } from "@emotion/react";

const Analytics = () => {
  const theme = useTheme();
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 12,
  });

  return (
    <>
      <h2>Analytics</h2>
      <p>
        The best of data available here at your finger tips in table form. This
        could be a whole section of data that is available for users to deep
        dive further into the numbers/stats.
      </p>
      <div style={{ height: "900px", width: "100%" }}>
        <DataGrid
          sx={{
            maxWidth: 1500,
            width: "100%",
            border: `1px solid ${theme.palette.divider}`,
            "& .MuiDataGrid-row:hover": {
              backgroundColor: theme.palette.secondary.light,
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
                backgroundColor: theme.palette.secondary,
              },
            },
            "& .MuiSvgIcon-root": {
              fill: theme.palette.secondary.main,
            },
          }}
          slots={{
            loadingOverlay: LinearProgress,
          }}
          loading={!data}
          {...data}
        />
      </div>
    </>
  );
};

export default Analytics;
