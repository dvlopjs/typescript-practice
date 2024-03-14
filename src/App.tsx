import { useState } from "react";
import "./App.css";
import { Container, createTheme, ThemeProvider } from "@mui/material";

import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa BrowserRouter y otros componentes necesarios
import Header from "./components/Header";
import NotFound from "./Pages/NotFound";

export function App() {
  // THEME
  const [darkMode, setDarkMode] = useState(true);
  const changeTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeLight = createTheme({
    palette: {
      background: {
        default: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: "montserrat, Sans-serif", // Puedes cambiar la fuente si lo deseas
      // Define el color de texto para todos los componentes Typography
      body1: {
        color: "#141313", // Cambia este valor al color que desees
      },
      // Puedes agregar más configuraciones para otros estilos de texto si lo deseas
    },
  });
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={themeLight}>
        <Container>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />

              {/* <div style={{ paddingTop: 100 }}></div> */}
            </Routes>
          </Router>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
