import React from "react";
import { Link } from "react-router-dom";
import Example from "@containers/Example/Example";
import Logout from "@components/Logout/Logout";
import { useUserInfo } from "@hooks/userInfo";

export const Home: React.FC = () => {
    const [userInfo] = useUserInfo();
    return (
        <>
            {userInfo && <h1>Hello {userInfo.given_name}</h1>}
            <div>From Home </div>
            <Link to="/login">To Login Page</Link>
            <Link to="/Forum">Forum Page</Link>
            <Example />
            <Logout />
        </>
    );
};
