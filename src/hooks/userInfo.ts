import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";

/**
 * Gathers the user details from okta
 * @returns logged in user details
 */
export const useUserInfo = () => {
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (authState) {
            if (!authState?.isAuthenticated) {
                setUserInfo(null);
            } else if (!userInfo) {
                oktaAuth.getUser().then((info) => setUserInfo(info));
            }
        } else oktaAuth.signInWithRedirect({ originalUri: "/" });
    }, [authState, oktaAuth]);

    return [userInfo] as const;
};
