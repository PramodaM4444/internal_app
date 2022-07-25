import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Forum } from "@components/Forum/Forum";
import { Login } from "@components/Login/Login";
import { ProjectInformation } from "@containers/projectInformation/projectInformation";
import { Timesheet } from "@containers/Timesheet/Timesheet";
import { Layout } from "@components/Layout/Layout";
import { DashboardHome } from "@containers/Home/dashboardHome";
import { AdminPage } from "@components/AdminPage/AdminPage";

function App() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Layout>
                <Route exact path="/" component={DashboardHome} />
                <Route exact path="/forum" component={Forum} />
                <Route
                    exact
                    path="/projectDetails"
                    component={ProjectInformation}
                />
                <Route exact path="/timesheet" component={Timesheet} />
                <Route exact path="/admin" component={AdminPage} />
            </Layout>
        </Switch>
    );
}

export default App;
