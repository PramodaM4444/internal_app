import { CustomButton } from "@components/CustomButton/CustomButton";

const Logout = () => {
    const logout = async () => {
        console.log("From Logout");
    };

    return <CustomButton onClick={logout}>Logout</CustomButton>;
};

export default Logout;
