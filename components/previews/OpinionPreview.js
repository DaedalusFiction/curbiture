import { Box, Divider, Fade, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const OpinionPreview = ({ opinion }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoaded = (naturalWidth, naturalHeight) => {
        setRatio(naturalWidth / naturalHeight);
        setIsLoaded(true);
    };
    const opinionHref = "/publications/opinions/" + opinion.fields[0].value;
    const authorHref = "/contributors/" + opinion.fields[1].value;

    return (
        <Box>
            <Link href={opinionHref}>
                <Fade in={isLoaded}>
                    <div>
                        <Image
                            className="link link-image"
                            src={opinion.URLs[0]}
                            //has to be unoptimized to work with firebase storage, apparently
                            unoptimized
                            width="100"
                            height={100 / ratio}
                            onLoadingComplete={({
                                naturalWidth,
                                naturalHeight,
                            }) => handleLoaded(naturalWidth, naturalHeight)}
                            layout="responsive"
                            alt="opinion"
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
                    {opinion.subCategories.map((subCategory, index) => {
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
                    <Link href={opinionHref}>{opinion.fields[0].value}</Link>
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ margin: ".25rem 0", fontSize: "1rem" }}
                >
                    {opinion.fields[2].value}
                </Typography>
                <Box>
                    <Typography
                        variant="h6"
                        sx={{ display: "inline-block", marginRight: ".35em" }}
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
                        <Link href={authorHref}>{opinion.fields[1].value}</Link>
                    </Typography>
                </Box>
            </Box>
            <Divider variant="inset" sx={{ margin: "1rem 0 1.5rem 0" }} />
        </Box>
    );
};

export default OpinionPreview;
