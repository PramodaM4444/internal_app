import { Backdrop, CircularProgress } from "@mui/material";

/**
 * Loading indicator
 * @returns circular loading indicator
 */
export const LoadingIndicator = () => (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
        <CircularProgress color="secondary" />
    </Backdrop>
);
