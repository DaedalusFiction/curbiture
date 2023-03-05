const siteName = "Curbiture";

const navbar = {
    buttonOne: {
        text: "Subscribe",
        href: "/subscribe",
        variant: "outlined",
    },
};

const header = {
    buttonOne: {
        text: "Contact",
        href: "/contact",
        variant: "outlined",
    },
};

const uploadCategories = [
    {
        name: "misc",
        href: "/publications/misc",
        image: {
            url: "/images/placeholder.webp",
            alt: "alt upload image text",
        },
        subCategories: [
            {
                name: "downtown",
                href: "/publications/misc/downtown",
                image: {
                    url: "/images/placeholder.webp",
                    alt: "alt upload image text",
                },
            },
        ],
    },
    {
        name: "advice",
        href: "/publications/advice",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "relationships",
                href: "/publications/advice/relationships",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "career",
                href: "/publications/advice/career",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "writing",
                href: "/publications/advice/writing",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "opinions",
        href: "/publications/opinions",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "editorial",
                href: "/publications/opinions/editorials",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "letter",
                href: "/publications/opinions/letters",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
    {
        name: "bestof",
        href: "/publications/bestof",
        image: { url: "/images/placeholder.webp", alt: "alt text" },
        subCategories: [
            {
                name: "for sale",
                href: "/publications/bestof/for sale",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
            {
                name: "help wanted",
                href: "/publications/bestof/help wanted",
                image: { url: "/images/placeholder.webp", alt: "alt text" },
            },
        ],
    },
];

const uploadConfig = {
    categories: [],
    subCategories: [],
    fields: [
        { name: "Title", type: "text", value: "" },
        { name: "Author", type: "text", value: "" },
        {
            name: "Hook",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        { name: "Published", type: "text", value: "" },
        { name: "Artist", type: "text", value: "" },
    ],
};

const subscribeConfig = {
    website: "CURBITURE",
    category: "contact",
    fields: [{ name: "Email", type: "text", value: "" }],
};
const contactConfig = {
    website: "CURBITURE",
    category: "contact",
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "Comment", type: "text", value: "", multiline: true, rows: 4 },
    ],
};

// 7. About

// 7a. About

const aboutContent = {
    image: {
        url: "/images/about2.webp",
        alt: "Prize Bull, by H. Call (1876)",
        // alt: "Moses Striking the Rock, by Joachim Anthonisz Wetwael",
    },
    name: "OUR ROOTS",
    buttons: [
        {
            text: "Button Text",
            href: "/about/masthead",
            variant: "contained",
        },
        {
            text: "Button Text",
            href: "/about/missionstatement",
            variant: "contained",
        },
    ],
    content: "The Insomniad is a literary journal founded in 2022.",
};

const leadProfile = {
    image: {
        url: "/images/profile1.webp",
        alt: "Self-Portrait, by Henri Fantin-Latour",
    },
    name: "Owen Cash",
    content: "Owen likes to PARTY!!",
};

const secondaryProfiles = [
    {
        image: {
            url: "/images/buffBec.webp",
            alt: "Buff Bec",
        },
        name: "Buff Bec",
        content: "Bruce is the greatest.",
    },
    {
        image: { url: "/images/davidBio.webp", alt: "Editor Owen Cash" },
        name: "Owen Cash",
        content: "Owen likes to PARTY!",
    },
    {
        image: {
            url: "/images/jamesBio.webp",
            alt: "Kithis the Salient",
        },
        name: "Kithis the Salient",
        content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eaque nihil ipsum molestias ab quod aliquid consectetur rerum facilis ratione dignissimos fugiat, enim doloribus assumenda.\n\nLaboriosam voluptatem laudantium sequi iste nihil cupiditate sed, corporis eum natus excepturi, inventore nulla unde! Veritatis nihil culpa neque. Dolore ipsa sed asperiores voluptatibus nam modi. Dolorem hic incidunt quae tenetur quaerat animi, unde aspernatur.",
    },
];

// 7b. Studio

const studioContent = {
    imageOne: {
        url: "/images/missionStatement.webp",
        alt: "A Young Bull, by John Woodhouse Audubon (1849)",
        // alt: "Venus Adorned by the Graces, by Annibale Carracci",
    },
    imageTwo: { url: "/images/placeholder.webp", alt: "alt placeholder text" },
    imageThree: {
        url: "/images/placeholder.webp",
        alt: "alt placeholder text",
    },
    header: "This is what we believe",
    content: "This is where we will talk about our philosophy of fiction etc.",
};

// 7c. Work

// 8. Social Media

// 9. Process
// 10. Contact

const contributorConfig = {
    fields: [
        { name: "name", type: "text", value: "" },
        {
            name: "bio",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};

const textSubmissionsConfig = {
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "Genre", type: "text", value: "" },
        { name: "Previously Published", type: "text", value: "" },

        {
            name: "Comment",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        {
            name: "Bio",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};
const imageSubmissionsConfig = {
    fields: [
        { name: "Name", type: "text", value: "" },
        { name: "Email", type: "text", value: "" },
        { name: "Genre", type: "text", value: "" },
        { name: "Previously Published", type: "text", value: "" },
        {
            name: "Comment",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
        {
            name: "Bio",
            type: "text",
            value: "",
            multiline: true,
            rows: 4,
        },
    ],
    timeUploaded: new Date(),
};

const pages = [
    {
        name: "misc",
        href: "/publications/misc",
        subPages: [],
    },
    {
        name: "Best Of",
        href: "/publications/bestof",
        subPages: [],
    },
    {
        name: "opinions",
        href: "/publications/opinions",
        subPages: [],
    },
    {
        name: "advice",
        href: "/publications/advice",
        subPages: [],
    },
    // {
    //     name: "contributors",
    //     href: "/contributors",
    //     subPages: [],
    // },
    {
        name: "about",
        href: "/about",
        subPages: [
            { name: "Masthead", href: "/about/masthead" },
            {
                name: "Mission Statement",
                href: "/about/missionstatement",
            },
        ],
    },
    { name: "submissions", href: "/submissions", subPages: [] },
];

export {
    siteName,
    pages,
    navbar,
    header,
    uploadCategories,
    uploadConfig,
    subscribeConfig,
    contributorConfig,
    textSubmissionsConfig,
    imageSubmissionsConfig,
    contactConfig,
    aboutContent,
    leadProfile,
    secondaryProfiles,
    studioContent,
};
