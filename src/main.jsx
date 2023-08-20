import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WatchListComponent from "./assets/WatchListPage/WatchListComponent.jsx";
import WatchedComponent from "./assets/WatchedPage/WatchedComponent.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <GlobalProvider>
                <App />
            </GlobalProvider>
        ),
    },
    {
        path: "/myWatchList",
        element: (
            <GlobalProvider>
                <WatchListComponent />
            </GlobalProvider>
        ),
    },
    {
        path: "/myWatched",
        element: (
            <GlobalProvider>
                <WatchedComponent />
            </GlobalProvider>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
