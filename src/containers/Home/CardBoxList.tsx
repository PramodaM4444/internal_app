import { ListItem } from "@mui/material";
import List from "@mui/material/List";
import { CardBox } from "./CardBox";

const cardListArray = [
    {
        image: "/test.jpg",
        name: "Test1",
        email: "xyz@test.com",
        phone: "99999999",
    },
    {
        image: "/test.jpg",
        name: "Test2",
        email: "xyz@test.com",
        phone: "09999999",
    },

    {
        image: "/test.jpg",
        name: "Test3",
        email: "xyz@test.com",
        phone: "999999999",
    },
    {
        image: "/test.jpg",
        name: "Test4",
        email: "xyz@test.com",
        phone: "999999999",
    },
    {
        image: "/test.jpg",
        name: "Test5",
        email: "xyz@test.com",
        phone: "999999999",
    },
];

export const CardBoxList = (
    <List
        sx={{
            bgcolor: "#ffff",
            display: "flex",
            flexDirection: "row",
            padding: 0,
            width: "100%",
            overflowX: "scroll",
        }}
        component="nav"
    >
        {cardListArray.map((item) => (
            <ListItem>
                <CardBox
                    cardImage={item.image}
                    cardName={item.name}
                    cardEmail={item.email}
                    cardPhone={item.phone}
                />
            </ListItem>
        ))}
    </List>
);
