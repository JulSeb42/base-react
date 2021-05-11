// Packages
import { Switch as SwitchComponent, Route } from "react-router-dom";

// Pages
import Home from "../Pages/Home";

// Routes
const Pages = [
    {
        path: "/",
        exact: true,
        component: Home,
    },
];

function Switch() {
    return (
        <SwitchComponent>
            {Pages.map((route, index) => (
                <Route
                    path={route.path}
                    exact={route.exact}
                    render={(props) => (
                        <route.component {...props} routes={route.routes} />
                    )}
                    key={index}
                />
            ))}
        </SwitchComponent>
    );
}

export default Switch;
