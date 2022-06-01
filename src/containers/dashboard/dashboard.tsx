import * as React from "react";
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
import {
    LeftMenuBar,
    MdTheme,
    TopNavBar,
} from "@containers/TemplateFrame/TemplateFrame.style";
import { UIConstants } from "@constants/UIConstants";
import DashboardHome from "@containers/Home/dashboardHome";
import { TopNavBgColor, LeftNavBgColor, Width100 } from "./dashboard.style";
import { MenuList } from "./listItems";

/**
 * Shows Dashboard/Home screen
 * @param no_prop not applicable
 * @returns displays the Dashboard screen: parent: NA, child: ProjectInformation
 */
function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

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
                            {MenuList}
                        </List>
                        {/* </LeftNavBgColor> */}
                    </LeftMenuBar>
                </LeftNavBgColor>
                {/* LEFT NAV BAR */}

                <br />
                <Width100>
                    <DashboardHome />
                </Width100>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}
