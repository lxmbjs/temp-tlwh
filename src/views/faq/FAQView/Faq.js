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
  {
    q: 'How can I become a mentor?',
    a:
      'The Long Walk Home’s mentorship program is open to all Veterans, Family Members, and Supporters. To apply to become a mentor please go to - Thelongwalkhome.org/mentorship'
  },
  {
    q: 'How can I get connected with a mentor?',
    a:
      'If you are looking for a mentor to help you make your adjustment to civilian life. If you would like to request a mentor please go to - Thelongwalkhome.org/mentorship'
  },
  {
    q: 'What are the benefits of becoming a member?',
    a:
      'All members get to choose where their donation goes, receive a certificate of appreciation, and 10% off all The Long Walk Home Merchandise and event tickets.'
  },
  {
    q: 'Where do I start if I want to volunteer?',
    a:
      'If you would like to become a volunteer either online or in-person please fill out an application here - Thelongwalkhome.com/volunteering'
  },
  {
    q: 'How can I become a Sponsor for The Long Walk Home?',
    a:
      'If you would like to learn more about sponsorship opportunities for The Long Walk Home please go to - Thelongwalkhome.org/contact and fill out your business information.'
  },
  {
    q: 'How can I host an event funded by The Long Walk Home?',
    a:
      'If you would like to host an event with The Long Walk Home go to - Thelongwalkhome.org/events and click “Host An Event” button. Once you fill out the form a representative will be in contact with you within 48 business hours.'
  },
  {
    q: 'Who is Ron Zaleski?',
    a:
      'Ron Zaleski is the founder of The Long Walk Home. He walked the appalachian trail barefoot and across the country to spread awareness for the 22 Veterans that commit suicide every day. Learn more about his story at thelongwalkhome.org/ronzaleski'
  },
  {
    q: 'Can I get a membership for free?',
    a:
      'If you are a Veteran and would like to gain membership access or tickets to our online or in-person events for free please email info@thelongwalkhome with your DD-214.'
  }
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
          <AccordionCard
            accordionQuestion={question.q}
            accordionAnswer={question.a}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Faq;
