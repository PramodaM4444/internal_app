import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import List from "@mui/material/List";
import { ListItem, ListItemIcon } from "@mui/material";
import { CardBoxProps } from "@customTypes/CardBox.types";

export const CardBox: React.FC<CardBoxProps> = ({
    employeeImage,
    employeeAwardName,
    employeeAwardTitle,
    employeeIBMNotesID,
    employeeAccount,
}) => {
    return (
        <Card sx={{ margin: 1 }}>
            {}
            <CardMedia component="img" image={employeeImage} />

            <CardContent>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PersonIcon fontSize="small" />
                            {employeeIBMNotesID}
                        </ListItemIcon>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <EmojiEventsIcon fontSize="small" />
                            {employeeAwardTitle}
                        </ListItemIcon>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <MilitaryTechIcon fontSize="small" />
                            {employeeAwardName}
                        </ListItemIcon>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <SupervisorAccountIcon fontSize="small" />
                            {employeeAccount}
                        </ListItemIcon>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};
