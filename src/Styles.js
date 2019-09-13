import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
      margin: "50px",
      padding: theme.spacing(3, 2),
      backgroundColor: "rgba(162, 222, 208, .8)",
    },
    flex: {
      display: "flex",
      alignItems: "center"
    },
    topicsWindow: {
      width: "30%",
      height: "300px",
      borderRight: "1px solid grey"
    },
    chatsWindow: {
      width: "70%",
      height: "300px",
      padding: "20px"
    },
    chatBox: {
      width: "85%"
    },
    button: {
      width: "15%"
    }
  }));
  