import * as React from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { EachItem, ListItems } from "@customTypes/MenuList.types";

/**
 * Each navigation item
 * @param param0 accepts the each navigation item
 * @returns navigation item with route and styling
 */
export const MenuItem: React.FC<EachItem> = ({
    item: { route, MuiIcon, menuTitle },
    path,
}) => (
    <Link
        to={route}
        style={{
            textDecoration: "none",
            color: "#000000",
            backgroundColor: "#1976d2FF",
        }}
    >
        <ListItemButton
            selected={route === path}
            sx={{
                "&.Mui-selected": {
                    backgroundColor: "#f5f5f5",
                    color: "#000000",
                },
            }}
        >
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
export const MenuList: React.FC<ListItems> = React.memo(
    ({ list, currentPath }) => (
        <>
            {list.map((item) => (
                <MenuItem item={item} path={currentPath} />
            ))}
        </>
    ),
);
