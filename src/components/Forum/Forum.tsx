import {
    AppBar,
    Avatar,
    Button,
    Container,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import { ConversationContainer, DescriptionContainer } from "./Forum.styles";

export const Forum: React.FC = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography variant="h6">Forum</Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <br />
            <Typography variant="h6">Description</Typography>
            <DescriptionContainer>
                <TextField fullWidth placeholder="enter" />
                <Button variant="contained">
                    <SendIcon />
                    Post
                </Button>
            </DescriptionContainer>
            <Typography variant="h6">Conversation</Typography>
            <ConversationContainer>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Demo User 1"
                        secondary=" This is sample text 1"
                    />
                    <Button>
                        <ReplyIcon fontSize="large" />
                    </Button>
                </ListItem>
                <Divider variant="inset" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Demo User 2"
                        secondary=" This is sample text 2"
                    />
                    <Button>
                        <ReplyIcon fontSize="large" />
                    </Button>
                </ListItem>
            </ConversationContainer>
        </>
    );
};
