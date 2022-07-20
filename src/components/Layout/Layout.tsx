import { ContentWrapper } from "@components/ContentWrapper/ContentWrapper";
import { Navigation } from "@components/Navigation/Navigation";
import React from "react";

export const Layout: React.FC = ({ children }) => {
    return (
        <div style={{ display: "flex" }}>
            <div>
                <Navigation />
            </div>
            <div style={{ flex: 1 }}>
                <ContentWrapper>{children}</ContentWrapper>
            </div>
        </div>
    );
};
