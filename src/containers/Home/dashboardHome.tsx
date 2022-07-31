import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UIConstants } from "@constants/UIConstants";
import { CardBoxList } from "./CardBoxList";
/**
 * Shows Project Information screen
 * @param no_prop not applicable
 * @returns displays the Project Information (along with Accordion) screen: parent: dashboard, child: ProjectDetails
 */
export const DashboardHome = () => {
    const [expanded, setExpanded] = useState("panel2");

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : "");
    };

    return (
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
                        sx={{
                            backgroundColor: "#78909c",
                            color: "#fff",
                        }}
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
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
                        sx={{
                            backgroundColor: "#78909c",
                            color: "#fff",
                        }}
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            {UIConstants.teamMemberTitle}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>{CardBoxList}</AccordionDetails>
                </Accordion>

                <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        sx={{
                            backgroundColor: "#78909c",
                            color: "#fff",
                        }}
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            {UIConstants.achievementsTitle}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>{CardBoxList}</AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
};
