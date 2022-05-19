import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Timesheet } from "@containers/Timesheet/Timesheet";
import { Forum } from "./components/Forum/Forum";
import { Home } from "./containers/Home/Home";
import { Login } from "./containers/Login/Login";
import DashboardContent from "./containers/dashboard/dashboard";
import ProjectInformation from "./containers/projectInformation/projectInformation";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Forum" element={<Forum />} />
                <Route path="/dashboard" element={<DashboardContent />} />
                <Route
                    path="/projectDetails"
                    element={<ProjectInformation />}
                />
                <Route path="/timesheet" element={<Timesheet />} />
            </Routes>
        </div>
    );
}

export default App;
