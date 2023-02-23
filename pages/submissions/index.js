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
import TextSubmissionsForm from "../../components/submissions/TextSubmissionsForm";
import ImageSubmissionsForm from "../../components/submissions/ImageSubmissionsForm";
import { imageSubmissionsConfig, textSubmissionsConfig } from "../../siteInfo";
import theme from "../../styles/themes/theme";
import Link from "next/link";

const index = () => {
    return (
        <Container className="section">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Container maxWidth="md">
                        <Box sx={{ margin: "4rem 0" }}>
                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{ textAlign: "center" }}
                            >
                                GUIDELINES FOR SUBMISSIONS
                            </Typography>
                            <br />
                            <Typography>
                                The rumen is our favorite portion of the
                                cow&rsquo;s stomach. It is here that gut
                                microbes facilitate fermentation of ingested
                                foodstuffs. It is here that all those difficult
                                cereals and grasses, those hard-to-process
                                things, start to break down. We like to think of
                                literature as a sort of rumen, that narrow
                                tunnel where things accrue, sit, on their way to
                                something elemental.
                            </Typography>
                            <br />
                            <Typography variant="h3" component="h3">
                                WHAT WE PUBLISH
                            </Typography>
                            <br />
                            <Typography>
                                We at The Rumen publish works that move in the
                                conceptual, that draw the tangential lines
                                between condition and potential. We seek work
                                that blends neoclassical ideas with urban
                                grunge, the high concepts of reality mixed with
                                the low reductions of fantasy. Like the
                                aforementioned digesta, we want things that find
                                new meaning when thrust through the reticulum of
                                the written word. We want humor, horror, strange
                                fixations, canvases upended, bodies broken down
                                cell by cell. We know, we know, there are plenty
                                of submission guidelines with similarly vague
                                poetasting out there. The fact is we don&rsquo;t
                                always know what we want until we see it, until
                                we sit with it a while&mdash;ruminate on it, if
                                you will.
                            </Typography>
                            <br />
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                General Guidelines:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        Use a legible font such as Times New
                                        Roman, Garamond, or Calibri
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        DO NOT include any personal information
                                        such as name, email, or other contact
                                        info on your submitted documents
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Submit only original work that has not
                                        been published elsewhere. This includes
                                        personal blogs, social media, or other
                                        published media such as videos
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        We accept simultaneous submissions but
                                        please let us know if you work was
                                        accepted elsewhere
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        We are not interested in bigoted,
                                        homophobic, racist, transphobic, or
                                        ableist, dogmatic, right-wing, sexist,
                                        closed-minded, unfunny, conservative, or
                                        unnecessarily sarcastic works.
                                    </ListItemText>
                                </ListItem>
                            </List>

                            <Typography variant="h3" component="h3">
                                POETRY
                            </Typography>
                            <br />
                            <Typography>
                                For poetry we are interested in works that
                                emphasize craft. We want poems with interesting
                                forms, strong sonics, and striking images
                                flawlessly rendered. Traditional forms are
                                welcome but we lean more toward works that take
                                risks and challenge notions of traditional
                                poetics. We especially appreciate conceptual
                                poems that do a few things really well rather
                                than many things with mediocrity.
                            </Typography>
                            <br />
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                Poetry Guidelines:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        You may submit up to 5 poems at a time.
                                        If you have already submitted to The
                                        Rumen we ask that you wait three months
                                        before submitting to us again.
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Each poem should not exceed two pages or
                                        1000 words.
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <br />
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                We are not interested in:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        Long-form confessional poetry
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Generic pastoral/nature poetry
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Anything reliant on cliches, vague
                                        poetic nothings, hyperminimalist
                                        sentences broken into lines (aka
                                        Instagram poetry
                                    </ListItemText>
                                </ListItem>
                            </List>

                            <Typography>
                                We love a good rhyme, but you should be
                                confident in your use of meter/prosody. An off
                                rhyme is far worse than no rhyme at all.
                            </Typography>
                            <br />
                            <Typography variant="h3" component="h3">
                                FICTION
                            </Typography>
                            <br />
                            <Typography>
                                We at The Rumen publish strange, high concept
                                stories with expert framing. We want tales that
                                project themselves beyond the confines of their
                                word limits, with extra believable or
                                unbelievable characters, and balanced prose that
                                demonstrates equal mastery of action and
                                imagery. Our favorite stories leave us with as
                                many questions as answers, so don&rsquo;t be
                                afraid to weave in your best literary ambiguity.
                                That being said, the purely aesthetic can be a
                                hard sell, so consider closely before sending us
                                your experimental dystopian cyber-thrillers.
                            </Typography>
                            <br />
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                Fiction Guidelines:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        We accept both short fiction and flash
                                        fiction up to 5,000 words. If your story
                                        is a little over the limit, that&rsquo;s
                                        okay, just make note in your submission
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <br />
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                We are not interested in:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        Erotica, saccharine romance, stories of
                                        YA likeness
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Fanfiction</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Generic High Fantasy and Star
                                        Wars-adjacent Sci-Fi
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Children&rsquo;s or middle grade-style
                                        fiction (we make an exception for
                                        original folktales)
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Transgressive stories for
                                        transgression&rsquo;s sake.
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <br />
                            <Typography variant="h3">NON-FICTION</Typography>
                            <br />
                            <Typography>
                                We especially love works dealing with the arts,
                                history, philosophy, sciences, and anything that
                                combines these fields. Thoughtful analyses of
                                film, literature, music, or the like are also
                                welcome. Memoir or personal essays can teach us
                                a lot about ourselves, and we ask that
                                submissions in these genres have a strong
                                central theme or moral. Works of a semi-academic
                                or political nature will require citations,
                                preferably in MLA format.
                            </Typography>
                            <br />
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                Non-fiction Guidelines:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        We accept personal essay, memoir, think
                                        pieces, critical analyses, and similar
                                        articles up to 5,000 words. If your
                                        story is a little over the limit,
                                        that&rsquo;s okay, just make note in
                                        your submission. Any submissions
                                        requiring citations should be formatted
                                        according to the MLA Style Manual.
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <br />

                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                We are not interested in:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        Memoir or family histories absent of
                                        narrative or overarching theme
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Book, film, or other media reviews are a
                                        hard sell though we can be swayed by
                                        interesting critical studie
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Self-help, motivational, evangelical
                                        works, how-to guides
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <Typography>
                                We aren&rsquo;t opposed to political diatribes
                                but it should be noted that works advocating for
                                capitalist, exploitative, imperialistic, and
                                alt-right ideologies are not our cup of cud
                            </Typography>
                            <br />

                            <Typography variant="h3">VISUAL ART</Typography>
                            <br />
                            <Typography>
                                The Rumen is seeking visual media that explores
                                shifting perspectives and allows for multiple
                                avenues of interpretation. We are especially
                                drawn to the experimental and we would like to
                                see pieces whose interpretations unfold with
                                time. We do not equate craft with skill, and we
                                prioritize works that can stand in dialogue with
                                written pieces ready for publication.
                            </Typography>
                            <br />
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                Visual Art Guidelines:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        For all visual submissions we require an
                                        accompanying artist statement of 100-200
                                        words
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        For 2D art, submit an image (PNG 300ppi)
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        For 3D art, 3 photos for on-the-round, 5
                                        for installation/environment (PNG
                                        300ppi)
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <br />

                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                We are not interested in:
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemText>
                                        Fan art or illustrations from other
                                        media
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Concept art for original characters or
                                        setting
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Erotica/Pornography
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Nature/Landscape Photography that could
                                        pass for stock images
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        AI Generated Art
                                    </ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>
                                        Work otherwise unfit for a digital
                                        format
                                    </ListItemText>
                                </ListItem>
                            </List>
                            <Typography>
                                We aren&rsquo;t opposed to political diatribes
                                but it should be noted that works advocating for
                                capitalist, exploitative, imperialistic, and
                                alt-right ideologies are not our cup of cud
                            </Typography>

                            <br />
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
                                        <Link href="contact">Contact us.</Link>
                                    </span>
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
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
                </Grid>
            </Grid>
        </Container>
    );
};

export default index;
