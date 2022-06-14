import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectDetails from "@containers/projectDetails/projectDetails";
import { UIConstants } from "@constants/UIConstants";
import { Dashboard } from "@containers/dashboard/dashboard";
import { MdTheme } from "../TemplateFrame/TemplateFrame.style";

/**
 * Shows Project Information screen
 * @param no_prop not applicable
 * @returns displays the Project Information (along with Accordion) screen: parent: dashboard, child: ProjectDetails
 */
export const ProjectInformation: React.FC = () => {
    const [expanded, setExpanded] = React.useState("panel2");

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : "");
    };

    return (
        <Dashboard>
            <ThemeProvider theme={MdTheme}>
                <Box sx={{ display: "flex" }}>
                    {/* <CssBaseline /> */}

                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: "100vh",
                            overflow: "auto",
                        }}
                    >
                        <Toolbar />
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={8} lg={12}>
                                    <Accordion
                                        expanded={expanded === "panel2"}
                                        onChange={handleChange("panel2")}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                        >
                                            <Typography
                                                sx={{
                                                    width: "33%",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {UIConstants.projectDetails}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ProjectDetails />
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        </Dashboard>
    );
};
