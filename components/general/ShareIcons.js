import { IconButton, Paper, Tooltip, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack } from "@mui/system";
import Link from "next/link";
import { Reddit } from "@mui/icons-material";

const ShareIcons = ({ fontSize, color, direction }) => {
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
        <Paper
            sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                paddingTop: "1rem",
                paddingBottom: ".75rem",
            }}
        >
            <Stack direction={direction} spacing={1}>
                <Typography variant="h3" sx={{ fontSize: ".75rem" }}>
                    SHARE
                </Typography>
                <Link href="https://reddit.com">
                    <Tooltip title="reddit" placement="left">
                        <IconButton
                            aria-label="reddit"
                            id="share-reddit"
                            onClick={handleShare}
                        >
                            <Reddit color={color} sx={{ fontSize: fontSize }} />
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
        </Paper>
    );
};

export default ShareIcons;
