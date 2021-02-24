import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import AccordionCard from './AccordionCard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: '50px 0',
    '& .MuiAccordionSummary-root.Mui-expanded': {
      backgroundColor: '#db252f',
      borderRadius: '4px 4px 0 0',
      color: '#fff'
    }
  },
  divider: {
    width: '5%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: 'auto',
    marginTop: '10px'
  },
  faqContainer: {
    marginTop: '25px'
  }
}));

const faqTitles = [
  'How can I become a mentor?',
  'How can I get connected with a mentor?',
  'What are the benefits of becoming a member?',
  'Where do I start if I want to volunteer?',
  'How can I volunteer from home?',
  'How can I become a Sponsor for The Long Walk Home?',
  'How can I host an event funded by The Long Walk Home?',
  'Who is Ron Zaleski?',
  'What is the story behind The Long Walk Home?',
  'Can I get a membership for free?',
  'Does TLWH offer free event tickets to Veterans & family?'
];

const Faq = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        component="p"
        variant="overline"
        color="primary"
        align="center"
        className={classes.subHeader}
      >
        RESOURCE CENTER
      </Typography>
      <Typography variant="h1" align="center" color="textPrimary">
        Frequently Asked Questions
      </Typography>
      <hr className={classes.divider} />
      <Grid container spacing={2} className={classes.faqContainer}>
        {faqTitles.map(question => (
          <AccordionCard accordionQuestion={question} />
        ))}
      </Grid>
    </div>
  );
};

export default Faq;
