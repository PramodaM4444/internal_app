import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProjectDetails from "@containers/projectDetails/projectDetails";
import { UIConstants } from "@constants/UIConstants";
import ViewProjectDetails from "./viewProjectDetails";

/**
 * Shows Project Information screen
 * @param no_prop not applicable
 * @returns displays the Project Information (along with Accordion) screen: parent: dashboard, child: ProjectDetails
 */
export const ProjectInformation = () => {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : "");
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={12}>
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        sx={{
                            backgroundColor: "lightgray",
                            color: "black",
                        }}
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            {UIConstants.viewProjectDetails}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ViewProjectDetails />
                    </AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        sx={{
                            backgroundColor: "lightgray",
                            color: "black",
                        }}
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            {UIConstants.projectDetails}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ProjectDetails />
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
};
