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
import PoemPreview from "../components/home/PoemPreview";
import StoryPreview from "../components/home/StoryPreview";
import ArticlePreview from "../components/home/ArticlePreview";
import { db } from "../firebase";
import Meta from "../components/home/Meta";
import Link from "next/link";
import SocialMediaIcons from "../components/general/SocialMediaIcons";
import HumansPreview from "../components/previews/HumansPreview";
import AdvicePreview from "../components/previews/AdvicePreview";
import OpinionsPreview from "../components/previews/OpinionsPreview";

const SidebarInfo = () => {
    return (
        <Box sx={{ marginBottom: "2.75rem" }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
                About Us
            </Typography>
            <Divider sx={{ margin: ".5rem 0 .5rem 0" }} />
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
                <span style={{ fontWeight: "700" }}>The Rumen</span> is a
                collaboration between writers, poets, and artists from a variety
                of demographics and backgrounds. Like the guts of an ungulate,
                we want <span style={{ fontWeight: "700" }}>The Rumen</span> to
                be a space for ideas and experiences to digest, ferment, and
                transform.
            </Typography>
            <Typography
                variant="body2"
                sx={{ fontSize: "1rem", margin: ".5rem 0" }}
            >
                We are especially interested in publishing contributors from
                historically underrepresented people groups.
            </Typography>
            <Typography
                variant="body2"
                sx={{ fontSize: "1rem", fontWeight: "600" }}
            >
                <span style={{ textDecoration: "underline" }}>
                    <Link href="/about">About Us</Link>
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
    humans,
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
                            to our mailing list!
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={5.75}
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex",
                            flexDirection: "column",
                        },
                    }}
                >
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                        Humans (?) of Charlottesville
                    </Typography>
                    <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                    {humans &&
                        humans.map((human, index) => {
                            return <HumansPreview human={human} key={index} />;
                        })}
                </Grid>
                <Grid
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
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex",
                            flexDirection: "column",
                        },
                    }}
                >
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                        Poetry
                    </Typography>
                    <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                    {advice &&
                        advice.map((advision, index) => {
                            return (
                                <AdvicePreview
                                    advision={advision}
                                    key={index}
                                    category="poetry"
                                />
                            );
                        })}
                </Grid>
                <Grid
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
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={2.75}
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex",
                            flexDirection: "column",
                        },
                    }}
                >
                    <SidebarInfo />
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                                flexDirection: "column",
                            },
                        }}
                    >
                        <Typography variant="h5" sx={{ textAlign: "center" }}>
                            Articles
                        </Typography>
                        <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                        {opinions &&
                            opinions.map((opinion, index) => {
                                return (
                                    <OpinionsPreview
                                        category="opinions"
                                        item={opinion}
                                        key={index}
                                    />
                                );
                            })}
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
    const humansQuery = query(
        publicationsRef,
        where("categories", "array-contains", "humans"),
        orderBy("dateUploaded", "desc"),
        limit(3)
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
        limit(4)
    );

    const allPublicationsSnapshot = await getDocs(allPublicationsQuery);
    const humansSnapshot = await getDocs(humansQuery);
    const adviceSnapshot = await getDocs(adviceQuery);
    const craigslistSnapshot = await getDocs(craigslistQuery);
    const opinionsSnapshot = await getDocs(opinionsQuery);
    let allPublications = [];
    allPublicationsSnapshot.docs.forEach((doc, index) => {
        allPublications = [...allPublications, doc.data()];
    });
    let humans = [];
    humansSnapshot.docs.forEach((doc, index) => {
        humans = [...humans, doc.data()];
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
            humans,
            advice,
            craigslist,
            opinions,
        },
    };
};
