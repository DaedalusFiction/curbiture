import { Fade } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useState } from "react";

const SizedImage = ({ src, height, width, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const handleLoaded = (naturalWidth, naturalHeight) => {
        setIsLoaded(true);
    };

    return (
        <Fade in={isLoaded}>
            <div>
                <Box
                    sx={{
                        position: "relative",
                        transition: "300ms",
                        width: width,
                        height: height,
                    }}
                >
                    <Image
                        src={src}
                        unoptimized
                        layout="fill"
                        objectFit="cover"
                        alt={alt}
                        onLoadingComplete={() => {
                            handleLoaded();
                        }}
                    />
                </Box>
            </div>
        </Fade>
    );
};

export default SizedImage;
