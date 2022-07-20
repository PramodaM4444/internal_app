import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom";
import {
    LeftMenuBar,
    MdTheme,
    TopNavBar,
} from "@containers/TemplateFrame/TemplateFrame.style";
import { UIConstants } from "@constants/UIConstants";
import { MenuList } from "@components/MenuList/MenuList";
import { listItems } from "@components/MenuList/listItems";
import Logout from "@components/Logout/Logout";
import { TopNavBgColor, LeftNavBgColor, Width100 } from "./Navigation.style";

export const Navigation: React.FC = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const location = useLocation();

    return (
        <ThemeProvider theme={MdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />

                {/* TOP NAV BAR */}
                <TopNavBar position="absolute" open={open}>
                    <TopNavBgColor>
                        <Toolbar
                            sx={{
                                pr: "24px", // keep right padding when drawer closed
                            }}
                        >
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{
                                    marginRight: "36px",
                                    ...(open && { display: "none" }),
                                }}
                            >
                                {/* <img src={logo} alt="Logo" />; */}
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="h1"
                                variant="h6"
                                color="inherit"
                                noWrap
                                sx={{ flexGrow: 1 }}
                            >
                                {UIConstants.projectHeaderTitle}
                            </Typography>
                            <Logout />
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </TopNavBgColor>
                </TopNavBar>
                {/* TOP NAV BAR */}

                {/* LEFT NAV BAR */}
                <LeftNavBgColor>
                    <LeftMenuBar variant="permanent" open={open}>
                        {/* LOGO */}
                        <Toolbar
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                px: [1],
                            }}
                        >
                            <IconButton onClick={toggleDrawer}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </Toolbar>
                        {/* LOGO */}
                        <Divider />
                        {/* <LeftNavBgColor> */}
                        <List
                            sx={{ bgcolor: "#dcdcd9", height: "89.3vh" }}
                            component="nav"
                        >
                            <MenuList
                                list={listItems}
                                currentPath={location.pathname}
                            />
                        </List>
                        {/* </LeftNavBgColor> */}
                    </LeftMenuBar>
                </LeftNavBgColor>
                {/* LEFT NAV BAR */}

                {/* <br /> */}
                <Width100 />
            </Box>
        </ThemeProvider>
    );
};
