// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"

// Pages
import Home from "../pages/Home"
import About from "../pages/About"

// Routes
const Pages = [
    {
        path: "/",
        exact: true,
        component: Home,
    },

    {
        path: "/about",
        component: About,
    },
]

function Switch() {
    return (
        <Routes>
            {Pages.map((route, index) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    element={<route.component />}
                    key={index}
                />
            ))}
        </Routes>
    )
}

export default Switch
