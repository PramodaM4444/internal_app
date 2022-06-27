import React, { useEffect } from "react";
import {
    DragInner,
    Drag,
    Image,
    DragContainer,
} from "@containers/Timesheet/Timesheet.styles";

export const ImagePreview: React.FC<any> = ({ files }) => {
    useEffect(() => {
        return () =>
            files.forEach((file: { preview: string }) =>
                URL.revokeObjectURL(file.preview),
            );
    }, [files]);
    return (
        <DragContainer>
            {files.map((file: any) => (
                <Drag key={file.name}>
                    <DragInner>
                        <Image
                            src={file.preview}
                            alt="Preview"
                            onLoad={() => {
                                URL.revokeObjectURL(file.preview);
                            }}
                        />
                    </DragInner>
                </Drag>
            ))}
        </DragContainer>
    );
};
