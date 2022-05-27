import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Forum } from "./components/Forum/Forum";
// import { Home } from "./containers/Home/Home";
import { Login } from "./containers/Login/Login";
import { Dashboard } from "./containers/dashboard/dashboard";
import ProjectInformation from "./containers/projectInformation/projectInformation";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forum" element={<Forum />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                <Route
                    path="/projectDetails"
                    element={<ProjectInformation />}
                />
            </Routes>
        </div>
    );
}

export default App;
