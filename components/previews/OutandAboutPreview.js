import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import theme from "../../styles/themes/theme";

const OutandAboutPreview = ({ item }) => {
    const itemHref = "/publications/advice/" + item.fields[0].value;
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
                <Typography variant="caption">
                    [{`${item.fields[1].value}, ${item.fields[3].value}`}]
                </Typography>
                <Typography variant="h4" sx={{ marginBottom: ".25em" }}>
                    {item.fields[0].value}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        margin: ".25rem 0",
                        fontSize: "1rem",
                        color: theme.palette.custom.darkMuted,
                    }}
                >
                    {item.fields[4].value}
                </Typography>
            </Box>
            <Divider variant="inset" sx={{ margin: "1rem 0 1.5rem 0" }} />
        </Box>
    );
};

export default OutandAboutPreview;
