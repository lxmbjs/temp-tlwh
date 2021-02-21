import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Link,
  SvgIcon,
  Tooltip,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Users as UsersIcon } from 'react-feather';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles(theme => ({
  root: {},
  image: {
    height: 265,
    backgroundColor: theme.palette.background.dark
  },
  likedButton: {
    color: colors.red[600]
  },
  membersIcon: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
  }
}));

const ProjectCard = ({ className, project, ...rest }) => {
  const classes = useStyles();
  const [isLiked, setLiked] = useState(project.isLiked);
  const [likesCount, setLikesCount] = useState(project.likesCount);

  const handleLike = () => {
    setLiked(true);
    setLikesCount(prevLikes => prevLikes + 1);
  };

  const handleUnlike = () => {
    setLiked(false);
    setLikesCount(prevLikes => prevLikes - 1);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box p={3}>
        <CardMedia className={classes.image} image={project.image} />
        <Box display="flex" alignItems="center" mt={2}>
          <Box>
            <Link
              color="textPrimary"
              component={RouterLink}
              to="#"
              variant="h5"
            >
              {project.title}
            </Link>
            <Typography variant="body2" color="textSecondary">
              Army Division
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box pb={2} px={3}>
        <Typography color="textSecondary" variant="body2">
          Looking to help people get back on there feet. I served for x amount
          of years, and love helping my fellow brothers.
        </Typography>
      </Box>
      <Box py={2} px={3}>
        <Grid alignItems="center" container justify="space-between" spacing={3}>
          <Grid item>
            <Typography variant="h5" color="textPrimary">
              444
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Challenges Reviewed
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="textPrimary">
              {project.location}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Location
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box py={2} pl={2} pr={3} display="flex" alignItems="center">
        <SvgIcon
          fontSize="small"
          color="action"
          className={classes.membersIcon}
        >
          <UsersIcon />
        </SvgIcon>
        <Typography variant="subtitle2" color="textSecondary">
          {project.membersCount}
        </Typography>
        <Box flexGrow={1} />
        {isLiked ? (
          <Tooltip title="Unlike">
            <IconButton className={classes.likedButton} onClick={handleUnlike}>
              <FavoriteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Like">
            <IconButton onClick={handleLike}>
              <FavoriteBorderIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        <Typography variant="subtitle2" color="textSecondary">
          {likesCount}
        </Typography>
      </Box>
    </Card>
  );
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default ProjectCard;
