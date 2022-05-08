import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SinleMenuListHOC } from "../../Constants/application.type";

/**
 * Shows each cart item
 * @param IconComponentName accept left icon MUI component and name of the menu
 * @returns returns a component which will have a single menu row
 */
export const MenuListHOC = ({
    IconComponentName,
    menuTitle,
}: SinleMenuListHOC) => {
    return (
        <ListItemButton>
            <ListItemIcon>
                <IconComponentName />
            </ListItemIcon>
            <ListItemText primary={menuTitle} />
        </ListItemButton>
    );
};
