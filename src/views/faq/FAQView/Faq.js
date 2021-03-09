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
      'The Long Walk Home’s mentorship program is open to all Veterans, Family Members, and Supporters. To apply to become a mentor please click below.'
  },
  {
    q: 'How can I get connected with a mentor?',
    a:
      'If you are looking for a mentor to help you make your adjustment to civilian life. If you would like to request a mentor please call Ron Zaleski at (305) 399-5354 and he will connect you with a mentor.',
    ctaEnabled: false
  },
  {
    q: 'What are the benefits of becoming a member?',
    a:
      'All members get to choose where their donation goes, receive a certificate of appreciation, and 10% off all The Long Walk Home Merchandise and event tickets.',
    ctaEnabled: false
  },
  {
    q: 'Where do I start if I want to volunteer?',
    a:
      'If you would like to become a volunteer either online or in-person please call AnnMarie at (973) 970-5009 or you can email AnnMarie@thelongwalkhome.org.',
    ctaEnabled: false
  },
  {
    q: 'How can I become a Sponsor for The Long Walk Home?',
    a:
      'If you would like to learn more about sponsorship opportunities for The Long Walk Home please click below.',
    ctaLink: '/sponsor-us'
  },
  {
    q: 'How can I host an event funded by The Long Walk Home?',
    a:
      'If you would like to host an event with The Long Walk Home please click below and fill out the form below.',
    ctaText: 'Host An Event',
    ctaLink:
      'https://thelongwalkhome.us10.list-manage.com/subscribe?u=517ce98bac982fd4a794be0be&id=67e98fcb64'
  },
  {
    q: 'Who is Ron Zaleski?',
    a:
      'Ron Zaleski is the founder of The Long Walk Home. He walked the appalachian trail barefoot and across the country to spread awareness for the 22 Veterans that commit suicide every day. Learn more about his story by clicking below.',
    ctaLink: '/rons-story'
  },
  {
    q: 'Can I get a membership for free?',
    a:
      'If you are a Veteran and would like to gain membership access or tickets to our online or in-person events for free please email info@thelongwalkhome with your DD-214.',
    ctaEnabled: false
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
            ctaText={question.ctaText}
            ctaEnabled={question.ctaEnabled}
            ctaLink={question.ctaLink}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Faq;
