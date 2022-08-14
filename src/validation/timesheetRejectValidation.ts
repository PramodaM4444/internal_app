import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const timesheetRejectValidation = yup.object().shape({
    RejectionRemarks: yup.string().min(6).max(50).required(),
});

export const timesheetRejectRemarks = {
    resolver: yupResolver(timesheetRejectValidation),
};
