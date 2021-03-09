import React from 'react';
import { Container, makeStyles, Grid, Button } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  summaryContainer: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'Roboto',
    padding: '10px 16px'
  }
}));

const AccordionCard = ({
  accordionQuestion = 'Question',
  accordionAnswer = 'Answer',
  ctaText = 'Learn More',
  ctaLink = 'mailto:thelongwalkhomeinc@gmail.com',
  ctaEnabled = true
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Accordion square={false}>
        <AccordionSummary
          className={classes.summaryContainer}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {accordionQuestion}
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body2">{accordionAnswer}</Typography>
            </Grid>
            {ctaEnabled ? (
              <Button
                variant="contained"
                size="medium"
                component="a"
                href={ctaLink}
                color="textPrimary"
                style={{ margin: '10px auto 0 auto' }}
              >
                {ctaText}
              </Button>
            ) : (
              ''
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default AccordionCard;
