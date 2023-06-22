import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

export const Paginate = ({
  totalPost,
  postPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196f3",
        text: "#fff",
        common: "#fff",
      },

      secondary: {
        main: "#fff",
      },

      text: {
        primary: "#fff",
      },
    },
  });

  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  if (currentPage <= 0) setCurrentPage(1);
  if (currentPage > pages.length) setCurrentPage(pages.length);

  const handleChange = (event, value) => {
    console.log("currentPage:", currentPage);
    setCurrentPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%", // ancho del contenedor Stack
        }}
      >
        <Pagination
          size="large"
          count={pages.length}
          page={currentPage}
          onChange={handleChange}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              width: "24px", // ancho del botón
              margin: "0 4px", // margen entre botones
              backgroundColor: "#2196f3 !important",
              color: "#fff !important",
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
};

export default Paginate;
