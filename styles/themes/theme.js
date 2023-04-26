import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            // main: "#341a05", //Bistre
            main: "#ff5a5f", //Bittersweet
            // main: "#084C61",
            off: "#DB504A",
        },
        secondary: {
            // main: "#FFFBC3",
            // main: "#f4f1bb", //lemon chiffon
            main: "#b7FFD8",
            // main: "#E3B505",
        },
        background: {
            default: "#fefefe",
            accent: "#ffeccd",
            dark: "#ffeccd",
        },
        custom: {
            dark: "#272D2D",
            // darkMuted: "#757575",
            darkMuted: "#4d4d4d",
            light: "#F6F8FF",
            lightMuted: "#cacaca",
        },
        text: {
            primary: "#272D2D",
            primaryMuted: "#757575",
            secondary: "#F6F8FF",
            secondaryMuted: "#cacaca",
        },
    },
});

theme = createTheme(theme, {
    border: `1px solid ${theme.palette.custom.dark}`,
    custom: {
        spacing: {
            paragraph: "2rem",
            quote: "3rem",
        },
    },
    typography: {
        h1: {
            // fontFamily: "Raleway",
            fontFamily: "EB Garamond",
            color: theme.palette.custom.primary,
            // color: theme.palette.primary.off,
            fontWeight: "400",
            lineHeight: ".85em",
            fontSize: "clamp(3.5rem, 5vw, 7rem)",
            letterSpacing: ".025em",
        },
        h2: {
            color: theme.palette.custom.primary,
            fontFamily: "EB Garamond",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
            fontSize: "clamp(3rem, 4vw, 10rem)",
            letterSpacing: ".025em",
        },
        h3: {
            color: theme.palette.custom.primary,
            fontFamily: "EB Garamond",
            letterSpacing: ".025em",
            fontWeight: "400",
            fontSize: "1rem",
            textTransform: "uppercase",
        },
        h4: {
            color: theme.palette.custom.primary,
            fontFamily: "EB Garamond",
            fontSize: "1.75rem",
            fontWeight: "400",
            lineHeight: "1.75rem",
            // color: darkTheme.palette.custom.dark,
        },
        h5: {
            // color: theme.palette.custom.primary,
            fontFamily: "EB Garamond",
            fontSize: "1rem",
            fontWeight: "600",
            // color: darkTheme.palette.custom.dark,
        },
        h6: {
            fontWeight: "500",
            fontSize: "1rem",
            fontFamily: "EB Garamond Italic",
            // fontFamily: "EB Garamond",
        },

        subtitle1: {
            fontFamily: "Raleway",
            fontWeight: "400",
            color: theme.palette.custom.primaryMuted,
            fontSize: "1.25rem",
        },
        subtitle2: {
            fontFamily: "Raleway",
            fontWeight: "400",
            fontSize: "1.25rem",
            color: theme.palette.custom.primaryMuted,
        },
        body1: {
            fontFamily: "Raleway",
            fontWeight: "400",
            fontSize: "1rem",
            // lineHeight: "1.25rem",
            color: theme.palette.custom.dark,
            // fontFamily: darkTheme.typography.darkTheme.main,
        },
        body2: {
            fontFamily: "EB Garamond Italic",
            fontSize: "1.25rem",
            // lineHeight: "1.5rem",
            color: theme.palette.custom.dark,
            // fontFamily: darkTheme.typography.darkTheme.decorative,
        },
        caption: {
            color: theme.palette.custom.darkMuted,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                    whiteSpace: "nowrap",
                    minWidth: "max-content",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.custom.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    fontSize: "1rem",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    color: theme.palette.secondary.main,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    // fontFamily: theme.typography.theme.accent,
                    listStyleType: "disc",
                    display: "list-item",
                    marginLeft: "2rem",
                },
            },
        },
    },
});

export default theme;
