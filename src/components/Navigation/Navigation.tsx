import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useLocation } from "react-router-dom";
import {
    MdTheme,
    TopNavBar,
} from "@containers/TemplateFrame/TemplateFrame.style";
import { MenuList } from "@components/MenuList/MenuList";
import { listItems } from "@components/MenuList/listItems";
import Logout from "@components/Logout/Logout";
import { TopNavBgColor, Width100 } from "./Navigation.style";

export const Navigation: React.FC = () => {
    const location = useLocation();

    return (
        <ThemeProvider theme={MdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />

                {/* TOP NAV BAR */}
                <TopNavBar position="absolute">
                    <TopNavBgColor>
                        <List
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                padding: 0,
                                paddingLeft: 20,
                            }}
                            component="nav"
                        >
                            <MenuList
                                list={listItems}
                                currentPath={location.pathname}
                            />

                            <IconButton
                                color="inherit"
                                sx={{ paddingLeft: 40, paddingRight: 5 }}
                            >
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <Logout />
                        </List>
                    </TopNavBgColor>
                </TopNavBar>
                {/* TOP NAV BAR */}

                {/* <br /> */}
                <Width100 />
            </Box>
        </ThemeProvider>
    );
};
