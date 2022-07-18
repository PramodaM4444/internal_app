import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Forum } from "@components/Forum/Forum";
import { Home } from "@containers/Home/Home";
import { Login } from "@components/Login/Login";
import DashboardContent from "@containers/dashboard/dashboard";
import ProjectInformation from "@containers/projectInformation/projectInformation";
import { Timesheet } from "@containers/Timesheet/Timesheet";

function App() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/forum" component={Forum} />
            <Route path="/dashboard" component={DashboardContent} />
            <Route path="/projectDetails" component={ProjectInformation} />
            <Route path="/timesheet" component={Timesheet} />
        </Switch>
    );
}

export default App;
