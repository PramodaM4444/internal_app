import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { UIConstants } from "@constants/UIConstants";

export const menuListArray = [
    {
        MuiIcon: DashboardIcon,
        menuTitle: UIConstants.leftMenuHome,
        route: "/",
    },
    {
        MuiIcon: ShoppingCartIcon,
        menuTitle: UIConstants.leftMenuILC,
        route: "/timesheet",
    },
    {
        MuiIcon: PeopleIcon,
        menuTitle: UIConstants.leftMenuProjectDetails,
        route: "/projectDetails",
    },
    {
        MuiIcon: BarChartIcon,
        menuTitle: UIConstants.leftMenuForum,
        route: "/forum",
    },
    {
        MuiIcon: LayersIcon,
        menuTitle: UIConstants.leftMenuAdmin,
        route: "/admin",
    },
    {
        MuiIcon: LayersIcon,
        menuTitle: UIConstants.leftMenuSettings,
        route: "/settings",
    },
];
