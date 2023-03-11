import { IconButton, Tooltip, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack } from "@mui/system";
import Link from "next/link";

const ShareIcons = ({ fontSize, color }) => {
    const handleShare = (e) => {
        e.preventDefault();

        const ahref = window.location.href;
        const encodedAhref = encodeURIComponent(ahref);
        var link;
        switch (e.currentTarget.id) {
            case "share-facebook":
                link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`;
                open(link);
                break;
            case "share-twitter":
                link = `https://twitter.com/intent/tweet?url=${encodedAhref}`;
                open(link);
                break;
            case "share-reddit":
                link =
                    link = `https://www.reddit.com/submit?url=${encodedAhref}`;
                open(link);
                break;
            default:
                break;
        }
    };

    const open = (socialLink) => {
        window.open(socialLink, "_blank");
    };

    return (
        <Stack direction="column" spacing={1}>
            <Typography variant="h3" sx={{ fontSize: ".75rem" }}>
                SHARE
            </Typography>
            <Link href="https://instagram.com">
                <Tooltip title="instagram" placement="left">
                    <IconButton
                        aria-label="instagram"
                        id="share-instagram"
                        onClick={handleShare}
                    >
                        <InstagramIcon
                            color={color}
                            sx={{ fontSize: fontSize }}
                        />
                    </IconButton>
                </Tooltip>
            </Link>
            <Link href="https://www.facebook.com/CurbitureCharlottesville/">
                <Tooltip title="facebook" placement="left">
                    <IconButton
                        aria-label="facebook"
                        id="share-facebook"
                        onClick={handleShare}
                    >
                        <FacebookIcon
                            color={color}
                            sx={{ fontSize: fontSize }}
                        />
                    </IconButton>
                </Tooltip>
            </Link>
            <Link href="https://twitter.com/curbiturecville">
                <Tooltip title="twitter" placement="left">
                    <IconButton
                        aria-label="twitter"
                        id="share-twitter"
                        onClick={handleShare}
                    >
                        <TwitterIcon
                            color={color}
                            sx={{ fontSize: fontSize }}
                        />
                    </IconButton>
                </Tooltip>
            </Link>
        </Stack>
    );
};

export default ShareIcons;
