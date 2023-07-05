import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import login from "../../utility/login.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.js";
import PageLayout from "../../components/layout/PageLayout.js";
import AdminAccordion from "../../components/admin/AdminAccordion.js";

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [updateCounter, setUpdateCounter] = useState(0);

    const handleSignIn = async () => {
        const user = await login();
        if (user) {
            const userRef = doc(db, "users", user.uid);
            const task = await getDoc(userRef).then((response) => {
                setIsAdmin(response.data().admin);
                setIsLoggedIn(true);
            });
        }
    };

    return (
        <PageLayout name="Admin">
            <Container maxWidth="lg">
                <Box sx={{ padding: "4rem 0" }}>
                    <Container maxWidth="sm">
                        {!isLoggedIn && (
                            <Box
                                sx={{
                                    marginBottom: "1rem",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleSignIn}
                                    sx={{ marginBottom: "1rem" }}
                                >
                                    Sign in with google
                                </Button>
                            </Box>
                        )}
                    </Container>
                    {isAdmin ? (
                        <Box sx={{ marginBottom: "3rem" }}>
                            <AdminAccordion />
                        </Box>
                    ) : (
                        <Container maxWidth="sm">
                            <Typography sx={{ textAlign: "center" }}>
                                You are not logged in as an administrator.
                                Please contact Dave at hello@fictionalweb.com if
                                you continue to experience difficulties.
                            </Typography>
                        </Container>
                    )}
                </Box>
            </Container>
        </PageLayout>
    );
};

export default Admin;

// import { Button, Container, Grid, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import { useState } from "react";
// import Head from "next/head";
// import login from "../../utility/login.js";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../firebase.js";
// import FirebaseUploadForm from "../../components/admin/FirebaseUploadForm.js";
// import FirestoreListing from "../../components/admin/FirestoreListing.js";
// import {
//     contributorConfig,
//     eventConfig,
//     outandaboutConfig,
//     uploadConfig,
// } from "../../siteInfo";
// import PageLayout from "../../components/layout/PageLayout.js";
// import FirestoreSubmissionsListing from "../../components/admin/FirestoreSubmissionsListing.js";
// import FirebaseEventUploadForm from "../../components/admin/FirebaseEventUploadForm.js";
// import FirebaseOutandaboutUploadForm from "../../components/admin/FirebaseOutandaboutUploadForm.js";
// import FirebaseContributorUploadForm from "../../components/admin/FirebaseContributorUploadForm.js";
// import FirebaseContributorListing from "../../components/admin/FirebaseContributorListing.js";

// const Admin = () => {
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [updateCounter, setUpdateCounter] = useState(0);

//     const handleSignIn = async () => {
//         const user = await login();
//         if (user) {
//             const userRef = doc(db, "users", user.uid);
//             const task = await getDoc(userRef).then((response) => {
//                 setIsAdmin(response.data().admin);
//                 setIsLoggedIn(true);
//             });
//         }
//     };

//     return (
//         <PageLayout name="Admin">
//             <Container maxWidth="xl">
//                 <Box sx={{ padding: "4rem 0" }}>
//                     <Container maxWidth="sm">
//                         {!isLoggedIn && (
//                             <Button
//                                 variant="contained"
//                                 color="secondary"
//                                 onClick={handleSignIn}
//                                 sx={{ marginBottom: "1rem" }}
//                             >
//                                 Sign in with google
//                             </Button>
//                         )}
//                     </Container>
//                     {isAdmin ? (
//                         <Box sx={{ marginBottom: "3rem" }}>
//                             <Grid container spacing={8}>
//                                 <Grid item xs={12} md={6}>
//                                     <FirebaseUploadForm
//                                         config={uploadConfig}
//                                         folder="publications"
//                                         updateCounter={updateCounter}
//                                         setUpdateCounter={setUpdateCounter}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <FirestoreListing
//                                         // category={uploadConfig.category}
//                                         folder="publications"
//                                         updateCounter={updateCounter}
//                                         setUpdateCounter={setUpdateCounter}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <FirebaseEventUploadForm
//                                         config={eventConfig}
//                                         folder="events"
//                                         updateCounter={updateCounter}
//                                         setUpdateCounter={setUpdateCounter}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <FirebaseOutandaboutUploadForm
//                                         config={outandaboutConfig}
//                                         folder="outandabout"
//                                         updateCounter={updateCounter}
//                                         setUpdateCounter={setUpdateCounter}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <FirebaseContributorUploadForm
//                                         config={contributorConfig}
//                                         folder="contributors"
//                                         updateCounter={updateCounter}
//                                         setUpdateCounter={setUpdateCounter}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12} md={6}>
//                                     <FirebaseContributorListing
//                                         // category={uploadConfig.category}
//                                         folder="contributors"
//                                         updateCounter={updateCounter}
//                                         setUpdateCounter={setUpdateCounter}
//                                     />
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     ) : (
//                         <Container maxWidth="sm">
//                             <Typography>
//                                 You are not logged in as an administrator.
//                                 Please contact Dave at hello@fictionalweb.com if
//                                 you continue to experience difficulties.
//                             </Typography>
//                         </Container>
//                     )}
//                 </Box>
//             </Container>
//         </PageLayout>
//     );
// };

// export default Admin;
