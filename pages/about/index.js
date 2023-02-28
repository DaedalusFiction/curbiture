import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import SizedImage from "../../components/general/SizedImage";
import { aboutContent, pages, secondaryProfiles } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import AboutNavbar from "../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="ABOUT US">
            <AboutNavbar />
            <Container maxWidth="md">
                <Box className="section">
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography>
                                CURBITURE was formed as a venue for the editors
                                and their friends to publish stupid shit
                                whenever they want. Over the weeks we have
                                collaborated with less than a dozen local
                                artists, writers, poets, and journalists, but we
                                expect this number to go up.
                            </Typography>
                            <br />
                            <Typography>
                                It&rsquo;s hard to say what makes Curbiture
                                unique, at least in a way that doesn&rsquo;t
                                sound cliche or disingenuine. We publish all the
                                same old humor categories, and we even borrowed
                                the layout and fonts from other major
                                publication. The color scheme is technically
                                probably unique, though, and we do generate our
                                own content. But the whole thing does just feel
                                done before.
                            </Typography>
                            <br />
                            <Typography></Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;
