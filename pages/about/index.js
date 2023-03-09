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
                                and their friends to publish whatever they want,
                                whenever they want. We publish the stuff we like
                                to read and we do so while making as few
                                apologies as possible. And just like the
                                furniture you find on the curb, Curbiture might
                                just be exactly what you&rsquo;re looking for.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;
