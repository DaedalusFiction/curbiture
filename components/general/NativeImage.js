import React, { useState } from "react";
import Image from "next/image";
import { Fade } from "@mui/material";

const NativeImage = ({ src, maxSize, alt }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9
    const [loaded, setLoaded] = useState(false);
    const handleLoadComplete = (naturalWidth, naturalHeight) => {
        setRatio(naturalWidth / naturalHeight);
        setLoaded(true);
    };
    return (
        <Fade in={loaded}>
            <div>
                <Image
                    src={src}
                    //has to be unoptimized to work with firebase storage, apparently.
                    unoptimized
                    width={maxSize}
                    height={maxSize / ratio}
                    onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                        handleLoadComplete(naturalWidth, naturalHeight)
                    }
                    objectFit="cover"
                    alt={alt}
                />
            </div>
        </Fade>
    );
};

export default NativeImage;
