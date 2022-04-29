import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { MenuListHOC } from "./MenuListHOC";
import UIConstants from "../../Constants/UIConstants";

export const MenuList = (
    <>
        <MenuListHOC
            IconComponentName={DashboardIcon}
            menuTitle={UIConstants.leftMenuHome}
        />
        <MenuListHOC
            IconComponentName={ShoppingCartIcon}
            menuTitle={UIConstants.leftMenuILC}
        />
        <MenuListHOC
            IconComponentName={PeopleIcon}
            menuTitle={UIConstants.leftMenuProjectDetails}
        />
        <MenuListHOC
            IconComponentName={BarChartIcon}
            menuTitle={UIConstants.leftMenuForum}
        />
        <MenuListHOC
            IconComponentName={LayersIcon}
            menuTitle={UIConstants.leftMenuAdmin}
        />
        <MenuListHOC
            IconComponentName={LayersIcon}
            menuTitle={UIConstants.leftMenuSettings}
        />
    </>
);
