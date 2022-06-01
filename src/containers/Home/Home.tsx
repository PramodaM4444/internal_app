import React from "react";
import { Link } from "react-router-dom";
import Example from "@containers/Example/Example";
import Logout from "@components/Logout/Logout";
import { useUserInfo } from "@hooks/userInfo";
import { selectIsLoading } from "@store/selectors/loadingSelector";
import { useAppSelector } from "@hooks/hooks";
import { LoadingIndicator } from "@components/LoadingIndicator/LoadingIndicator";

export const Home: React.FC = () => {
    const [userInfo] = useUserInfo();
    const isLoading = useAppSelector(selectIsLoading);

    return (
        <>
            {isLoading && <LoadingIndicator />}
            {userInfo && <h1>Hello {userInfo.given_name}</h1>}
            <div>From Home </div>
            <Link to="/login">To Login Page</Link>
            <Link to="/Forum">Forum Page</Link>
            <Example />
            <Logout />
        </>
    );
};
