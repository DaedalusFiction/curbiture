// import { Typography } from "@mui/material";
// import { Container } from "@mui/system";
// import React from "react";
// import PageLayout from "../../components/layout/PageLayout";

// const index = () => {
//     return (
//         <PageLayout name="Events">
//             <Container maxWidth="lg">
//                 <Typography variant="h2">Upcoming</Typography>
//                 <Typography variant="h2">Past</Typography>
//             </Container>
//         </PageLayout>
//     );
// };

// export default index;

import { ArrowRightAlt } from "@mui/icons-material";
import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import NativeImage from "../../components/general/NativeImage";
import theme from "../../styles/themes/theme";

const works = [
    {
        name: "Indigo and the Milk Cap",
        date: "December 2022",
        description: "Luminary puppet show as part of Let There Be Light",
        location: "Piedmont Virginia Community College",
        duration: "12 minutes",
        synopsis:
            "Indigo, a 3 foot bunraku-style puppet with three puppeteers, goes for a walk in the woods, and after much searching, happens upon a bright blue indigo milk-cap mushroom. In real life, indigo milk-cap mushrooms can be occasionally found in the wooded area where this piece was performed. Original score by Luke Dahl.",
        src: "/images/about1.webp",
        link: "https://cvillelight.org",
        alt: "alt text for image",
        imageHeight: 750,
        imageWidth: 1000,
    },
    {
        name: "East Coast Tour",
        date: "September 2022",
        description: "Solo Tour",
        location: "Multiple Locations",
        duration: "6 months",
        synopsis:
            "I performed I Made A Solemn Vow To Break The Sidewalk at the Black Cherry Puppet Theater's September puppet slam, and then performed three shows each at Palmetto Street Puppets in Brooklyn, New York, at Fox Market in Montpelier, Vermont, and at a private home in Ithaca, New York.",
        src: "/images/about1.webp",
        link: "",
        alt: "Performance",
        imageHeight: 1000,
        imageWidth: 750,
    },
    {
        name: "Dawn-Strider",
        date: "September 2021",
        description: "Outdoor giant paper mache puppet show",
        location: "Charlottesville, Virginia",
        duration: "40 minutes",
        synopsis:
            "I received permission from author Jane Yolen create this giant puppet adaptation of her 1974 short story. The giant Night-Walker, a two-story tall puppet with five puppeteers, is so widely feared that they don’t know how to make friends, and ends up accidentally making the sun disappear. Bravery and authentic communication save the day. Solo flute accompaniment was written and performed by Kelly Sulick.",
        src: "/images/about1.webp",
        link: "https://www.youtube.com/watch?v=QN2Uo1MdcMU",
        alt: "Giant puppet show",
        imageHeight: 500,
        imageWidth: 500,
    },

    // {
    //     name: "",
    //     date: "",
    //     description: "",
    //     location: "",
    //     duration: "",
    //     synopsis: "",
    //     src: "/images/aboutBlue.webp",
    //     link: "",
    //     alt: "",
    //     imageHeight: 600,
    //     imageWidth: 1000,
    // },
];

const index = () => {
    return (
        <Container>
            <PageLayout name="Events">
                <Box className="section">
                    <Grid container spacing={4}>
                        {works.map((work, index) => {
                            return (
                                <>
                                    <Grid key={index} item xs={12} md={7}>
                                        <Box
                                            sx={{
                                                height: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box>
                                                <Typography>{`${work.location}, ${work.date}`}</Typography>
                                                <Typography
                                                    variant="h3"
                                                    component="p"
                                                    sx={{
                                                        margin: ".1em 0 .35em 0",
                                                        fontSize: {
                                                            xs: "2rem",
                                                            md: "3rem",
                                                        },
                                                    }}
                                                >
                                                    {work.name}
                                                </Typography>
                                                <Typography
                                                    sx={{ fontStyle: "italic" }}
                                                >
                                                    {work.description}
                                                </Typography>
                                                <Divider
                                                    sx={{ margin: "1rem 0" }}
                                                />
                                                <Typography>
                                                    {work.synopsis}
                                                </Typography>
                                                {work.link && (
                                                    <>
                                                        <br />
                                                        <Link href={work.link}>
                                                            <Typography
                                                                sx={{
                                                                    textDecoration:
                                                                        "underline",
                                                                    cursor: "pointer",
                                                                }}
                                                            >
                                                                See More
                                                            </Typography>
                                                        </Link>
                                                    </>
                                                )}
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                height: "100%",
                                            }}
                                        >
                                            <NativeImage
                                                src={work.src}
                                                maxSize={800}
                                                alt="asdf"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider sx={{ margin: "1rem" }} />
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{ maxWidth: "70ch" }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: "center",
                                    margin: "0 2rem",
                                    fontStyle: "italic",
                                }}
                            >
                                Do you have an alternative event in
                                Charlottesville coming up that you&rsquo;d like
                                to get the word out on? Let us know and
                                we&rsquo;ll promote it here, for free!
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </PageLayout>
        </Container>
    );
};

export default index;
