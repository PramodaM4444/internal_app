import React from "react";
import { Link } from "react-router-dom";
import Example from "@containers/Example/Example";
import { selectIsLoading } from "@store/selectors/loadingSelector";
import { useAppSelector } from "@hooks/hooks";
import { LoadingIndicator } from "@components/LoadingIndicator/LoadingIndicator";

export const Home: React.FC = () => {
    const isLoading = useAppSelector(selectIsLoading);
    return (
        <>
            {isLoading && <LoadingIndicator />}
            <div>From Home </div>
            <Link to="/login">To Login Page</Link>
            <Example />
        </>
    );
};
