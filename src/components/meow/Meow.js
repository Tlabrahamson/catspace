import React, { Component } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import DeleteMeow from "./DeleteMeow";
import MeowDialog from "./MeowDialog";
import LikeButton from "./LikeButton";
//MUI stuff
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
//Redux
import { connect } from "react-redux";
//Icons
import ChatIcon from "@material-ui/icons/Chat";

const styles = {
  card: {
    position: "relative",
    display: "flex",
    marginBottom: 20,
    marginRight: 20
  },
  image: {
    minWidth: 200,
    maxWidth: "100%"
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};

class Meow extends Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      meow: {
        body,
        createdAt,
        userImage,
        userHandle,
        meowId,
        likeCount,
        commentCount
      },
      user: {
        authenticated,
        credentials: { handle }
      }
    } = this.props;
    const deleteButton =
      authenticated && userHandle === handle ? (
        <DeleteMeow meowId={meowId} />
      ) : null;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={userImage}
          title="Profile image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          {deleteButton}
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1">{body}</Typography>
          <LikeButton meowId={meowId} />
          <span>{likeCount} Likes</span>
          <MyButton tip="Comments">
            <ChatIcon color="primary" />
          </MyButton>
          <span>{commentCount} Comments</span>
          <MeowDialog
            meowId={meowId}
            userHandle={userHandle}
            openDialog={this.props.openDialog}
          />
        </CardContent>
      </Card>
    );
  }
}

Meow.propTypes = {
  user: PropTypes.object.isRequired,
  meow: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  openDialog: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(withStyles(styles)(Meow));
