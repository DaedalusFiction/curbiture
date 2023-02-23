import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import React from "react";
import SocialMediaIcons from "../general/SocialMediaIcons";

const socialMedia = [
    { media: "twitter", url: "https://google.com" },
    { media: "instagram", url: "https://google.com" },
    { media: "facebook", url: "https://google.com" },
];

const contactInfo = [
    { type: "telephone", value: "555-555-5555" },
    { type: "email", value: "hello@artistName.com" },
];

const Footer = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ padding: "1rem 0" }}>
                <Grid item xs={4} sx={{ display: { xs: "none", md: "flex" } }}>
                    <SocialMediaIcons color="primary" fontSize="25px" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            display: "flex",
                            gap: ".25em",
                            justifyContent: "center",
                        }}
                    >
                        <Typography sx={{ textAlign: "center" }}>
                            Website made by{" "}
                        </Typography>

                        <Typography
                            sx={{ "&:hover": { textDecoration: "underline" } }}
                        >
                            <a
                                href="https://www.fictionalweb.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Fictional Web
                            </a>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "end" },
                        }}
                    >
                        <Link href="/contact">
                            <Button variant="outlined">contact</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;
