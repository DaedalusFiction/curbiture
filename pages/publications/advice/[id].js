import { Box, Container } from "@mui/system";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { Grid, Typography } from "@mui/material";
import PublicationBody from "../../../components/publications/PublicationBody";
import ShareIcons from "../../../components/general/ShareIcons";

const page = ({ articles, misc }) => {
    return (
        <Box className="section">
            <Container>
                <Grid container>
                    {/* <Grid
                        item
                        xs={0}
                        md={1}
                        sx={{
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                position: "sticky",
                                top: "4rem",
                                margin: "42vh 1.25rem 1.25rem 1.25rem",
                            }}
                        >
                            <ShareIcons color="primary" direction="column" />
                        </Box>
                    </Grid> */}
                    <Grid item xs={12} md={11}>
                        <Box sx={{ paddingTop: "5rem" }}>
                            <Grid container>
                                <Grid item xs={12} md={8}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: ".25em",
                                        }}
                                    >
                                        {misc.subCategories.map(
                                            (subCategory, index) => {
                                                return (
                                                    <Typography
                                                        key={index}
                                                        variant="caption"
                                                    >
                                                        [{subCategory}]
                                                    </Typography>
                                                );
                                            }
                                        )}
                                    </Box>
                                    <Typography
                                        sx={{
                                            margin: ".25em 0",
                                            fontSize: "3rem",
                                        }}
                                        variant="h1"
                                    >
                                        {misc.fields[0].value}?
                                    </Typography>
                                </Grid>
                            </Grid>
                            <PublicationBody
                                sidebarCategory="Opinions"
                                sidebarItems={articles}
                                story={misc}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export const getServerSideProps = async (context) => {
    const docSnap = await getDoc(doc(db, `publications/${context.params.id}`));
    let misc = docSnap.data();

    const publicationsRef = collection(db, "publications");
    const articlesQuery = query(
        publicationsRef,
        where("categories", "array-contains", "opinions"),
        orderBy("dateUploaded", "desc"),
        limit(2)
    );

    const articlesSnapshot = await getDocs(articlesQuery);

    let articles = [];
    articlesSnapshot.docs.forEach((doc, index) => {
        articles = [...articles, doc.data()];
    });

    return {
        props: {
            articles,
            misc,
        },
    };
};

export default page;
