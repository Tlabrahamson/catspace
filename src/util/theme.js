export default {
  palette: {
    primary: {
      light: "#333",
      main: "#222",
      dark: "#111",
      contrastText: "#fff"
    },
    secondary: {
      light: "#eee",
      main: "#4d4d4d",
      dark: "#212121",
      contrastText: "#fff"
    }
  },

  spreadThis: {
    typography: {
      useNextVariants: true
    },

    form: {
      textAlign: "center"
    },

    image: {
      margin: "20 auto 20 auto",
      maxWidth: 50
    },

    pageTitle: {
      margin: "20 auto 20 auto"
    },

    textField: {
      margin: "10 auto 10 auto"
    },

    button: {
      marginTop: 30,
      marginBottom: 30,
      position: "relative"
    },

    customError: {
      color: "#00FF00",
      fontSize: "0.8rem",
      marginTop: 10
    },

    progress: {
      position: "absolute"
    },
    invisibleSeperator: {
      border: "none",
      margin: 4
    },
    visibleSeperator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20
    },

    profile: {
      "& .image-wrapper": {
        textAlign: "center",
        position: "relative",
        "& button": {
          position: "absolute",
          top: "80%",
          left: "70%"
        }
      },
      "& .profile-image": {
        width: 200,
        height: 200,
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "50%"
      },
      "& .profile-details": {
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle"
        },
        "& a": {
          color: "#222"
        }
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0"
      },
      "& svg.button": {
        "&:hover": {
          cursor: "pointer"
        }
      }
    },
    buttons: {
      textAlign: "center",
      "& a": {
        margin: "20px 10px"
      }
    },
    paper: {
      padding: 20
    }
  }
};
