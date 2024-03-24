import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";

const Analytics = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  return (
    <>
      <h2>Analytics</h2>
      <p>
        The bestest of data available here at your finger tips in table form.
        This could be a whole section of data that is available for users to
        deep dive further into the numbers/stats.
      </p>
      <div style={{ height: "900px", width: "100%" }}>
        <DataGrid
          sx={{
            maxWidth: 1400,
            width: "90%",
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#dfd",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#004D64",
              position: "sticky",
              color: "white",
            },
            "& .MuiButtonBase-root.MuiIconButton-root": {
              color: "white",
            },
            "& .MuiDataGrid-menuIcon": {
              display: "none",
            },
            "& .MuiDataGrid-row:nth-of-type(even)": {
              backgroundColor: "#F9FAFB",
              "&:hover": {
                backgroundColor: "#dfd",
              },
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
