import { Box, Divider, Fade, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MiscPreview = ({ misc }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoaded = (naturalWidth, naturalHeight) => {
        setRatio(naturalWidth / naturalHeight);
        setIsLoaded(true);
    };
    const miscHref = "/publications/miscs/" + misc.fields[0].value;
    const authorHref = "/contributors/" + misc.fields[1].value;

    return (
        <Box>
            <Link href={miscHref}>
                <Fade in={isLoaded}>
                    <div>
                        <Image
                            className="link link-image"
                            src={misc.URLs[0]}
                            //has to be unoptimized to work with firebase storage, apparently
                            unoptimized
                            width="100"
                            height={100 / ratio}
                            onLoadingComplete={({
                                naturalWidth,
                                naturalHeight,
                            }) => handleLoaded(naturalWidth, naturalHeight)}
                            layout="responsive"
                            alt="misc"
                        />
                    </div>
                </Fade>
            </Link>
            <Box
                sx={{
                    margin: ".5rem 0",
                }}
            >
                <Box sx={{ display: "flex", gap: ".25em", flexWrap: "wrap" }}>
                    {misc.subCategories.map((subCategory, index) => {
                        return (
                            <Typography key={index} variant="caption">
                                [{subCategory}]
                            </Typography>
                        );
                    })}
                </Box>

                <Typography
                    className="link"
                    variant="h4"
                    sx={{ marginBottom: ".5em" }}
                >
                    <Link href={miscHref}>{misc.fields[0].value}</Link>
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ margin: ".25rem 0", fontSize: "1rem" }}
                >
                    {misc.fields[2].value}
                </Typography>
                <Box>
                    <Typography
                        variant="h6"
                        sx={{ display: "inline-block", marginRight: ".5em" }}
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
                        <Link href={authorHref}>{misc.fields[1].value}</Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default MiscPreview;
