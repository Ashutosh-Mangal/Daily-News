
import React from 'react';
// import ReactDOM from "react-dom";
// import App from "./components/App";

// import App from "./components1/App";   // class based react components
import App from "./components2/App";          // function based react components
import { createRoot } from 'react-dom/client';

// npm run both to start both react(port 3000) and express server(port 5000).

// npm run start for react server 
// npm run dev for starting express server

// var a="helloo worldd!";

// ReactDOM.render(
// <App />,
// document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container)

root.render(<App />)