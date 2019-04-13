import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const app = (
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider>
  </div>
);
ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
