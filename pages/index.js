import { Box, Button, Divider, Typography } from "@mui/material";
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
import { db } from "../firebase";
import Meta from "../components/home/Meta";
import Link from "next/link";
import SocialMediaIcons from "../components/general/SocialMediaIcons";
import AdvicePreview from "../components/previews/AdvicePreview";
import BestofPreview from "../components/previews/BestofPreview";
import OpinionPreview from "../components/previews/OpinionPreview";
import theme from "../styles/themes/theme";
import MiscPreview from "../components/previews/MiscPreview";
import ImageFadeIn from "../components/general/ImageFadeIn";

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
                CURBITURE aims to bring you all of the best that C&rsquo;ville
                has to offer, from local celebrities, events, and news to rants,
                bestof finds, oddities, and more.
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

export default function Home({ misc, advice, bestof, opinions }) {
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
                        <Typography
                            variant="body2"
                            sx={{ textAlign: "center" }}
                        >
                            <span style={{ textDecoration: "underline" }}>
                                <Link href="/subscribe">Subscribe</Link>
                            </span>{" "}
                            to our mailing list, motherfuckers
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8.875}>
                    <Grid container>
                        <Grid
                            item
                            xs={12}
                            md={5.75}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{ textAlign: "center" }}
                            >
                                Miscellany
                            </Typography>
                            <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                            {misc &&
                                misc.map((misc, index) => {
                                    return (
                                        <MiscPreview misc={misc} key={index} />
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
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: "center",
                                    marginTop: { xs: "2rem", md: "0" },
                                }}
                            >
                                Damn Good Advice
                            </Typography>
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

                        <Grid item xs={12}>
                            <Box
                                className="section"
                                sx={{
                                    backgroundColor:
                                        theme.palette.background.accent,
                                    marginBottom: "1rem",
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        textAlign: "center",
                                        marginBottom: ".5em",
                                    }}
                                >
                                    Want to support Curbiture?
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: "center",
                                        fontStyle: "italic",
                                        margin: "0 2rem",
                                    }}
                                >
                                    Well that&rsquo;s too bad because we
                                    don&rsquo;t want your fucking blood money.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={4}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%",
                                    padding: { xs: "2rem 0", md: "4rem" },
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="body2"
                                        sx={{ textAlign: "center" }}
                                    >
                                        CURBITURE brings you all the best of
                                        everything you knew or didn&rsquo;t know
                                        you wanted.
                                    </Typography>
                                    <br />
                                    <Typography
                                        variant="body2"
                                        sx={{ textAlign: "center" }}
                                    >
                                        We love our city, from the coffee shops
                                        to the tea houses, from the Corner to
                                        the Pavillion, from the goths to the
                                        foodies, and everyone and everything in
                                        between.
                                    </Typography>
                                    <br />
                                    <Typography
                                        variant="body2"
                                        sx={{ textAlign: "center" }}
                                    >
                                        If you are a local artist, writer,
                                        celebrity, or character, we&rsquo;d love
                                        to hear from you. Send us your contact
                                        info and let us know what you have to
                                        offer, and don&rsquo;t forget to sign up
                                        for our kickass newsletter while
                                        you&rsquo;re at it.
                                    </Typography>
                                    <br />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Link href="/contact">
                                            <Button variant="contained">
                                                Contact
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            textAlign: "center",
                                            margin: "1rem 0",
                                            fontSize: "2rem",
                                        }}
                                    >
                                        Buff Bec&rsquo;s Best of the
                                        &rsquo;Ville
                                    </Typography>
                                    <Divider
                                        sx={{ margin: ".5rem 0 1rem 0" }}
                                    />
                                </Grid>
                                {bestof &&
                                    bestof.map((listing, index) => {
                                        return (
                                            <Grid
                                                item
                                                xs={12}
                                                key={index}
                                                md={6}
                                            >
                                                <Box
                                                    sx={{
                                                        padding: "1rem",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <BestofPreview
                                                        category="opinions"
                                                        item={listing}
                                                    />
                                                </Box>
                                            </Grid>
                                        );
                                    })}
                            </Grid>
                        </Grid>
                    </Grid>
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
                    <SidebarInfo />
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            marginTop: { xs: "2rem", md: "0" },
                        }}
                    >
                        Opinions
                    </Typography>
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
                        variant="body2"
                        sx={{
                            textAlign: "center",
                            margin: "0 2rem",
                            fontStyle: "italic",
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

export const getServerSideProps = async (context) => {
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
    const bestofQuery = query(
        publicationsRef,
        where("categories", "array-contains", "bestof"),

        orderBy("dateUploaded", "desc"),
        limit(4)
    );
    const opinionsQuery = query(
        publicationsRef,
        where("categories", "array-contains", "opinions"),

        orderBy("dateUploaded", "desc"),
        limit(2)
    );

    const miscSnapshot = await getDocs(miscQuery);
    const adviceSnapshot = await getDocs(adviceQuery);
    const bestofSnapshot = await getDocs(bestofQuery);
    const opinionsSnapshot = await getDocs(opinionsQuery);
    let misc = [];
    miscSnapshot.docs.forEach((doc, index) => {
        misc = [...misc, doc.data()];
    });
    let advice = [];
    adviceSnapshot.docs.forEach((doc, index) => {
        advice = [...advice, doc.data()];
    });
    let bestof = [];
    bestofSnapshot.docs.forEach((doc, index) => {
        bestof = [...bestof, doc.data()];
    });
    let opinions = [];
    opinionsSnapshot.docs.forEach((doc, index) => {
        opinions = [...opinions, doc.data()];
    });

    return {
        props: {
            misc,
            advice,
            bestof,
            opinions,
        },
    };
};
