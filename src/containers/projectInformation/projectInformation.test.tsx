import { render } from "@testing-library/react";
import { LabelVisibilityTestCaseType } from "../../Constants/application.type";
import { validateAttributeVisibility } from "../../utils/test-helper";
import ProjectInformation from "./projectInformation";

describe("ProjectInformation Test Cases :::", () => {
    const compRef = () => render(<ProjectInformation />);
    Object.freeze(compRef);

    describe("Render all labels", () => {
        compRef();
        [
            {
                attributeLabel: "Project Details",
                visibilityExpectation: true,
            },
        ].forEach((item: LabelVisibilityTestCaseType): void =>
            validateAttributeVisibility(item),
        );
    });
});
