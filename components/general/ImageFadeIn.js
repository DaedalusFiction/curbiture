import { Box, Fade } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const ImageFadeIn = ({ src, alt, height, width }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <Fade in={loaded}>
            <Box>
                <Image
                    priority={false}
                    unoptimized
                    width={width}
                    height={height}
                    src={src}
                    alt={alt}
                    onLoadingComplete={() => {
                        setLoaded(true);
                    }}
                />
            </Box>
        </Fade>
    );
};

export default ImageFadeIn;
