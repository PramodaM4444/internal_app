import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import List from "@mui/material/List";
import { ListItem, ListItemIcon } from "@mui/material";
import { CardBoxProps } from "@customTypes/CardBox.types";

export const CardBox: React.FC<CardBoxProps> = ({
    cardImage,
    cardEmail,
    cardName,
    cardPhone,
}) => {
    return (
        <Card sx={{ width: 250, height: 350, margin: 2 }}>
            {}
            <CardMedia
                component="img"
                height="200"
                width="100"
                image={cardImage}
            />

            <CardContent>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <PersonIcon fontSize="small" />
                            {cardName}
                        </ListItemIcon>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <PhoneInTalkIcon fontSize="small" />
                            {cardPhone}
                        </ListItemIcon>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon fontSize="small" />
                            {cardEmail}
                        </ListItemIcon>
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    );
};
