import React from 'react';
import { Container, makeStyles, Grid } from '@material-ui/core';
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
  accordionAnswer = 'Answer'
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
          <Typography variant="body2">{accordionAnswer}</Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default AccordionCard;
