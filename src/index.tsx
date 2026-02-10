import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"pwa-install": any;
			"pwa-update": any;
		}
	}
}

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");

const root = createRoot(container);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
