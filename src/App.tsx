import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Forum } from "./components/Forum/Forum";
import { Home } from "./containers/Home/Home";
import { Login } from "./containers/Login/Login";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Forum" element={<Forum />} />
            </Routes>
        </div>
    );
}

export default App;
