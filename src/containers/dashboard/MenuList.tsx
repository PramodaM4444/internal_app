import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { EachItem, ListItems } from "./__types__/MenuList.types";

/**
 * Each navigation item
 * @param param0 accepts the each navigation item
 * @returns navigation item with route and styling
 */
export const MenuItem: React.FC<EachItem> = ({
    item: { route, MuiIcon, menuTitle },
}) => (
    <Link to={route} style={{ textDecoration: "none" }}>
        <ListItemButton>
            <ListItemIcon>
                <MuiIcon />
            </ListItemIcon>
            <ListItemText primary={menuTitle} />
        </ListItemButton>
    </Link>
);

/**
 * Displays the list of navigation items
 */
export const MenuList: React.FC<ListItems> = React.memo(({ list }) => (
    <>
        {list.map((item) => (
            <MenuItem item={item} />
        ))}
    </>
));
