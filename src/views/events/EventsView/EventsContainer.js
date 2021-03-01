import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import EventCard from './EventCard';
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50
  },
  title: {
    fontWeight: '700',
    color: '#000',
    textAlign: 'center'
  },
  divider: {
    width: '10%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: '10px auto 25px auto'
  },
  subHeader: {
    fontWeight: 700,
    color: '#19426d',
    textAlign: 'center'
  },
  galleryBody: {
    marginTop: '15px',
    color: '#000'
  },
  flexImg: {
    display: 'block',
    flex: '0 0 auto',
    maxWidth: '75%',
    height: 'auto',
    width: '100%'
  }
}));

const EventsContainer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography
        component="p"
        variant="overline"
        color="primary"
        align="left"
        className={classes.subHeader}
      >
        CONNECT WITH US
      </Typography>
      <Typography variant="h1" align="left" className={classes.title}>
        UPCOMING EVENTS
      </Typography>
      <hr className={classes.divider} />
      <EventCard
        title="Battle Of The Branches Axe Throwing Tournament"
        date="Mar. 17, 2021"
        link="https://www.flipcause.com/secure/cause_pdetails/MTA5MDc0"
        imageLink={'/static/images/marketing-site/event-example.jpg'}
        desc={
          'Join us on St. Patty’s Day for our Battle Of The Branches Axe Throwing Tournament between the branches of the military! The entry fee is $20 per person - You have the option of purchasing your ticket online or in-person. All the proceeds goes towards helping Veterans make their adjustment. Time: March 17th from 6-8 pm. The four teams: Marines, Army, Navy & Coast Guard, Airforce Winning team and top player will win a prize! There will be pizza, drinks, music, and an opportunity to battle it out between branches!'
        }
      />
      <EventCard
        title="Axe Throwing For Veterans"
        date="Jan. 26, 2021"
        over={true}
        imageLink={'/static/images/marketing-site/event-2.jpg'}
        desc={
          'Join us at The Axe Haus on Tuesday, 1/26 from 5-8pm for some Axe Throwing and Pizza! Please RSVP here if you plan on coming. Tickets are FREE and we are asking everyone to bring beef jerky for the packages we are sending to our troops overseas.'
        }
      />

      <EventCard
        title="Veteran's Day Bike Ride"
        date="Nov. 14, 2020"
        over={true}
        imageLink={'/static/images/marketing-site/event-3.jpg'}
        desc={
          'The Long Walk Home, Inc is holding the Third Annual Veterans Day Bike Ride! Help us honor our veterans and enjoy a patriotic bike ride with members from our MilitaryToCivilianLife group. Choose from three different bike rides; 10 miles, 32 miles, and 55 miles. All have supported rest stops with refreshments. We will provide drink mixes, energy bars and other snacks at registration. Full meal steak BBQ will be available post-ride with takeaway as an option (To keep ourselves within our limit) This is a Veterans Day event on Saturday Nov 14, 2020 to honor our military. All are welcome. It is a beautiful beach with a scenic ride. Bring your friends and family along! We are also hosting a 50/50 raffle so stay tuned on how you can pre-purchase your raffle tickets.'
        }
      />
    </Container>
  );
};

export default EventsContainer;
