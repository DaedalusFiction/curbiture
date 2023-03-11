import { Divider, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NativeImage from "../general/NativeImage";
import SidebarInfo from "../layout/SidebarInfo";

const PublicationsHeader = ({ publication, authorHref }) => {
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                md={8}
                sx={{ paddingRight: { xs: "0", md: "6rem" } }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: ".25em",
                    }}
                >
                    {publication.subCategories.map((subCategory, index) => {
                        return (
                            <Typography key={index} variant="caption">
                                [{subCategory}]
                            </Typography>
                        );
                    })}
                </Box>
                <Typography
                    sx={{
                        margin: ".25em 0",
                        fontSize: "3.5rem",
                        fontWeight: "600",
                    }}
                    variant="h1"
                >
                    {publication.fields[0].value}
                </Typography>

                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            display: "inline-block",
                            marginRight: ".5em",
                        }}
                    >
                        by
                    </Typography>
                    <Typography
                        className="link"
                        variant="h5"
                        component="p"
                        sx={{
                            textTransform: "uppercase",
                            display: "inline-block",
                        }}
                    >
                        <Link href={authorHref}>
                            {publication.fields[1].value}
                        </Link>
                    </Typography>
                </Box>
                <Box sx={{ marginTop: "2rem" }}>
                    <NativeImage
                        maxSize={1000}
                        src={publication.URLs[0]}
                        alt="publication"
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <Typography variant="caption">
                            {publication.fields[4].value}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                md={0.25}
                sx={{
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        padding: { xs: "none", md: "3.25rem 0" },
                    }}
                >
                    <Divider orientation="vertical" />
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                md={3.75}
                sx={{ display: { xs: "none", md: "flex" } }}
            >
                <SidebarInfo />
            </Grid>
        </Grid>
    );
};

export default PublicationsHeader;
