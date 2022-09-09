import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Forum } from "@components/Forum/Forum";
import { Login } from "@components/Login/Login";
import { ProjectInformation } from "@containers/projectInformation/projectInformation";
import { Timesheet } from "@containers/Timesheet/Timesheet";
import { Layout } from "@components/Layout/Layout";
import { DashboardHome } from "@containers/Home/dashboardHome";
import { AdminPage } from "@components/AdminPage/AdminPage";
import { ProtectedRoute } from "@components/ProtectedRoute/ProtectedRoute";

function App() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Layout>
                <ProtectedRoute exact path="/" component={DashboardHome} />
                <ProtectedRoute exact path="/forum" component={Forum} />
                <ProtectedRoute
                    exact
                    path="/projectDetails"
                    component={ProjectInformation}
                />
                <ProtectedRoute exact path="/timesheet" component={Timesheet} />
                <ProtectedRoute exact path="/admin" component={AdminPage} />
            </Layout>
        </Switch>
    );
}

export default App;
