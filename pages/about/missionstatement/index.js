import { Box, Container, Grid, Typography } from "@mui/material";
import ImageFadeIn from "../../../components/general/ImageFadeIn";
import PageLayout from "../../../components/layout/PageLayout";
import AboutNavbar from "../../../components/about/AboutNavbar";

const index = () => {
    return (
        <PageLayout name="MISSION STATEMENT">
            <AboutNavbar />
            <Container maxWidth="md">
                <Box className="section">
                    <Grid container>
                        <Grid item xs={12}>
                            <ImageFadeIn
                                src="/images/preacherman.webp"
                                height={580}
                                width={910}
                            />
                            <br />
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
