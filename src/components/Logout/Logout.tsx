import { useHistory } from "react-router-dom";
import { CustomButton } from "@components/CustomButton/CustomButton";
import { UIConstants } from "@constants/UIConstants";

const Logout = () => {
    const history = useHistory();

    const handleLogout = () => {
        history.push("/login");
    };

    return (
        <CustomButton onClick={handleLogout} color="secondary">
            {UIConstants.logout}
        </CustomButton>
    );
};

export default Logout;
