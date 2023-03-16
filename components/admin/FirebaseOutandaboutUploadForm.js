import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../../firebase";
import theme from "../../styles/themes/theme";
import ButtonWithConfirm from "../general/ButtonWithConfirm";

const FirebaseOutandaboutUploadForm = ({
    config,
    folder,
    updateCounter,
    setUpdateCounter,
}) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(config))
    );
    const [isUploading, setIsUploading] = useState(false);
    const [fileError, setFileError] = useState("false");

    const handleFieldChange = (e, field, index) => {
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };

        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ ...formData, fields: newFormDataFields });
    };

    const handleUpload = async () => {
        if (formData.fields[0].value === "") {
            setFileError("Please Enter a Name");
            return;
        }

        let error = false;

        if (error) {
            setFileError("Cannot upload.");

            return;
        } else {
            setIsUploading(true);
            addDoc(collection(db, folder), {
                ...formData,
                name: formData.fields[0].value,
                bio: formData.fields[1].value,
                dateUploaded: Date.now(),
            });
            setFormData(JSON.parse(JSON.stringify(config)));
            setIsUploading(false);
            setUpdateCounter(updateCounter + 1);
            setFileError("");
        }
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                backgroundColor: theme.palette.background.accent,
                padding: "1em",
                borderRadius: "5px",
            }}
        >
            <Typography variant="h3">Upload new item to {folder}.</Typography>

            {formData.fields.map((field, index) => {
                return (
                    <TextField
                        InputLabelProps={{ shrink: true }}
                        type={field.type}
                        label={field.name}
                        key={index}
                        multiline={field.multiline}
                        rows={field.rows}
                        value={field.value}
                        onChange={(e) => {
                            handleFieldChange(e, field, index);
                        }}
                    />
                );
            })}

            <ButtonWithConfirm
                handleClick={handleUpload}
                isDisabled={isUploading}
                buttonText="Upload"
                dialogText="Are you sure you want to upload this item?"
                notificationText="File Uploading..."
            />
            {fileError !== "false" && <Typography>{fileError}</Typography>}
        </Box>
    );
};

export default FirebaseOutandaboutUploadForm;
