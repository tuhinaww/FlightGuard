import { ChakraProvider } from "@chakra-ui/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Search } from "./pages";

const theme = createTheme({



});

const App = () => {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  );
};

export default App;