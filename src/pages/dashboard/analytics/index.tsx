import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useTheme } from "@emotion/react";
import { InputBase, alpha, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.light, 0.55),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.light, 0.85),
  },
  marginRight: "auto",
  marginLeft: "auto",
  width: "auto",
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Analytics = () => {
  const theme = useTheme();
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 12,
  });

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search the dataset...'
          inputProps={{ "aria-label": "search the analytics table" }}
        />
      </Search>

      <h2>Analytics Workspace</h2>
      <p>
        Explore the raw dataset behind the dashboard, scan for outliers, and
        dig into individual records without leaving the workspace.
      </p>
      <div style={{ height: "900px", width: "100%" }}>
        <DataGrid
          sx={{
            maxWidth: 1500,
            width: "100%",
            // @ts-ignore
            border: `1px solid ${theme.palette.divider}`,
            "& .MuiDataGrid-row:hover": {
              // @ts-ignore
              backgroundColor: theme.palette.secondary.light,
            },
            "& .MuiDataGrid-columnHeader": {
              // @ts-ignore
              backgroundColor: theme.palette.primary.main,
              position: "sticky",
              color: "white",
            },
            "& .MuiDataGrid-row": {
              backgroundColor: "default",
              // @ts-ignore
              borderBottom: `1px solid ${theme.palette.divider}`,
              "&:hover": {
                // @ts-ignore
                backgroundColor: theme.palette.secondary,
              },
            },
            "& .MuiSvgIcon-root": {
              // @ts-ignore
              fill: theme.palette.secondary.main,
            },
          }}
          slots={{
            // @ts-ignore
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
