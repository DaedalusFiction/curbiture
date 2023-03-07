import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import theme from "../../styles/themes/theme";

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
                    sx={{ marginBottom: ".25em" }}
                >
                    <Link href={itemHref}>{`${item.fields[0].value}?`}</Link>
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        margin: ".25rem 0",
                        fontSize: "1rem",
                        color: theme.palette.custom.darkMuted,
                    }}
                >
                    {item.fields[2].value}
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
                        <Link href={authorHref}>{item.fields[1].value}</Link>
                    </Typography>
                </Box>
            </Box>
            <Divider variant="inset" sx={{ margin: "1rem 0 1.5rem 0" }} />
        </Box>
    );
};

export default AdvicePreview;
