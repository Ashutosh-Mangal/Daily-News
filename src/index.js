
import React from 'react';
// import ReactDOM from "react-dom";
import App from "./components1/App1";
// import App from "./components/App";
import { createRoot } from 'react-dom/client';

// var a="helloo worldd!";

// ReactDOM.render(
// <App />,
// document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container)

root.render(<App />)