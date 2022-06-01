import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Route, useHistory, Switch } from "react-router-dom";
import { oktaAuthConfig } from "./config";
import "./App.css";
import { Forum } from "./components/Forum/Forum";
import { Home } from "./containers/Home/Home";
import { Login } from "./components/Login/Login";
import DashboardContent from "./containers/dashboard/dashboard";
import ProjectInformation from "./containers/projectInformation/projectInformation";

const oktaAuth = new OktaAuth(oktaAuthConfig);

function App() {
    const history = useHistory();

    const customAuthHandler = () => {
        history.push("/login");
    };

    const restoreOriginalUri = async (
        _oktaAuth: any,
        originalUri: string | undefined,
    ) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    return (
        <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
        >
            <Switch>
                <SecureRoute path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/login/callback" component={LoginCallback} />
                <Route path="/Forum" component={Forum} />
                <Route path="/dashboard" component={DashboardContent} />
                <Route path="/projectDetails" component={ProjectInformation} />
            </Switch>
        </Security>
    );
}

export default App;

/* <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Forum" element={<Forum />} />
                <Route path="/dashboard" element={<DashboardContent />} />
                <Route
                    path="/projectDetails"
                    element={<ProjectInformation />}
                />
            </Routes> */
