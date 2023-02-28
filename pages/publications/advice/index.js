import { Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import AdvicePreview from "../../../components/previews/AdvicePreview";
import { db } from "../../../firebase";

const index = ({ advice }) => {
    return (
        <PageLayout name="Damn Good Advice">
            <Container maxWidth="md">
                <Grid className="section" container>
                    {advice.map((advice, index) => {
                        return (
                            <Grid key={index} item xs={12}>
                                <AdvicePreview
                                    item={advice}
                                    category="advice"
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </PageLayout>
    );
};

export const getStaticProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const adviceQuery = query(
        publicationsRef,
        where("categories", "array-contains", "advice"),
        orderBy("dateUploaded", "desc")
    );

    const adviceSnapshot = await getDocs(adviceQuery);

    let advice = [];
    adviceSnapshot.docs.forEach((doc, index) => {
        advice = [...advice, doc.data()];
    });

    return {
        props: {
            advice,
        },
    };
};

export default index;
