import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import {
    ViewProjectColumn,
    ViewProjectData,
} from "@customTypes/ViewProjectInfo.types";

const columns: readonly ViewProjectColumn[] = [
    { id: "name", label: "Name" },
    { id: "code", label: "Code" },
    {
        id: "channelOwner",
        label: "Channel Owner",
        minWidth: 170,
        align: "right",
        format: (value: number) => value.toLocaleString("en-US"),
    },
    {
        id: "activitiesLastWeek",
        label: "Activities Last Week",
        minWidth: 170,
        align: "right",
        format: (value: number) => value.toLocaleString("en-US"),
    },
    {
        id: "activitiesNextWeek",
        label: "Activities Next Week",
        minWidth: 170,
        align: "right",
        format: (value: number) => value.toFixed(2),
    },
    {
        id: "activitiesNextWeek",
        label: "Activities Next Week",
        minWidth: 170,
        align: "right",
        format: (value: number) => value.toFixed(2),
    },
    {
        id: "accomplishments",
        label: "Accomplishments",
        align: "right",
        format: (value: number) => value.toFixed(2),
    },
    {
        id: "status",
        label: "Status",
        align: "right",
        format: (value: number) => value.toFixed(2),
    },
    {
        id: "completionDate",
        label: "Completion Date",
        minWidth: 170,

        align: "right",
        format: (value: number) => value.toFixed(2),
    },

    {
        id: "bandwidthAvailable",
        label: "Bandwidth Available",
        minWidth: 170,
        align: "right",
        format: (value: number) => value.toFixed(2),
    },
];

function createData(
    name: string,
    code: string,
    channelOwner: string,
    activitiesLastWeek: string,
    activitiesNextWeek: string,
    accomplishments: string,
    status: string,
    completionDate: string,
    bandwidthAvailable: string,
): ViewProjectData {
    return {
        name,
        code,
        channelOwner,
        activitiesLastWeek,
        activitiesNextWeek,
        accomplishments,
        status,
        completionDate,
        bandwidthAvailable,
    };
}

const rows = [
    createData(
        "Avdhesh",
        "123",
        "Mohan Pandith",
        "DODU-123",
        "DODU-426",
        "None",
        "In QA",
        "17/08/2022",
        "No",
    ),
    createData(
        "Pramoda",
        "123",
        "Mohan Pandith",
        "DODU-123",
        "DODU-426",
        "None",
        "In QA",
        "17/08/2022",
        "No",
    ),
    createData(
        "Shubham",
        "123",
        "Mohan Pandith",
        "DODU-123",
        "DODU-426",
        "None",
        "In QA",
        "17/08/2022",
        "No",
    ),
];

export default function ViewProjectDetails() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: "100%", overflow: "scroll" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage,
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {column.format &&
                                                    typeof value === "number"
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
