
import { useState } from "react";
import { Outlet } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import { Global } from './styles/global'
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light"
import dark from "./styles/themes/dark";


function App() {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleTheme={toggleTheme} />
      <div className="container">
        <Outlet />
      </div>
      <Global />
    </ThemeProvider>

  )
}

export default App
