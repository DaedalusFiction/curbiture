import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import useGetImages from "../../hooks/useGetImages";
import NativeImage from "../general/NativeImage";

const FirestoreImageSubmissionsListing = ({
    folder,
    updateCounter,
    setUpdateCounter,
}) => {
    const [images] = useGetImages(updateCounter, "imagesubmissions");
    return (
        <Box>
            <Typography
                variant="h2"
                sx={{ textAlign: "center", marginBottom: "1em" }}
            >
                Image Submissions
            </Typography>
            <Grid container spacing={4}>
                {images &&
                    images.map((image, index) => {
                        return (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Box
                                    sx={{
                                        border: "1px solid black",
                                        padding: "1rem",
                                    }}
                                >
                                    <Typography sx={{ fontSize: "1rem" }}>
                                        Artist: {image.data().fields[0].value}
                                    </Typography>
                                    <Typography sx={{ fontSize: "1rem" }}>
                                        Email: {image.data().fields[1].value}
                                    </Typography>
                                    <br />
                                    <a href={image.data().URLs[0]}>
                                        <NativeImage
                                            image={{
                                                url: image.data().URLs[0],
                                                alt: "alt",
                                            }}
                                            maxSize={400}
                                        />
                                    </a>
                                </Box>
                            </Grid>
                        );
                    })}
            </Grid>
        </Box>
    );
};

export default FirestoreImageSubmissionsListing;
