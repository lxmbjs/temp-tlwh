import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Markdown from 'react-markdown/with-html';
import {
  Box,
  Chip,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  markdown: {
    fontFamily: theme.typography.fontFamily,
    '& p': {
      marginBottom: theme.spacing(2)
    }
  }
}));

const Brief = ({ className, project, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2" color="textSecondary">
              Current Step:
            </Typography>
            <Typography variant="h6" color="textPrimary">
              {project.title}
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="subtitle2" color="textSecondary">
            Prompt
          </Typography>
          <Markdown source={project.description} className={classes.markdown} />
        </Box>
      </CardContent>
    </Card>
  );
};

Brief.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default Brief;
