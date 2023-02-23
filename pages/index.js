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

export default function Home({ allPublications, poems, fiction, articles }) {
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
                    md={2.75}
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex",
                            flexDirection: "column",
                        },
                    }}
                >
                    <Typography variant="h5" sx={{ textAlign: "center" }}>
                        Prose
                    </Typography>
                    <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                    {poems &&
                        poems.map((poem, index) => {
                            return <PoemPreview poem={poem} key={index} />;
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
                    {fiction &&
                        fiction.map((story, index) => {
                            return (
                                <StoryPreview
                                    story={story}
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
                        {articles &&
                            articles.map((article, index) => {
                                return (
                                    <ArticlePreview
                                        category="articles"
                                        item={article}
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
                                    category="fiction"
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
    const fictionQuery = query(
        publicationsRef,
        where("categories", "array-contains", "poetry"),
        orderBy("dateUploaded", "desc"),
        limit(3)
    );
    const poetryQuery = query(
        publicationsRef,
        where("categories", "array-contains", "fiction"),

        orderBy("dateUploaded", "desc"),
        limit(5)
    );
    const articlesQuery = query(
        publicationsRef,
        where("categories", "array-contains", "article"),

        orderBy("dateUploaded", "desc"),
        limit(4)
    );

    const allPublicationsSnapshot = await getDocs(allPublicationsQuery);
    const poetrySnapshot = await getDocs(poetryQuery);
    const fictionSnapshot = await getDocs(fictionQuery);
    const articlesSnapshot = await getDocs(articlesQuery);
    let allPublications = [];
    allPublicationsSnapshot.docs.forEach((doc, index) => {
        allPublications = [...allPublications, doc.data()];
    });
    let poems = [];
    poetrySnapshot.docs.forEach((doc, index) => {
        poems = [...poems, doc.data()];
    });
    let fiction = [];
    fictionSnapshot.docs.forEach((doc, index) => {
        fiction = [...fiction, doc.data()];
    });
    let articles = [];
    articlesSnapshot.docs.forEach((doc, index) => {
        articles = [...articles, doc.data()];
    });

    return {
        props: {
            allPublications,
            poems,
            fiction,
            articles,
        },
    };
};
