import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = "https://curbiture.com/publications";

function generateSiteMap(publications) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://curbiture.com</loc>
     </url>
     <url>
       <loc>https://curbiture.com/submissions</loc>
     </url>
     <url>
       <loc>https://curbiture.com/publications</loc>
     </url>
     <url>
       <loc>https://curbiture.com/contributors</loc>
     </url>
     <url>
       <loc>https://curbiture.com/bestof</loc>
     </url>
     <url>
       <loc>https://curbiture.com/contact</loc>
     </url>
     <url>
       <loc>https://curbiture.com/subscribe</loc>
     </url>
     <url>
       <loc>https://curbiture.com/advice</loc>
     </url>
     <url>
       <loc>https://curbiture.com/misc</loc>
     </url>
     <url>
       <loc>https://curbiture.com/opinions</loc>
     </url>
     <url>
       <loc>https://curbiture.com/about</loc>
     </url>
     <url>
       <loc>https://curbiture.com/about/masthead</loc>
     </url>
     <url>
       <loc>https://curbiture.com/about/missionstatement</loc>
     </url>
     ${publications
         .map(({ fields, categories }) => {
             return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${categories[0]}/${fields[0].value}`}</loc>
       </url>
     `;
         })
         .join("")}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    const publicationsRef = collection(db, "publications");

    const querySnapshot = await getDocs(publicationsRef);

    let publications = [];
    querySnapshot.docs.forEach((doc, index) => {
        publications = [...publications, doc.data()];
    });

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(publications);

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
