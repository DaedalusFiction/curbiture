import { Box, Grid, Typography } from "@mui/material";
import SizedImage from "../../../components/general/SizedImage";
import { studioContent } from "../../../siteInfo";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="MISSION STATEMENT">
            <AboutNavbar />
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3">
                            {studioContent.header}
                        </Typography>
                        <br />
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                            The Rumen is mostly committed to publishing the
                            highest-quality poetry, fiction, creative
                            nonfiction, and art by all peoples, especially
                            individuals from historically underrepresented
                            demographics. We believe that art is a vehicle for
                            inter- and intrapersonal connection, and we are
                            especially interested in work that effectively
                            describes what it means to be human, in an
                            intellectual, emotional, bodily, and/or communal
                            way.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SizedImage
                            height="30rem"
                            width="100%"
                            image={studioContent.imageOne}
                        />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: { xs: "start", md: "end" },
                            }}
                        >
                            <Typography variant="caption">
                                {studioContent.imageOne.alt}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
