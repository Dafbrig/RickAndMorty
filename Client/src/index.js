import React from "react";
import ReactDOM from "react-dom"; // Importa ReactDOM en lugar de 'react-dom/client'
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render( // Usa ReactDOM.render() para renderizar tu aplicación
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
