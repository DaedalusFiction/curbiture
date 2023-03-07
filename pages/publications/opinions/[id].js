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
import React, { useState } from "react";
import PageLayout from "../../../components/layout/PageLayout";
import NativeImage from "../../../components/general/NativeImage";
import { db } from "../../../firebase";
import { Typography } from "@mui/material";
import PublicationBody from "../../../components/publications/PublicationBody";
import Link from "next/link";
import PublicationsHeader from "../../../components/publications/PublicationsHeader";

const Page = ({ articles, story }) => {
    const authorHref = "/contributors/" + story.fields[1].value;
    return (
        <Box className="section">
            <Container>
                <Box sx={{ padding: "3rem 0" }}>
                    <PublicationsHeader
                        publication={story}
                        authorHref={authorHref}
                    />
                    <PublicationBody
                        sidebarCategory="Opinions"
                        sidebarItems={articles}
                        story={story}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export const getServerSideProps = async (context) => {
    const docSnap = await getDoc(doc(db, `publications/${context.params.id}`));
    let story = docSnap.data();

    const publicationsRef = collection(db, "publications");
    const articlesQuery = query(
        publicationsRef,
        where("categories", "array-contains", "misc"),
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
            story,
        },
    };
};

export default Page;
