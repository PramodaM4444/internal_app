import { render } from "@testing-library/react";
import { LabelVisibilityTestCaseType } from "../../Constants/application.type";
import { validateAttributeVisibility } from "../../utils/test-helper";
import ProjectInformation from "./projectInformation";

describe("ProjectInformation Render Validations", () => {
    // const compRef = render(<ProjectInformation />);
    render(<ProjectInformation />);
    [
        {
            attributeLabel: "Project Details",
            visibilityExpection: true,
        },
    ].forEach((item: LabelVisibilityTestCaseType) =>
        validateAttributeVisibility(item),
    );
});
