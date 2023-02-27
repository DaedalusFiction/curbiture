import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const AdvicePreview = ({ item }) => {
    const itemHref = "/publications/advice/" + item.fields[0].value;
    const authorHref = "/contributors/" + item.fields[1].value;
    return (
        <Box>
            <Box
                sx={{
                    margin: ".5rem 0",
                }}
            >
                <Box sx={{ display: "flex", gap: ".25em", flexWrap: "wrap" }}>
                    {item.subCategories.map((subCategory, index) => {
                        return (
                            <Typography key={index} variant="caption">
                                [{subCategory}]
                            </Typography>
                        );
                    })}
                </Box>
                <Typography
                    variant="h4"
                    className="link"
                    sx={{ textTransform: "uppercase" }}
                >
                    <Link href={itemHref}>{item.fields[0].value}</Link>
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ margin: ".25rem 0", fontSize: "1rem" }}
                >
                    {item.fields[2].value}
                </Typography>
                <Typography className="link" variant="h6" component="p">
                    By <Link href={authorHref}>{item.fields[1].value}</Link>
                </Typography>
            </Box>
            <Divider variant="inset" sx={{ margin: "1rem 0 1.5rem 0" }} />
        </Box>
    );
};

export default AdvicePreview;
