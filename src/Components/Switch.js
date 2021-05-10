import { Switch as SwitchComponent, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home";

function Switch() {
    return (
        <SwitchComponent>
            {/* Always put homepage last in the switch */}
            <Route path="/">
                <Home />
            </Route>
        </SwitchComponent>
    );
}

export default Switch;
