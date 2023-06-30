import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import UploadBlogPost from "../admin/UploadBlogPost";
import FirebaseEventUploadForm from "../admin/FirebaseEventUploadForm";
import FirebaseOutandaboutUploadForm from "../admin/FirebaseEventUploadForm";
import { eventConfig, outandaboutConfig, uploadConfig } from "../../siteInfo";
import UploadAdvice from "./UploadAdvice";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AdminAccordion() {
    //accordion state
    const [expanded, setExpanded] = React.useState("panel1");

    //admin state
    const [updateCounter, setUpdateCounter] = React.useState(0);

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                >
                    <Typography>
                        Upload a new Misc, Best Of, or Opinion Post
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <UploadBlogPost
                        config={uploadConfig}
                        folder="publications"
                        updateCounter={updateCounter}
                        setUpdateCounter={setUpdateCounter}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                >
                    <Typography>Upload an Advice Post</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <UploadAdvice
                        config={uploadConfig}
                        folder="publications"
                        updateCounter={updateCounter}
                        setUpdateCounter={setUpdateCounter}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    aria-controls="panel3d-content"
                    id="panel3d-header"
                >
                    <Typography>Upload new event</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FirebaseEventUploadForm
                        config={eventConfig}
                        folder="events"
                        updateCounter={updateCounter}
                        setUpdateCounter={setUpdateCounter}
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
            >
                <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel34-header"
                >
                    <Typography>Upload new Out and About</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FirebaseOutandaboutUploadForm
                        config={outandaboutConfig}
                        folder="outandabout"
                        updateCounter={updateCounter}
                        setUpdateCounter={setUpdateCounter}
                    />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
