import { useHistory } from "react-router-dom";
import { CustomButton } from "@components/CustomButton/CustomButton";
import { UIConstants } from "@constants/UIConstants";
import { useAppDispatch } from "@hooks/hooks";
import { handleLogoutAction } from "@store/actions/logoutAction";

const Logout = () => {
    const history = useHistory();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(handleLogoutAction());
        history.push("/login");
    };

    return (
        <CustomButton onClick={handleLogout} color="secondary">
            {UIConstants.logout}
        </CustomButton>
    );
};

export default Logout;
