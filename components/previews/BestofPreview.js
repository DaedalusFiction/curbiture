import { Box, Divider, Fade, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SizedImage from "../general/SizedImage";
import ImageFadeIn from "../general/ImageFadeIn";

const BestofPreview = ({ item }) => {
    const itemHref = "/publications/bestof/" + item.fields[0].value;
    const authorHref = "/contributors/" + item.fields[1].value;

    return (
        <Box>
            <Link href={itemHref}>
                <div className=" link link-image">
                    <ImageFadeIn
                        src={item.URLs[0]}
                        alt="bestof ad"
                        height={500}
                        width={500}
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
                    sx={{ textAlign: "center", marginBottom: ".5em" }}
                >
                    <Link href={itemHref}>{item.fields[0].value}</Link>
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        margin: ".25rem 0",
                        fontSize: "1rem",
                        textAlign: "center",
                    }}
                >
                    {item.fields[2].value}
                </Typography>
                {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                display: "inline-block",
                                marginRight: ".35em",
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
                                {item.fields[1].value}
                            </Link>
                        </Typography>
                    </Box>
                </Box> */}
            </Box>
        </Box>
    );
};

export default BestofPreview;
