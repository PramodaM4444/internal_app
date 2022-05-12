import { render } from "@testing-library/react";
import { LabelVisibilityTestCaseType } from "../../Constants/application.type";
import { validateAttributeVisibility } from "../../utils/test-helper";
import ProjectDetails from "./projectDetails";

describe("ProjectDetails Render Validations", () => {
    // const compRef = render(<ProjectDetails />);
    render(<ProjectDetails />);
    [
        {
            attributeLabel: "Submit",
            visibilityExpection: true,
        },
    ].forEach((item: LabelVisibilityTestCaseType) =>
        validateAttributeVisibility(item),
    );
});
