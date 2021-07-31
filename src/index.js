// Packages
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// App
import App from "./App"

// Styles
import "./Styles/style.scss"

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)
