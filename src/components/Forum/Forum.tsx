import {
    AppBar,
    Avatar,
    Button,
    Container,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import {
    ConversationContainer,
    DescriptionContainer,
    MainContainer,
    Reply,
} from "./Forum.styles";

export const Forum: React.FC = () => {
    const [replyButton, setreplyButton] = useState(false);
    const openDescription = () => {
        setreplyButton(true);
    };
    return (
        <MainContainer>
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
                <TextareaAutosize
                    minRows={6}
                    placeholder="enter"
                    style={{ width: 400 }}
                />
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
                    <Button onClick={openDescription}>
                        <ReplyIcon fontSize="large" />
                    </Button>
                </ListItem>
                <Reply>
                    <ListItem alignItems="center">
                        <ListItemAvatar>
                            <Avatar>
                                <AccountCircleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Demo User 3"
                            secondary=" This is sample text 3"
                        />
                    </ListItem>
                    {replyButton && (
                        <>
                            <Typography variant="h6">Reply</Typography>
                            <DescriptionContainer>
                                <TextareaAutosize
                                    minRows={3}
                                    placeholder="enter"
                                    style={{ width: 400 }}
                                />
                                <Button variant="contained">
                                    <SendIcon />
                                    Post
                                </Button>
                            </DescriptionContainer>
                        </>
                    )}
                </Reply>
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
        </MainContainer>
    );
};
