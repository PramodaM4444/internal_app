import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./containers/Home/Home";
import { Login } from "./containers/Login/Login";
import { Timesheet } from "./containers/Timesheet/Timesheet";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/timesheet" element={<Timesheet />} />
            </Routes>
        </div>
    );
}

export default App;
