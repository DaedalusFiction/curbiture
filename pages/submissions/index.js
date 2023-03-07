import {
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import Link from "next/link";

const index = () => {
    return (
        <Container>
            <PageLayout name="Submissions Guidelines">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Container maxWidth="md">
                            <Box sx={{ margin: "4rem 0" }}>
                                <Typography>
                                    CURBITURE only publishes the dumbest shit.
                                    But we don&rsquo;t mean this in a
                                    self-deprecatory way--we like the stuff we
                                    print, and we would only print it if we
                                    thought you&rsquo;d like it too.
                                </Typography>
                                <br />
                                <Typography variant="h4" component="h3">
                                    What we Publish:
                                </Typography>
                                <br />
                                <Typography>
                                    We want material that entertains us.
                                    That&rsquo;s it. We realize that this is
                                    very open-ended, perhaps frustratingly so,
                                    but if you want an idea of what sorts of
                                    things entertain us, then just head over to
                                    the front page and look around a bit.
                                </Typography>
                                <br />
                                <Typography variant="h4">
                                    How to Submit:
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText>
                                            All submissions should be emailed
                                            directly to{" "}
                                            <strong>
                                                CharlottesvilleCurbiture@gmail.com
                                            </strong>
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            In the subject of the email, print
                                            your NAME and TITLE of your
                                            submission.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Copy and paste the body of your
                                            submission directly into the body of
                                            your email. Please note that proper
                                            formatting is extremely important.
                                            If your submission is improperly
                                            formatted, we may ask you to
                                            reformat it before acceptance.
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            We accept simultaneous submissions
                                            but please let us know if you work
                                            was accepted elsewhere
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            We are not interested in bigoted,
                                            homophobic, racist, transphobic, or
                                            ableist, dogmatic, right-wing,
                                            sexist, closed-minded, unfunny,
                                            conservative, or unnecessarily
                                            sarcastic works.
                                        </ListItemText>
                                    </ListItem>
                                </List>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            textAlign: "center",
                                        }}
                                    >
                                        Have a question or comment?{" "}
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            <Link href="contact">
                                                Contact us.
                                            </Link>
                                        </span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                        <TextSubmissionsForm
                            config={textSubmissionsConfig}
                            folder="storysubmissions"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ImageSubmissionsForm
                            config={imageSubmissionsConfig}
                            folder="imagesubmissions"
                        />
                    </Grid> */}
                </Grid>
            </PageLayout>
        </Container>
    );
};

export default index;
