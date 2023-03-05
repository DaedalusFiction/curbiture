import { Grid } from "@mui/material";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React from "react";
import PageLayout from "../../../components/layout/PageLayout";
import CraigslistPreview from "../../../components/previews/CragislistPreview";
import { db } from "../../../firebase";

const index = ({ craigslist }) => {
    return (
        <PageLayout name="Best of Craigslist">
            <Grid className="section" container spacing={3}>
                {craigslist.map((craigslist, index) => {
                    return (
                        <Grid key={index} item xs={12} sm={6} md={3}>
                            <CraigslistPreview
                                item={craigslist}
                                category="craigslist"
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </PageLayout>
    );
};

export const getServerSideProps = async (context) => {
    const publicationsRef = collection(db, "publications");
    const craigslistQuery = query(
        publicationsRef,
        where("categories", "array-contains", "craigslist"),
        orderBy("dateUploaded", "desc")
    );

    const craigslistSnapshot = await getDocs(craigslistQuery);

    let craigslist = [];
    craigslistSnapshot.docs.forEach((doc, index) => {
        craigslist = [...craigslist, doc.data()];
    });

    return {
        props: {
            craigslist,
        },
    };
};

export default index;
