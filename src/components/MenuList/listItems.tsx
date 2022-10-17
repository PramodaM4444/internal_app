import Home from "@mui/icons-material/Home";
import LockClockIcon from "@mui/icons-material/LockClock";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import { UIConstants } from "@constants/UIConstants";

export const listItems = [
    {
        MuiIcon: Home,
        menuTitle: UIConstants.leftMenuHome,
        route: "/",
    },
    {
        MuiIcon: LockClockIcon,
        menuTitle: UIConstants.leftMenuILC,
        route: "/timesheet",
    },
    {
        MuiIcon: EngineeringIcon,
        menuTitle: UIConstants.leftMenuProjectDetails,
        route: "/projectDetails",
    },
    {
        MuiIcon: SpeakerNotesIcon,
        menuTitle: UIConstants.leftMenuForum,
        route: "/forum",
    },
];
