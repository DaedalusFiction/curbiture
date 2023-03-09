import { Grid } from "@mui/material";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import BestofPreview from "../../../components/previews/BestofPreview";
import { db } from "../../../firebase";

const index = ({ bestof }) => {
    return (
        <PageLayout name="Best of the &rsquo;Ville">
            <Grid className="section" container spacing={3}>
                {bestof.map((bestof, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <BestofPreview item={bestof} category="bestof" />
                        </Grid>
                    );
                })}
            </Grid>
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const bestofQuery = query(
        publicationsRef,
        where("categories", "array-contains", "bestof"),
        orderBy("dateUploaded", "desc")
    );

    const bestofSnapshot = await getDocs(bestofQuery);

    let bestof = [];
    bestofSnapshot.docs.forEach((doc, index) => {
        bestof = [...bestof, doc.data()];
    });

    return {
        props: {
            bestof,
        },
    };
};

export default index;
