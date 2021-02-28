import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto'
  },
  contentRoot: {
    padding: 35
  },
  cardTitle: {
    textAlign: 'center',
    marginBottom: 15
  }
});

const BlogCard = props => {
  const classes = useStyles();
  const { title, description, link, imageLink } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          window.open(link, '_blank', 'noopener,noreferrer');
        }}
      >
        <CardMedia
          component="img"
          alt="placeholder"
          height="250"
          image={imageLink}
          title="Placeholder"
        />
        <CardContent className={classes.contentRoot}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.cardTitle}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
