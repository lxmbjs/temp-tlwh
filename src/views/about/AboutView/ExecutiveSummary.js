import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    paddingTop: 128,
    paddingBottom: 128
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  divider: {
    width: '5%',
    backgroundColor: '#db252f',
    height: '3px',
    border: 'none',
    margin: 'auto',
    marginTop: '10px'
  },
  subHeader: {
    fontWeight: 700
  },
  description: {
    marginTop: 25
  }
}));

const ExecutiveSummary = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="md">
        <Typography
          component="p"
          variant="overline"
          color="primary"
          align="center"
          className={classes.subHeader}
        >
          FROM OUR FOUNDER
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          EXECUTIVE SUMMARY
        </Typography>
        <hr className={classes.divider} />
        <Typography variant="body2" className={classes.description}>
          ​This Plan is about gratitude, compassion, reality, and responsible
          re-entry into mainstream society for our servicemen and women. This
          Plan is not about ending war, or even debating it. It simply seeks to
          provide a responsible transition period prior to discharge all
          military personnel that will assess & address their physical, and
          mental, psychological, social and career status . . . and provide them
          with an opportunity to vent, decompress, and re-orient with the tools,
          training, resources and support necessary for successful re-entry into
          society.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          On the one hand, the men & women put in harms way to protect our
          freedom simply deserve our gratitude in a meaningful way. On the other
          hand, the lack of meaningful Transition and Tracking programs has
          resulted in difficult re-entry and grossly higher situations for the
          veteran population vs. societal norms relative to: drug & alcohol
          abuse, un-employment, suicide, dysfunctional household, homeless,
          domestic violence, broken homes, foreclosures, bankruptcy, divorce,
          increased dependency on welfare, and social service.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          The cost of dealing with these conditions far outweighs the cost of a
          re-entry program, not just in dollars, but in human terms.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          The cause, justification, and need for war is an endless debate. The
          toll on its combatants is much more discernable. The fact is that
          those who serve in times of war often benefit less (if at all) than
          those they protect.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          Sound military strategy seeks to give our troops a fighting chance to
          win on the battlefield. This Plan seeks to give them a chance to win
          as they return home to the freedoms they fought to preserve.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          We ask them to do the unspeakable and then, when they return home, we
          don’t speak about it. Collateral damage is a Term of War that
          describes damage that we did not intend, but was unavoidable to
          achieve certain targets. Our returning men and women must not be
          treated as collateral damage. Their re-entry must be fortified with
          the same armament and strategy for success that they entered the
          battle with.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          Post Traumatic Stress Disorder (PTSD) is a relatively new terminology
          for the after-effects of war. However, its symptoms and affects date
          back to the American Civil War (“irritable heart”), through WWI
          (“shell shock”) and WWII (“battle fatigue”), to what is now known as
          PTSD. For more than a century of documented war, too many soldiers and
          their families and friends have suffered in silence, shame, and
          isolation.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          We must break the bonds and damaging effects of quilt, fear and
          isolation. For far too long, we have known better . . . Now we must do
          better.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          PTSD has taken too far a greater toll on these men and women, their
          families and society. Men & women who fight for our freedom must be
          given a fighting chance to enjoy the benefits of that freedom upon
          their return home.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          This Plan was conceived by Ron Zaleski as a tribute to fallen buddies
          from the Vietnam War effort. In order to call attention to the need
          for effective debriefing and counseling program for Vets, Ron has gone
          shoe-less since 1972, and has walked the Appalachian Trail barefoot in
          2006 and 7 to create awareness then barefoot across America in 2010
          and 11 carrying a sandwich sign stating 18 Vets a day commit suicide
          getting signatures on a petition to institute mandatory conseling for
          all military personnel prior to discharge.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          This is a one man’s acknowledgement that if he does nothing, he is
          part of the problem. It is a serious attempt to call attention to the
          need for a serious response to a serious issue related to our
          returning servicemen and women.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          This Plan seeks to gain the support and resources to mandate a two
          week program of debriefing, counseling, and training to prepare our
          returning troops for successful re-entry into the society that they
          fought to defend.
        </Typography>
        <Typography variant="body2" className={classes.description}>
          This is a Business Plan to address an important american business
          issue, PTSD, that for too long has either been ignored or dealt with
          in a fragmented manner . . . an issue that affects the very fabric of
          our society in both human and economic terms.
        </Typography>
      </Container>
    </div>
  );
};

ExecutiveSummary.propTypes = {
  className: PropTypes.string
};

export default ExecutiveSummary;
