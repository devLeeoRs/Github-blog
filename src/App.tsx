import { ThemeProvider } from "styled-components";
import { GlobalStyled } from "./styles/Global";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { BlogProvider } from "./context/blogcontext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BlogProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </BlogProvider>
      <GlobalStyled />
    </ThemeProvider>
  );
}
