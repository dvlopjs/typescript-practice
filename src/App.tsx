import { useState } from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import { useGetProducts } from "./hooks/useGetProducts";

import Home from "./Pages/Home";
import SearchInput from "./components/SearchInput";

export function App() {
  // THEME
  const [darkMode, setDarkMode] = useState(true);
  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  const [inputValue, setInputValue] = useState("");
  const { products, isLoading } = useGetProducts({ inputValue });

  console.log(products);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header changeTheme={changeTheme} />
        <div style={{ paddingTop: 100 }}>
          <SearchInput inputValue={inputValue} setInputValue={setInputValue} />

          <Home products={products} isLoading={isLoading} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
