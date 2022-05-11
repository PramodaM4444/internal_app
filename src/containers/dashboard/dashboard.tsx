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
import { MenuList } from "./listItems";
import * as styledComp from "./dashboard.style";
import ProjectInformation from "../projectInformation/projectInformation";
import UIConstants from "../../constants/UIConstants";
import {
    LeftMenuBar,
    mdTheme,
    TopNavBar,
} from "../TemplateFrame/TemplateFrame.style";

/**
 * Shows each cart item
 * @param no_prop not applicable
 * @returns displays the Dashboard screen: parent: NA, child: ProjectInformation
 */
function DashboardContent() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />

                {/* TOP NAV BAR */}
                <TopNavBar position="absolute" open={open}>
                    <styledComp.TopNavBgColor>
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
                    </styledComp.TopNavBgColor>
                </TopNavBar>
                {/* TOP NAV BAR */}

                {/* LEFT NAV BAR */}
                <styledComp.LeftNavBgColor>
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
                        {/* <styledComp.LeftNavBgColor> */}
                        <List sx={{ bgcolor: "#dcdcd9" }} component="nav">
                            {MenuList}
                        </List>
                        {/* </styledComp.LeftNavBgColor> */}
                    </LeftMenuBar>
                </styledComp.LeftNavBgColor>
                {/* LEFT NAV BAR */}

                <styledComp.Width100>
                    <ProjectInformation />
                </styledComp.Width100>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}