import { screen } from "@testing-library/react";
import { LabelVisibilityTestCaseType } from "../Constants/application.type";

export const validateAttributeVisibility = ({
    attributeLabel,
    visibilityExpection,
}: LabelVisibilityTestCaseType) => {
    const labelName = screen.getByText(attributeLabel);
    it(`check visibility of ${attributeLabel} - ${visibilityExpection}`, () => {
        if (visibilityExpection) {
            expect(labelName).toBeInTheDocument();
        } else {
            expect(labelName).not.toBeInTheDocument();
        }
    });
};
