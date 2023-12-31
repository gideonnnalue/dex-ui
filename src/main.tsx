import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "theme";

import App from "components/app";
import "normalize.css";
import "index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>
);
