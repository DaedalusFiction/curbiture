import { Box, Container, Grid, Typography } from "@mui/material";
import SizedImage from "../../../components/general/SizedImage";
import { studioContent } from "../../../siteInfo";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="MISSION STATEMENT">
            <AboutNavbar />
            <Container maxWidth="md">
                <Box className="section">
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <Typography sx={{ whiteSpace: "pre-wrap" }}>
                                We are on a mission to change the world. More on
                                that later.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </PageLayout>
    );
};

export default index;
