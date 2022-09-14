import CodingConstants from "@constants/CodingConstants";
import { useAppSelector } from "@hooks/hooks";
import { selectLoginUserData } from "@store/selectors/LoginSelector";
import { Redirect, Route } from "react-router-dom";

/**
 * Redirects the user to the home page or to the login page based on the authentication
 * @param param0 component and other parameters
 * @returns Component or the Login page
 */
export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
    const userInfo = useAppSelector(selectLoginUserData);

    return (
        <Route
            {...rest}
            render={(props) => {
                return userInfo &&
                    userInfo.message === CodingConstants.loginSuccess ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                );
            }}
        />
    );
};
