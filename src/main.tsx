import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// I used ! to tell typescript that this element exists (we can use 'As HTMLElement' if we want)
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
