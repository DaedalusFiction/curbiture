import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import MiscPreview from "../../../components/previews/MiscPreview";
import { db } from "../../../firebase";

const index = ({ misc }) => {
    return (
        <PageLayout name="Miscellany">
            <Grid className="section" container spacing={3}>
                {misc.map((misc, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <MiscPreview misc={misc} category="misc" />
                        </Grid>
                    );
                })}
            </Grid>
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const miscQuery = query(
        publicationsRef,
        where("categories", "array-contains", "misc"),
        orderBy("dateUploaded", "desc")
    );

    const miscSnapshot = await getDocs(miscQuery);

    let misc = [];
    miscSnapshot.docs.forEach((doc, index) => {
        misc = [...misc, doc.data()];
    });

    return {
        props: {
            misc,
        },
    };
};

export default index;
