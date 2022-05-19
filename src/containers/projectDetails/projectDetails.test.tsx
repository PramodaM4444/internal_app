import { render } from "@testing-library/react";
import { LabelVisibilityTestCaseType } from "../../Constants/application.type";
import { validateAttributeVisibility } from "../../utils/test-helper";
import ProjectDetails from "./projectDetails";

describe("ProjectDetails Test Cases :::", () => {
    const compRef = () => render(<ProjectDetails />);
    Object.freeze(compRef);

    describe("Render all labels", () => {
        compRef();
        [
            {
                attributeLabel: "Submit",
                visibilityExpectation: true,
            },
        ].forEach((item: LabelVisibilityTestCaseType) =>
            validateAttributeVisibility(item),
        );
    });
});
