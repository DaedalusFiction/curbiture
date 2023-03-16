import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Link from "next/link";
import PageLayout from "../../components/layout/PageLayout";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const index = ({ upcomingEvents, pastEvents }) => {
    const convertDate = (date) => {
        let newDateArray = date.split("-");
        let firstItem = newDateArray.shift();
        newDateArray.push(firstItem);
        return newDateArray.join("/");
    };

    return (
        <Container maxWidth="md">
            <PageLayout name="Events">
                <Box className="section">
                    <Typography
                        variant="h3"
                        sx={{ textAlign: "center", marginBottom: "2rem" }}
                    >
                        Upcoming Events
                    </Typography>
                    <Grid container spacing={4}>
                        {upcomingEvents.map((event, index) => {
                            return (
                                <>
                                    <Grid key={index} item xs={12}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box>
                                                <Typography>{`${
                                                    event.fields[1].value
                                                }, ${convertDate(
                                                    event.fields[2].value
                                                )}`}</Typography>
                                                <Typography
                                                    variant="h3"
                                                    component="p"
                                                    sx={{
                                                        fontSize: {
                                                            xs: "2rem",
                                                            md: "3rem",
                                                        },
                                                    }}
                                                >
                                                    {event.fields[0].value}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontStyle: "italic",
                                                        marginBottom: "1em",
                                                    }}
                                                >
                                                    {event.fields[3].value}
                                                </Typography>

                                                <Typography>
                                                    {event.fields[4].value}
                                                </Typography>
                                                {event.fields[5].value && (
                                                    <>
                                                        <br />
                                                        <Link
                                                            href={
                                                                event.fields[5]
                                                                    .value
                                                            }
                                                        >
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
                                    {/* <Grid item xs={12} md={5}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <NativeImage
                                                src={event.URLs[0]}
                                                maxSize={800}
                                                alt="asdf"
                                            />
                                        </Box>
                                    </Grid> */}
                                    <Grid item xs={12}>
                                        <Divider sx={{ margin: "1rem" }} />
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                    <Typography
                        variant="h3"
                        sx={{ textAlign: "center", marginBottom: "2rem" }}
                    >
                        Past Events
                    </Typography>
                    <Grid container spacing={4}>
                        {pastEvents.map((event, index) => {
                            return (
                                <>
                                    <Grid key={index} item xs={12}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box>
                                                <Typography>{`${
                                                    event.fields[1].value
                                                }, ${convertDate(
                                                    event.fields[2].value
                                                )}`}</Typography>
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
                                                    {event.fields[0].value}
                                                </Typography>
                                                {/* <Typography
                                                    sx={{ fontStyle: "italic" }}
                                                >
                                                    {event.description}
                                                </Typography> */}
                                                <Divider
                                                    sx={{ margin: "1rem 0" }}
                                                />
                                                <Typography>
                                                    {event.fields[3].value}
                                                </Typography>
                                                {event.fields[4].value && (
                                                    <>
                                                        <br />
                                                        <Link
                                                            href={
                                                                event.fields[4]
                                                                    .value
                                                            }
                                                        >
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
                                    {/* <Grid item xs={12} md={5}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <NativeImage
                                                src={event.URLs[0]}
                                                maxSize={800}
                                                alt="asdf"
                                            />
                                        </Box>
                                    </Grid> */}
                                    <Grid item xs={12}>
                                        <Divider sx={{ margin: "1rem" }} />
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                </Box>
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
                            Do you have an alternative event in Charlottesville
                            coming up that you&rsquo;d like to get the word out
                            on? Let us know and we&rsquo;ll promote it here, for
                            free!
                        </Typography>
                    </Box>
                </Box>
            </PageLayout>
        </Container>
    );
};

export const getServerSideProps = async (context) => {
    const eventsRef = collection(db, "events");
    const eventsQuery = query(eventsRef, orderBy("dateUploaded", "desc"));

    const eventsSnapshot = await getDocs(eventsQuery);
    const currentDate = new Date();
    console.log("current date ", currentDate);
    let upcomingEventsInitial = [];
    let pastEventsInitial = [];
    eventsSnapshot.docs.forEach((doc, index) => {
        if (new Date(doc.data().fields[2].value) > currentDate - 86400000) {
            // console.log(currentDate - new Date(doc.data().fields[2].value));
            upcomingEventsInitial = [...upcomingEventsInitial, doc.data()];
        } else {
            pastEventsInitial = [...pastEventsInitial, doc.data()];
        }
    });

    const upcomingEvents = upcomingEventsInitial.sort(
        (a, b) => new Date(a.fields[2].value) - new Date(b.fields[2].value)
    );
    const pastEvents = pastEventsInitial.sort(
        (a, b) => new Date(b.fields[2].value) - new Date(a.fields[2].value)
    );

    return {
        props: {
            upcomingEvents,
            pastEvents,
        },
    };
};

export default index;
