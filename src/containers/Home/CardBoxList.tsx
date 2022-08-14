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
];

export const CardBoxList: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            {cardListArray.map(({ image, name, email, phone }) => (
                <CardBox
                    cardImage={image}
                    cardName={name}
                    cardEmail={email}
                    cardPhone={phone}
                />
            ))}
        </div>
    );
};
