import { Redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { Tokens } from "@okta/okta-auth-js";
import { OktaConfig } from "@customTypes/oktaConfig.types";
import OktaSignInWidget from "./OktaSignInWidget";

/**
 * Okta Login page
 * @param param0 Accepts the okta config details
 * @returns If authenticated returns the okta sign in widget
 */
export const Login: React.FC<OktaConfig> = ({ config }) => {
    const { oktaAuth, authState } = useOktaAuth();

    const onSuccess = (tokens: Tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err: any) => {
        console.log("error logging in", err);
    };

    if (!authState) return null;

    return authState.isAuthenticated ? (
        <Redirect to={{ pathname: "/" }} />
    ) : (
        <OktaSignInWidget
            config={config}
            onSuccess={onSuccess}
            onError={onError}
        />
    );
};
export default Login;
