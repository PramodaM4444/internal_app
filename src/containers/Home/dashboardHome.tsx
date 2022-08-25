import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UIConstants } from "@constants/UIConstants";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { CardBoxList } from "./CardBoxList";

/**
 * Shows Project Information screen
 * @param no_prop not applicable
 * @returns displays the Project Information (along with Accordion) screen: parent: dashboard, child: ProjectDetails
 */

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath:
            "https://c4.wallpaperflare.com/wallpaper/461/141/233/computer-ibm-wallpaper-preview.jpg",
    },
    {
        imgPath:
            "https://c0.wallpaperflare.com/preview/811/935/645/adults-analysis-brainstorming-collaboration.jpg",
    },
    {
        imgPath:
            "https://c4.wallpaperflare.com/wallpaper/247/916/934/computer-ibm-wallpaper-preview.jpg",
    },
    {
        imgPath:
            "https://c4.wallpaperflare.com/wallpaper/662/51/829/ibm-technology-company-computer-wallpaper-preview.jpg",
    },
];
export const DashboardHome = () => {
    const [expanded, setExpanded] = useState("panel2");

    const handleChange = (panel: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : "");
    };

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={12}>
                <Box sx={{ flexGrow: 1 }}>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Grid
                                        component="img"
                                        sx={{
                                            height: 450,
                                            display: "block",
                                            overflow: "hidden",
                                            width: "100%",
                                        }}
                                        src={step.imgPath}
                                    />
                                ) : null}
                                <MobileStepper
                                    steps={maxSteps}
                                    position="static"
                                    activeStep={activeStep}
                                    nextButton={
                                        <Button
                                            size="small"
                                            onClick={handleNext}
                                            disabled={
                                                activeStep === maxSteps - 1
                                            }
                                        >
                                            {theme.direction === "rtl" ? (
                                                <KeyboardArrowLeft />
                                            ) : (
                                                <KeyboardArrowRight />
                                            )}
                                        </Button>
                                    }
                                    backButton={
                                        <Button
                                            size="small"
                                            onClick={handleBack}
                                            disabled={activeStep === 0}
                                        >
                                            {theme.direction === "rtl" ? (
                                                <KeyboardArrowRight />
                                            ) : (
                                                <KeyboardArrowLeft />
                                            )}
                                        </Button>
                                    }
                                />
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                </Box>
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
                            backgroundColor: "lightgray",
                            color: "black",
                        }}
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            {UIConstants.teamMemberTitle}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CardBoxList />
                    </AccordionDetails>
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
                            backgroundColor: "lightgray",
                            color: "black",
                        }}
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            {UIConstants.achievementsTitle}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <CardBoxList />
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
};
