import { Box, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import StoryPreview from "../components/home/StoryPreview";
import { db } from "../firebase";
import Meta from "../components/home/Meta";
import Link from "next/link";
import SocialMediaIcons from "../components/general/SocialMediaIcons";
import AdvicePreview from "../components/previews/AdvicePreview";
import CraigslistPreview from "../components/previews/CragislistPreview";
import OpinionPreview from "../components/previews/OpinionPreview";
import theme from "../styles/themes/theme";
import MiscPreview from "../components/previews/MiscPreview";

const SidebarInfo = () => {
    return (
        <Box sx={{ marginBottom: "2.75rem" }}>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
                About Us
            </Typography>
            <Divider sx={{ margin: ".5rem 0 .5rem 0" }} />
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                CURBITURE is a literary journal that shows its title capitalized
                or in all caps depending on the whims of its web developer, who
                is also one of three major contributors. The web
                developer/editor, Owen Cash, along with writer/editor Sandy
                Beaches and writer/editor Kithis the Salient take great pride in
                the quality and poignancy of their work as well as the fitness
                of their slim toned figures.
            </Typography>
            <Typography
                variant="body2"
                sx={{ fontSize: "1rem", margin: ".5rem 0" }}
            >
                If you are an MFA student or undergrad, or aspiring career
                writer, and you need something to put on your resume, please
                contact Curbiture and we will put you on the masthead. You
                don&rsquo;t even have to contribute or anything.
            </Typography>
            <Typography
                variant="body2"
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

export default function Home({
    allPublications,
    misc,
    advice,
    craigslist,
    opinions,
}) {
    return (
        <Container maxWidth="xl" sx={{ paddingTop: "6rem" }}>
            <Meta />
            <Grid container>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "2rem",
                        }}
                    >
                        <Typography variant="body2">
                            <span style={{ textDecoration: "underline" }}>
                                <Link href="/subscribe">Subscribe</Link>
                            </span>{" "}
                            to our mailing list, motherfuckers
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5.75}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h3" sx={{ textAlign: "center" }}>
                        Miscellany
                    </Typography>
                    <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                    {misc &&
                        misc.map((misc, index) => {
                            return <MiscPreview misc={misc} key={index} />;
                        })}
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={0.25}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            padding: { xs: "none", md: "3.25rem 0" },
                        }}
                    >
                        <Divider orientation="vertical" />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={2.875}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h3">Damn Good Advice</Typography>
                    <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                    {advice &&
                        advice.map((advision, index) => {
                            return (
                                <AdvicePreview
                                    item={advision}
                                    key={index}
                                    category="advice"
                                />
                            );
                        })}
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={0.25}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            padding: { xs: "none", md: "3.25rem 0" },
                        }}
                    >
                        <Divider orientation="vertical" />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={2.875}
                    sx={{
                        display: "flex",

                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h3">Opinions</Typography>
                    <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                    {opinions &&
                        opinions.map((opinion, index) => {
                            return (
                                <OpinionPreview
                                    opinion={opinion}
                                    key={index}
                                    category="advice"
                                />
                            );
                        })}
                </Grid>
                {/* <Grid
                    item
                    xs={12}
                    md={0.25}
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex",
                            flexDirection: "column",
                        },
                    }}
                >
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            padding: { xs: "none", md: "3.25rem 0" },
                        }}
                    >
                        <Divider orientation="vertical" />
                    </Box>
                </Grid> */}
                <Grid item xs={12}>
                    <Box
                        className="section"
                        sx={{
                            backgroundColor: theme.palette.background.accent,
                            marginBottom: "1rem",
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{ textAlign: "center", marginBottom: ".5em" }}
                        >
                            Want to support Curbiture?
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: "center",
                                fontStyle: "italic",
                                color: theme.palette.custom.darkMuted,
                                margin: "0 2rem",
                            }}
                        >
                            Well that&rsquo;s too bad because we don&rsquo;t
                            want your fucking blood money.
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    className="section"
                    item
                    xs={12}
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex",
                            flexDirection: "column",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Typography
                            variant="h3"
                            sx={{
                                marginBottom: "1em",
                                fontSize: "3rem",
                                maxWidth: "30ch",
                            }}
                        >
                            The Very Very Best of Charlottesville&rsquo;s
                            Craigslist
                        </Typography>
                        <Grid container spacing={4}>
                            {craigslist &&
                                craigslist.map((listing, index) => {
                                    return (
                                        <Grid item xs={12} key={index} md={3}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                }}
                                            >
                                                <CraigslistPreview
                                                    category="opinions"
                                                    item={listing}
                                                />
                                            </Box>
                                        </Grid>
                                    );
                                })}
                        </Grid>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: {
                            xs: "flex",
                            md: "none",
                        },
                        flexDirection: "column",
                    }}
                >
                    {allPublications &&
                        allPublications.map((publication, index) => {
                            return (
                                <StoryPreview
                                    story={publication}
                                    key={index}
                                    category="publications"
                                />
                            );
                        })}
                    <SidebarInfo />
                </Grid>
            </Grid>
            <Box
                className="section"
                sx={{
                    background: theme.palette.background.accent,
                    display: { xs: "none", md: "flex" },
                    justifyContent: "center",
                }}
            >
                <Box sx={{ maxWidth: "70ch" }}>
                    <Typography
                        sx={{
                            textAlign: "center",
                            margin: "0 2rem",
                        }}
                    >
                        CURBITURE is a literary journal that shows its title
                        capitalized or in all caps depending on the whims of its
                        web developer, who is also one of three major
                        contributors. The web developer/editor, Owen Cash, along
                        with writer/editor Sandy Beaches and writer/editor
                        Kithis the Salient take great pride in the quality and
                        poignancy of their work as well as the fitness of their
                        slim toned figures.
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            textAlign: "center",
                            margin: "0 2rem",
                        }}
                    >
                        If you are an MFA student or undergrad, or aspiring
                        career writer, and you need something to put on your
                        resume, please contact Curbiture and we will put you on
                        the masthead. You don&rsquo;t even have to contribute or
                        anything.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export const getStaticProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const allPublicationsQuery = query(
        publicationsRef,
        orderBy("dateUploaded", "desc"),
        limit(7)
    );
    const miscQuery = query(
        publicationsRef,
        where("categories", "array-contains", "misc"),
        orderBy("dateUploaded", "desc"),
        limit(1)
    );
    const adviceQuery = query(
        publicationsRef,
        where("categories", "array-contains", "advice"),

        orderBy("dateUploaded", "desc"),
        limit(5)
    );
    const craigslistQuery = query(
        publicationsRef,
        where("categories", "array-contains", "craigslist"),

        orderBy("dateUploaded", "desc"),
        limit(4)
    );
    const opinionsQuery = query(
        publicationsRef,
        where("categories", "array-contains", "opinions"),

        orderBy("dateUploaded", "desc"),
        limit(2)
    );

    const allPublicationsSnapshot = await getDocs(allPublicationsQuery);
    const miscSnapshot = await getDocs(miscQuery);
    const adviceSnapshot = await getDocs(adviceQuery);
    const craigslistSnapshot = await getDocs(craigslistQuery);
    const opinionsSnapshot = await getDocs(opinionsQuery);
    let allPublications = [];
    allPublicationsSnapshot.docs.forEach((doc, index) => {
        allPublications = [...allPublications, doc.data()];
    });
    let misc = [];
    miscSnapshot.docs.forEach((doc, index) => {
        misc = [...misc, doc.data()];
    });
    let advice = [];
    adviceSnapshot.docs.forEach((doc, index) => {
        advice = [...advice, doc.data()];
    });
    let craigslist = [];
    craigslistSnapshot.docs.forEach((doc, index) => {
        craigslist = [...craigslist, doc.data()];
    });
    let opinions = [];
    opinionsSnapshot.docs.forEach((doc, index) => {
        opinions = [...opinions, doc.data()];
    });

    return {
        props: {
            allPublications,
            misc,
            advice,
            craigslist,
            opinions,
        },
    };
};
