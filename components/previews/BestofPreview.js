import { Box, Divider, Fade, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SizedImage from "../general/SizedImage";
import ImageFadeIn from "../general/ImageFadeIn";
import theme from "../../styles/themes/theme";

const BestofPreview = ({ item }) => {
    const itemHref = "/publications/bestof/" + item.fields[0].value;
    const authorHref = "/contributors/" + item.fields[1].value;

    return (
        <Box>
            <Link href={itemHref}>
                <div className=" link link-image">
                    {/* <ImageFadeIn
                        src={item.URLs[0]}
                        alt="bestof ad"
                        height={500}
                        width={500}
                    /> */}
                    <SizedImage
                        src={item.URLs[0]}
                        height="20rem"
                        width="20rem"
                        alt="bestof preview"
                    />
                </div>
            </Link>
            <Box
                sx={{
                    margin: ".5rem 0",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: ".25em",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {item.subCategories.map((subCategory, index) => {
                        return (
                            <Typography
                                key={index}
                                variant="caption"
                                sx={{ textAlign: "center" }}
                            >
                                [{subCategory}]
                            </Typography>
                        );
                    })}
                </Box>

                <Typography
                    className="link"
                    variant="h4"
                    sx={{ textAlign: "center", marginBottom: ".25em" }}
                >
                    <Link href={itemHref}>{item.fields[0].value}</Link>
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        margin: ".25rem 0",
                        fontSize: "1rem",
                        textAlign: "center",
                        color: theme.palette.custom.darkMuted,
                    }}
                >
                    {item.fields[2].value}
                </Typography>
            </Box>
        </Box>
    );
};

export default BestofPreview;
