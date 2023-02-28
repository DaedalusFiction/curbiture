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
import Image from "next/image";
import NativeImage from "../../../components/general/NativeImage";
import { db } from "../../../firebase";
import { Typography } from "@mui/material";
import PublicationBody from "../../../components/publications/PublicationBody";
import Link from "next/link";

const page = ({ articles, misc }) => {
    return (
        <Box>
            <Container maxWidth="xl" disableGutters>
                <Box>
                    <NativeImage
                        maxSize={3000}
                        image={{ url: misc.URLs[0], alt: "article" }}
                    />
                </Box>
            </Container>
            <Container>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Typography variant="caption">
                        {misc.fields[4].value}
                    </Typography>
                </Box>
                <Box sx={{ padding: "3rem 0" }}>
                    <Box
                        sx={{
                            display: "flex",
                            gap: ".25em",
                            justifyContent: "center",
                        }}
                    >
                        {misc.subCategories.map((subCategory, index) => {
                            return (
                                <Typography key={index} variant="caption">
                                    [{subCategory}]
                                </Typography>
                            );
                        })}
                    </Box>
                    <Typography
                        sx={{ textAlign: "center", margin: ".25em 0" }}
                        variant="h1"
                    >
                        {misc.fields[0].value}
                    </Typography>
                    <Typography sx={{ textAlign: "center" }}>by</Typography>
                    <Typography
                        sx={{
                            textAlign: "center",
                            margin: ".5em 0",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                        variant="h4"
                    >
                        <Link href={`/contributors/${misc.fields[1].value}`}>
                            {misc.fields[1].value}
                        </Link>
                    </Typography>
                    <PublicationBody
                        sidebarCategory="articles"
                        sidebarItems={articles}
                        story={misc}
                    />
                </Box>
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
        where("categories", "array-contains", "advice"),
        orderBy("dateUploaded", "desc"),
        limit(3)
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
