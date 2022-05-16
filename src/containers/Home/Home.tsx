import React from "react";
import { Link } from "react-router-dom";
import Example from "@containers/Example/Example";

export const Home: React.FC = () => (
    <>
        <div>From Home </div>
        <Link to="/login">To Login Page</Link>
        <Example />
        <br/>
        <Link to="/dashboard">{UIConstants.dashboardLink}</Link>
    </>
);
