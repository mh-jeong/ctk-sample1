import "../styles/globals.css";

import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";

import AppHeader from "../components/Layout/AppHeader";
import AppTopNavigation from "../components/Layout/AppTopNavigation";
import AppBody from "../components/Layout/AppBody";
import Tabs from "../components/Layout/AppBody/Tabs";

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppHeader />
        <AppTopNavigation />
        <Tabs />
        <AppBody>
          <Component {...pageProps} />
        </AppBody>
      </ThemeProvider>
    </>
  );
}

export default App;
