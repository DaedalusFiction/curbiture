import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import OpinionPreview from "../../../components/previews/opinionPreview";
import { db } from "../../../firebase";

const index = ({ opinion }) => {
    return (
        <PageLayout name="Opinions and Editorials">
            <Grid className="section" container spacing={3}>
                {opinion.map((item, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <OpinionPreview opinion={item} category="opinion" />
                        </Grid>
                    );
                })}
            </Grid>
        </PageLayout>
    );
};

export const getStaticProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const opinionQuery = query(
        publicationsRef,
        where("categories", "array-contains", "opinions"),
        orderBy("dateUploaded", "desc")
    );

    const opinionSnapshot = await getDocs(opinionQuery);

    let opinion = [];
    opinionSnapshot.docs.forEach((doc, index) => {
        opinion = [...opinion, doc.data()];
    });

    return {
        props: {
            opinion,
        },
    };
};

export default index;
