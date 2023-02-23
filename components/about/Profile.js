import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SizedImage from "../general/SizedImage";

const Profile = ({ profile, children }) => {
    return (
        <Box>
            <SizedImage image={profile.image} height="25rem" width="100%" />
            <br />
            <Typography variant="h4" sx={{ textAlign: "center" }}>
                {profile.name}
            </Typography>
            <Divider
                sx={{
                    maxWidth: "10rem",
                    margin: "0 auto 1rem auto",
                }}
            />
            {children}
        </Box>
    );
};

export default Profile;
