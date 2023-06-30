import { Button, Grid, Input, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { db, storage } from "../../firebase";
import { uploadCategories } from "../../siteInfo";
import ButtonWithConfirm from "../general/ButtonWithConfirm";
import FirebaseCategorySelect from "./FirebaseCategorySelect";

const UploadAdvice = ({ config, folder, updateCounter, setUpdateCounter }) => {
    const [formData, setFormData] = useState(
        JSON.parse(JSON.stringify(config))
    );
    const [selectedTextFile, setSelectedTextFile] = useState(null);
    const [previews, setPreviews] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [fileError, setFileError] = useState("false");
    const textFileInputRef = useRef();

    const handleFieldChange = (e, field, index) => {
        if (e.target.value.split("").includes("?")) {
            return;
        }
        const newFieldData = {
            ...formData.fields[index],
            value: e.target.value,
        };

        let newFormDataFields = formData.fields;
        newFormDataFields[index] = newFieldData;
        setFormData({ ...formData, fields: newFormDataFields });
    };

    const handleTextFileChange = (e) => {
        if (e.target.files.length === 0) {
            setSelectedTextFile(null);
            return;
        }
        if (e.target.files[0].size > 1097152) {
            setFileError("File size must be less than 1MB");
            return;
        }
        setSelectedTextFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (formData.fields[0].value === "") {
            setFileError("Please Enter a Title");
            return;
        }
        if (selectedTextFile === null) {
            setFileError("Please Select a Markdown File");
            return;
        }

        //check if markdown file with file name exists
        const markdownStorageRef = ref(storage, folder);

        //check to see if document with selected Title already exists

        setIsUploading(true);

        const textStorageRef = ref(
            storage,
            `markdownFiles/${selectedTextFile.name}`
        );
        const uploadTextTask = uploadBytesResumable(
            textStorageRef,
            selectedTextFile
        );

        uploadTextTask.on(
            "state_changed",
            () => {},
            () => {},
            async () => {
                let textFileURL = "";
                await getDownloadURL(uploadTextTask.snapshot.ref).then(
                    (downloadURL) => {
                        textFileURL = downloadURL;
                    }
                );
                setDoc(doc(db, folder, formData.fields[0].value), {
                    ...formData,
                    markdownURL: textFileURL,
                    markdownFileName: selectedTextFile.name,
                    dateUploaded: Date.now(),
                });

                setFormData(JSON.parse(JSON.stringify(config)));
                setIsUploading(false);
                setUpdateCounter(updateCounter + 1);
                setFileError("");
                setSelectedTextFile(null);

                // selectedImages.forEach(async (image) => {
                //     const storageRef = ref(
                //         storage,
                //         `${folder}/${image.name}`
                //     );

                //     const uploadTask = uploadBytesResumable(
                //         storageRef,
                //         image
                //     );

                //     uploadTask.on(
                //         "state_changed",
                //         (snapshot) => {
                //             //to show upload progress as percentage
                //             // const progress =
                //             //     (snapshot.bytesTransferred / snapshot.totalBytes) *
                //             //     100;
                //             // setUploadProgress(progress);
                //         },
                //         (error) => {
                //             // setUploadError(true);
                //         },
                //         () => {
                //             // creates firestore database entry
                //             // setUploadProgress(0);
                //             getDownloadURL(uploadTask.snapshot.ref).then(
                //                 (downloadURL) => {
                //                     downloadURLs = [
                //                         ...downloadURLs,
                //                         downloadURL,
                //                     ];
                //                     if (
                //                         downloadURLs.length >=
                //                         selectedImages.length
                //                     ) {
                //                         addDoc(collection(db, folder), {
                //                             ...formData,
                //                             markdownURL: textFileURL,
                //                             markdownFileName:
                //                                 selectedTextFile.name,
                //                             dateUploaded: Date.now(),
                //                         });
                //                     }

                //                     setFormData(
                //                         JSON.parse(JSON.stringify(config))
                //                     );
                //                     setIsUploading(false);
                //                     setUpdateCounter(updateCounter + 1);
                //                     setFileError("");
                //                     setSelectedTextFile(null);
                //                 }
                //             );
                //         }
                //     );
                // });
            }
        );
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
                padding: "1em",
                borderRadius: "5px",
            }}
        >
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

            <Typography>
                Please make sure you{" "}
                <strong>SELECT ADVICE and ONLY ADVICE</strong> in the form below
                or else it will <strong>BREAK EVERYTHING</strong> (but I can fix
                it) (not trying to scare you but it is important) (seriously
                it&rsquo;s not hard to fix but the link will break until I do.
                Not the end of the world.) (You can and should still pick the
                subcategories though that&rsquo;s fine.)
            </Typography>
            <FirebaseCategorySelect
                formData={formData}
                setFormData={setFormData}
                uploadCategories={uploadCategories}
            />
            <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Button
                    variant="outlined"
                    onClick={() => {
                        textFileInputRef.current.children[0].click();
                    }}
                >
                    select Markdown File
                </Button>
                <Input
                    variant="contained"
                    accept=".md"
                    type="file"
                    sx={{ display: "none" }}
                    ref={textFileInputRef}
                    onChange={handleTextFileChange}
                >
                    Select Markdown File
                </Input>
                {selectedTextFile && (
                    <Typography>
                        Selected file: {selectedTextFile.name}
                    </Typography>
                )}
            </Box>

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

export default UploadAdvice;
