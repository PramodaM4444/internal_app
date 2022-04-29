import {
    AppBar,
    Button,
    Container,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";

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
            <TextField fullWidth placeholder="enter" />
            <Button variant="contained">Post</Button>
        </>
    );
};
