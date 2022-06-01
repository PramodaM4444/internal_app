import { CustomButton } from "@components/CustomButton/CustomButton";
import { useOktaAuth } from "@okta/okta-react";

const Logout = () => {
    const { oktaAuth } = useOktaAuth();

    const logout = async () => {
        await oktaAuth.signOut();
    };

    return <CustomButton onClick={logout}>Logout</CustomButton>;
};

export default Logout;
