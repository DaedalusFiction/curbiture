import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";

const index = () => {
    return (
        <PageLayout name="Publications">
            <Box className="section">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}></Grid>
                    <Grid item xs={12} md={6}></Grid>
                </Grid>
            </Box>
        </PageLayout>
    );
};

export default index;
