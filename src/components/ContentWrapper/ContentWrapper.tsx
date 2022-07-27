import React from "react";
import { Container, Box, Toolbar } from "@mui/material";

export const ContentWrapper: React.FC<any> = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
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
                    {children}
                </Container>
            </Box>
        </Box>
    );
};
