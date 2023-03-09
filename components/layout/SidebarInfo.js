import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import ImageFadeIn from "../general/ImageFadeIn";
import SocialMediaIcons from "../general/SocialMediaIcons";

const SidebarInfo = () => {
    return (
        <Box sx={{ marginBottom: "2.75rem" }}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
                About Us
            </Typography>
            <Divider sx={{ margin: ".5rem 0 .5rem 0" }} />
            <ImageFadeIn
                src={"/images/curbnotefiltered2.webp"}
                alt="bestof ad"
                height={400}
                width={500}
            />

            <Typography
                variant="body1"
                sx={{ fontSize: "1rem", margin: ".5rem 0" }}
            >
                CURBITURE supplies the best of what C&rsquo;ville has to offer,
                from interviews, events, and news to rants, best-of finds,
                oddities, and more.
            </Typography>
            <Typography
                variant="body1"
                sx={{ fontSize: "1rem", margin: ".5rem 0" }}
            >
                In addition to posting articles and advice, our journalists and
                editorial team collaborate with local contributors. We are not
                affiliated with UVA, bestof, or any political party.
            </Typography>
            <Typography
                variant="body1"
                sx={{ fontSize: "1rem", fontWeight: "600" }}
            >
                <span style={{ textDecoration: "underline" }}>
                    <Link href="/about">Learn More</Link>
                </span>
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography variant="h5" sx={{ marginTop: "2.75rem" }}>
                    Social Media
                </Typography>
                <Divider sx={{ margin: ".5rem 0 .5rem 0" }} />
                <SocialMediaIcons color="primary" />
            </Box>
        </Box>
    );
};

export default SidebarInfo;
