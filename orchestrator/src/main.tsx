import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Função para inicializar a aplicação após carregar os módulos remotos
const initApp = async () => {
  const root = document.getElementById("root");

  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

// Iniciar a aplicação
initApp().catch((err) => console.error("Failed to init app:", err));
