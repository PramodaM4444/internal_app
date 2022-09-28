import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { fetchGetRecognitionRequest } from "@store/actions/recoginitionAction";
import { selectRecognitionData } from "@store/selectors/recognitionSelector";
import { useEffect } from "react";
import { CardBox } from "./CardBox";

export const CardBoxList: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGetRecognitionRequest());
    });

    const recognitionInfo = useAppSelector(selectRecognitionData);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            {recognitionInfo.map(
                ({
                    employee_award_name,
                    employee_award_title,
                    employee_IBM_Notes_ID,
                    employee_account,
                }) => (
                    <CardBox
                        employeeImage="/test.jpg"
                        employeeAwardName={employee_award_name}
                        employeeAwardTitle={employee_award_title}
                        employeeIBMNotesID={employee_IBM_Notes_ID}
                        employeeAccount={employee_account}
                    />
                ),
            )}
        </div>
    );
};
