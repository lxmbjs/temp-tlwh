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

const BlogCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="placeholder"
          height="250"
          image="/static/images/marketing-site/blog-card-image.png"
          title="Placeholder"
        />
        <CardContent className={classes.contentRoot}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.cardTitle}
          >
            Lorem Ipsum
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
