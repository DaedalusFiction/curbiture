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
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={aboutContent.image}
                        />
                        <Typography variant="caption">
                            {aboutContent.image.alt}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">Our Roots</Typography>
                        <br />
                        <Typography>
                            The Rumen is a collaboration between writers, poets,
                            and artists from a variety of demographics and
                            backgrounds. Like the guts of an ungulate, we want
                            The Rumen to be a space for ideas and experiences to
                            digest, ferment, and transform. We are especially
                            interested in publishing contributors from
                            historically underrepresented people groups.
                        </Typography>
                        <br />
                        <Typography>
                            Our editors bring their own expertise from artistic,
                            scientific, and technical fields. No discipline
                            exists in isolation, and we believe that in The
                            Rumen the ripples of these intersections can gather,
                            collapse, and mutate into some greater, more
                            meaningful summation.
                        </Typography>
                        <br />
                        <Typography>
                            The Rumen was founded in 2022 by Dave Sorensen,
                            James Cole, and Chandler McGraw, but made possible
                            through the work of artists from across the globe.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
