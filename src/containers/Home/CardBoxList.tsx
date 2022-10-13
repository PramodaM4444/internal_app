import { LoadingIndicator } from "@components/LoadingIndicator/LoadingIndicator";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { fetchGetRecognitionRequest } from "@store/actions/recoginitionAction";
import { selectIsLoading } from "@store/selectors/loadingSelector";
import { selectRecognitionData } from "@store/selectors/recognitionSelector";
import { useEffect } from "react";
import { CardBox } from "./CardBox";

export const CardBoxList: React.FC = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchGetRecognitionRequest());
    }, []);

    const recognitionInfo = useAppSelector(selectRecognitionData);
    return (
        <>
            {isLoading && <LoadingIndicator />}
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                {Array.isArray(recognitionInfo)
                    ? recognitionInfo.map(
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
                      )
                    : null}
            </div>
        </>
    );
};
