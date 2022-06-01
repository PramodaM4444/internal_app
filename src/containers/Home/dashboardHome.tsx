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
import { UIConstants } from "@constants/UIConstants";
import { MdTheme } from "../TemplateFrame/TemplateFrame.style";

/**
 * Shows Project Information screen
 * @param no_prop not applicable
 * @returns displays the Project Information (along with Accordion) screen: parent: dashboard, child: ProjectDetails
 */
export default function DashboardHome() {
    const [expanded, setExpanded] = React.useState("");

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : "");
    };

    return (
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
                                            sx={{ width: "33%", flexShrink: 0 }}
                                        >
                                            {UIConstants.recognitionTitle}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>test 1</AccordionDetails>
                                </Accordion>

                                <Accordion
                                    expanded={expanded === "panel3"}
                                    onChange={handleChange("panel3")}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3bh-content"
                                        id="panel3bh-header"
                                    >
                                        <Typography
                                            sx={{ width: "33%", flexShrink: 0 }}
                                        >
                                            {UIConstants.teamMemberTitle}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>test 1</AccordionDetails>
                                </Accordion>

                                <Accordion
                                    expanded={expanded === "panel4"}
                                    onChange={handleChange("panel4")}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                    >
                                        <Typography
                                            sx={{ width: "33%", flexShrink: 0 }}
                                        >
                                            {UIConstants.achievementsTitle}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>test 1</AccordionDetails>
                                </Accordion>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
