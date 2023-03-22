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
import AdvicePreview from "../components/previews/AdvicePreview";
import BestofPreview from "../components/previews/BestofPreview";
import OpinionPreview from "../components/previews/OpinionPreview";
import theme from "../styles/themes/theme";
import MiscPreview from "../components/previews/MiscPreview";
import SidebarInfo from "../components/layout/SidebarInfo";
import OutandAboutPreview from "../components/previews/OutandAboutPreview";

export default function Home({ misc, outandabout, advice, bestof, opinions }) {
    return (
        <Container maxWidth="xl" sx={{ paddingTop: "5.5rem" }}>
            <Meta />
            <Grid container>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: "1rem",
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{ textAlign: "center" }}
                        >
                            Check Out Some of Charlottesville&rsquo;s Upcoming
                            Alternative{" "}
                            <span style={{ textDecoration: "underline" }}>
                                <Link href="/events">Events</Link>
                            </span>
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
                            <br />
                            <Typography
                                variant="h3"
                                sx={{ textAlign: "center" }}
                            >
                                Out & About
                            </Typography>
                            <Divider sx={{ margin: ".5rem 0 1rem 0" }} />
                            {outandabout &&
                                outandabout.map((item, index) => {
                                    return (
                                        <OutandAboutPreview
                                            item={item}
                                            key={index}
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
                            <Box
                                sx={{
                                    margin: "4rem 2rem",
                                }}
                            >
                                <Typography sx={{}}>
                                    <strong style={{ fontSize: "1.5rem" }}>
                                        Curbiture
                                    </strong>
                                </Typography>
                                <Typography sx={{ fontStyle: "italic" }}>
                                    &lsquo;c&#601;r-bi-ch&#601;r
                                </Typography>
                                <Typography sx={{}}>
                                    1. (noun) Furniture you find on the curb
                                </Typography>
                                <Typography sx={{}}>
                                    2. (noun) Contact made between one&rsquo;s
                                    hubcap(s) and the curb
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box
                                className="section"
                                sx={{
                                    backgroundColor:
                                        theme.palette.background.accent,
                                    margin: "1rem 0",
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        textAlign: "center",
                                        fontFamily: "Anton",
                                        marginBottom: ".5em",
                                        textTransform: "uppercase",
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
                                    don&rsquo;t want your goddamn blood money.
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
                                        Best of the &rsquo;Ville
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
                        Do you have an upcoming event in Charlottesville that
                        you would like to promote? Let us know and we&rsquo;ll
                        list it here, for free!
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export const getServerSideProps = async (context) => {
    const publicationsRef = collection(db, "publications");

    const miscQuery = query(
        publicationsRef,
        where("categories", "array-contains", "misc"),
        orderBy("dateUploaded", "desc"),
        limit(1)
    );
    const outandaboutQuery = query(
        collection(db, "outandabout"),
        orderBy("dateUploaded", "desc"),
        limit(2)
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
    const outandaboutSnapshot = await getDocs(outandaboutQuery);
    const adviceSnapshot = await getDocs(adviceQuery);
    const bestofSnapshot = await getDocs(bestofQuery);
    const opinionsSnapshot = await getDocs(opinionsQuery);
    let misc = [];
    miscSnapshot.docs.forEach((doc, index) => {
        misc = [...misc, doc.data()];
    });
    let outandabout = [];
    outandaboutSnapshot.docs.forEach((doc, index) => {
        outandabout = [...outandabout, doc.data()];
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
            outandabout,
            advice,
            bestof,
            opinions,
        },
    };
};
