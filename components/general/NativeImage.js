import React, { useState } from "react";
import Image from "next/image";

const NativeImage = ({ image, maxSize }) => {
    const [ratio, setRatio] = useState(1 / 1); // default to 16:9

    return (
        <Image
            src={image.url}
            //has to be unoptimized to work with firebase storage, apparently.
            unoptimized
            width={maxSize}
            height={maxSize / ratio}
            onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                setRatio(naturalWidth / naturalHeight)
            }
            objectFit="cover"
            alt={image.alt}
        />
    );
};

export default NativeImage;
