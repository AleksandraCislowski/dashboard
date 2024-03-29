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
          placeholder='Search...'
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

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
