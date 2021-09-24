// Packages
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// App
import App from "./App"

// Style
import "./styles/style.css"

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)
