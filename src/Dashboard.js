import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./App.css";

import { CTX } from "./Store";

import { useStyles } from "./Styles";

export default function Dashboard() {
  const classes = useStyles();

  // CTX Store
  const {allChats, sendChatAction, user} = React.useContext(CTX);
  const topics = Object.keys(allChats);
  
  // local state
  const [activeTopic, changeActiveTopic] = React.useState(topics[0])
  const [textValue, changeTextValue] = React.useState("");

  return (
    <div className="plank">
      <Paper className={classes.root}>
        <Typography variant="h3" component="h3">
          LetsChat
        </Typography>
        <Typography variant="h6" component="h6">
          {activeTopic}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {topics.map(topic => (
                <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatsWindow}>
            {allChats[activeTopic].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} className={classes.chip} />
                <Typography variant="body1" gutterBottom>
                  {chat.msg}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              sendChatAction({from: user, msg: textValue, topic: activeTopic});
              changeTextValue('');
            }}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
}
