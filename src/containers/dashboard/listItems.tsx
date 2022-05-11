import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import UIConstants from "@constants/UIConstants";
import { MenuListHOC } from "./MenuListHOC";

const menuListArray = [
    {
        muiIconComponent: DashboardIcon,
        menuTitle: UIConstants.leftMenuHome,
    },
    {
        muiIconComponent: ShoppingCartIcon,
        menuTitle: UIConstants.leftMenuILC,
    },
    {
        muiIconComponent: PeopleIcon,
        menuTitle: UIConstants.leftMenuProjectDetails,
    },
    {
        muiIconComponent: BarChartIcon,
        menuTitle: UIConstants.leftMenuForum,
    },
    {
        muiIconComponent: LayersIcon,
        menuTitle: UIConstants.leftMenuAdmin,
    },
    {
        muiIconComponent: LayersIcon,
        menuTitle: UIConstants.leftMenuSettings,
    },
];

export const MenuList = (
    <>
        {menuListArray.map((item) => (
            <MenuListHOC
                IconComponentName={item.muiIconComponent}
                menuTitle={item.menuTitle}
            />
        ))}
    </>
);
