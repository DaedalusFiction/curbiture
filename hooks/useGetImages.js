import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function useGetImages(updateCounter, folder) {
    const [images, setImages] = useState(null);

    useEffect(() => {
        async function getImages() {
            const q = query(
                //change this based on Firebase file structure
                collection(db, folder)
            );

            const docsSnap = await getDocs(q);
            let newImages = [];
            docsSnap.docs.forEach((doc, index) => {
                newImages = [...newImages, doc];
            });
            setImages(newImages);
        }
        if (folder) {
            getImages();
        }
    }, [updateCounter, folder]);
    return [images];
}

export default useGetImages;
