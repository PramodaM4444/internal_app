import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Forum } from "@components/Forum/Forum";
import { Login } from "@components/Login/Login";
import { ProjectInformation } from "@containers/projectInformation/projectInformation";
import { Timesheet } from "@containers/Timesheet/Timesheet";
import { Layout } from "@components/Layout/Layout";
import { DashboardHome } from "@containers/Home/dashboardHome";
import { AdminPage } from "@components/AdminPage/AdminPage";
import { ProtectedRoute } from "@components/ProtectedRoute/ProtectedRoute";
import { useAppSelector } from "@hooks/hooks";
import { selectErr } from "@store/selectors/errorSelector";
import { Notification } from "@components/Alert/Alert";
import { UIConstants } from "@constants/UIConstants";
import { Wrapper } from "./App.styled";

function App() {
    const error = useAppSelector(selectErr);

    const [alert, setAlert] = useState(false);

    useEffect(() => {
        if (error) {
            setAlert(true);
            setTimeout(() => setAlert(false), 5000);
        }
    }, [error]);

    return (
        <Wrapper>
            {alert && <Notification message={UIConstants.errorText} />}
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
                    <ProtectedRoute
                        exact
                        path="/timesheet"
                        component={Timesheet}
                    />
                    <ProtectedRoute exact path="/admin" component={AdminPage} />
                </Layout>
            </Switch>
        </Wrapper>
    );
}

export default App;
