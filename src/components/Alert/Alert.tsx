import Alert from "@mui/material/Alert";

interface AlertProps {
    message: string;
}

/**
 * Displays the Alert
 * @param param0 Message to be displayed as alert
 * @returns Alert message component
 */
export const Notification: React.FC<AlertProps> = ({ message }) => {
    return (
        <Alert
            severity="error"
            sx={{
                zIndex: 1000,
                position: "absolute",
                bottom: 0,
                margin: "1rem",
            }}
        >
            {message}
        </Alert>
    );
};
