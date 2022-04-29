import React from "react";
import { Link } from "react-router-dom";
import Example from "../Example/Example";

export const Home: React.FC = () => {
    return (
        <>
            <div>From Home</div>
            <Link to="/login">To Login Page</Link>
            <Link to="/Forum">Forum Page</Link>
            <Example />
        </>
    );
};
