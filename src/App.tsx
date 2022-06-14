import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Route, useHistory, Switch } from "react-router-dom";
import "./App.css";
import { Forum } from "@components/Forum/Forum";
import { Login } from "@components/Login/Login";
import { Dashboard } from "@containers/dashboard/dashboard";
import ProjectInformation from "@containers/projectInformation/projectInformation";
import { Timesheet } from "@containers/Timesheet/Timesheet";
import { oktaAuthConfig } from "./config";

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
                <SecureRoute path="/" exact component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/login/callback" component={LoginCallback} />
                <Route path="/forum" component={Forum} />
                <Route path="/projectDetails" component={ProjectInformation} />
                <Route path="/timesheet" component={Timesheet} />
            </Switch>
        </Security>
    );
}

export default App;
