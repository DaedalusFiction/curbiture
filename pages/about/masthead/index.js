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
                                Buff Bec loves soap operas, most small animals,
                                Totino&rsquo;s pizza rolls, Bernie Sanders, and
                                weed.
                            </Typography>
                            <br />
                            <Typography>
                                Her works have appeared in too many publications
                                to list here. Oh, and if you see her
                                walkin&rsquo; your way, you best cross to the
                                other side of the street.
                            </Typography>
                        </Profile>
                    </Grid>
                    <Grid item key={index} xs={12} md={4}>
                        <Profile profile={secondaryProfiles[1]}>
                            <Typography>
                                Owen Cash lives life on the edge. Whether
                                it&rsquo;s skydiving in Rio, amateur bullriding,
                                investing in the latest cryptocurrencies, asking
                                out the barista at his favorite coffee shop, or
                                eating soft cheese that he left out overnight,
                                Owen doesn&rsquo;t let things like potential
                                consequences get in the way of living his life.
                            </Typography>
                            <br />
                            <Typography>
                                Owen is very sure that the novels he plans to
                                write will be instant best-sellers. If you would
                                like to collaborate with him on one or more of
                                them, please say so in the comment section of
                                our contact form.
                            </Typography>
                        </Profile>
                    </Grid>
                    <Grid item key={index} xs={12} md={4}>
                        <Profile profile={secondaryProfiles[2]}>
                            <Typography>
                                Kithis the Salient is a human being who was born
                                on Earth. He enjoys writing, reading, eating,
                                taking showers, and talking to other human
                                beings. He is very interested in human anatomy
                                and physiology, and dreams of someday being
                                inducted into a Hall of Fame somewhere.
                            </Typography>
                            <br />
                            <Typography>
                                If you would like to meet Kithis in person,
                                please get naked and stand outside at or around
                                1am on a full or new moon and loudly recite the
                                poetry of Geoffrey Chaucer, preferably from
                                memory.
                            </Typography>
                        </Profile>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
