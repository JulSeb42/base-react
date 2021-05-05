// Packages
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

// Pages
import Home from "./Pages/Home"

function App() {
    return (
        <div className="App">
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                </nav>

                <Switch>
                    {/* Always put homepage last in the switch */}
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
