import { Box, Divider, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../../components/general/SizedImage";
import { leadProfile, secondaryProfiles } from "../../../siteInfo";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";
import Profile from "../../../components/about/Profile";

const index = () => {
    return (
        <PageLayout name="MASTHEAD">
            <AboutNavbar />
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item key={index} xs={12} md={4}>
                        <Profile profile={secondaryProfiles[0]}>
                            <Typography>
                                James Cole is an author, poet, filmmaker,
                                scientist, and ranidaphobe based out of
                                Charlottesville, VA. He graduated from The
                                College of William and Mary in 2018 with a
                                degree in neuroscience and a bunch of
                                unnecessary credits in creative writing and
                                medieval studies.
                            </Typography>
                            <br />
                            <Typography>
                                During the days he researches developmental eye
                                disorders as Ph.D. candidate at the University
                                of Virginia Medical School. By night, he
                                blathers poetry at anyone who will listen, and
                                many who will not. His own writings appear in a
                                number of publications, including Oddball
                                Magazine, Poetica Review, and The Artemis
                                Journal.
                            </Typography>
                            <br />
                            <Typography>
                                In 2019 he released his first poetry collection,{" "}
                                <em>Crow, come home </em>
                                with VerbalEyze Press. He also founded
                                Charlottesville Poetry Critique Circle, Poetry
                                Live! Showcase, and teaches poetics at
                                WriterHouse. When he is not engaged in literary
                                slapfighting he has been known to suffer
                                horrific deaths in historic short films,
                                simulate adventures with tiny plastic people,
                                and clap way too loud for buskers.
                            </Typography>
                        </Profile>
                    </Grid>
                    <Grid item key={index} xs={12} md={4}>
                        <Profile profile={secondaryProfiles[1]}>
                            <Typography>
                                David Sorensen is a writer, musician, and web
                                developer living in central Virginia. His
                                stories have appeared in a number of literary
                                magazines, including New Reader Magazine, The
                                Squawk Back, Infinite Rust, and, depending on
                                how gullible you are, Harper&rsquo;s and The New
                                Yorker. His upcoming novel, Unconventional
                                Desire, will probably never actually be released
                                or even finished.
                            </Typography>
                            <br />
                            <Typography>
                                For anyone who is interested, David&rsquo;s
                                favorite writers include David Foster Wallace,
                                Dave Eggers, Douglas Coupland, Kurt Vonnegut,
                                Thomas Mann, and Ivan Turgenev. He also likes
                                trashy memoirs, by anyone.
                            </Typography>
                        </Profile>
                    </Grid>
                    <Grid item key={index} xs={12} md={4}>
                        <Profile profile={secondaryProfiles[2]}>
                            <Typography>
                                Chandler McGraw is an artist, photographer,
                                critic, and museum professional based out of
                                Roanoke, VA. He graduated from George Mason
                                University in 2020, having studied studio art
                                and sculpture. As a sculptor and mixed-media
                                artist he is experienced with copper and steel,
                                among other mediums. His experimental style
                                draws influence from the works of Lee Bontecou,
                                Louise Nevelson, and John Baldasari.
                            </Typography>
                            <br />
                            <Typography>
                                Outside his artistic efforts, Chandler is still
                                seeking the Alf calendar with Melmackian
                                anniversary gifts. He loves when tiny things are
                                contained inside a larger version of themselves
                                and frequently enjoys Twizzlers.
                            </Typography>
                        </Profile>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
