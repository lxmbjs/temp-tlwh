import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 50,
    paddingBottom: 50
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
  },
  byLawsTitle: {
    color: '#db252f',
    fontWeight: '700',
    fontSize: '24px',
    textAlign: 'center',
    margin: '15px 0',
    fontFamily: 'Roboto'
  },
  byLawsParagraph: {
    fontFamily: 'Roboto'
  }
}));

const ByLaws = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="overline"
          color="primary"
          align="center"
          className={classes.subHeader}
        >
          WHAT WE LIVE BY
        </Typography>
        <Typography variant="h1" align="center" color="textPrimary">
          OUR BY LAWS
        </Typography>
        <hr className={classes.divider} />
        <h2 className={classes.byLawsTitle}>
          The Long Walk Home, Inc.&nbsp; Bylaws For A&nbsp; Nonprofit
          Corporation
        </h2>
        <div className={classes.byLawsParagraph}>
          OUR BY LAWS ARE IN PROCESS OF GETTING REVISED AND UPDATED. Current
          bylaws will be posted soon.
          <br />
          The Mission:&nbsp; To help Veterans make the transition from military
          life to civilian life.
          <br />
          <br />
          Vision:&nbsp; The Long Walk Home, Inc will show Veterans on a daily
          basis that we care through workshops and free gyms &ndash;both
          programs proven to help heal PTSD andTBI.&nbsp; Workshops open to the
          public, giving the community as well as the Veterans the tools to
          assist in this process of transformation; which will be recorded and
          available on the internet for those unable or reluctant to
          attend.&nbsp; Free gyms across the country with safe, supportive
          environments will be made available for Veterans.
          <br />
          <br />
          Belief System:&nbsp; We believe it is up to all of us, not just the
          Veterans and their families, to aid in the process of integrating into
          society.&nbsp; It is our duty to assist our soldiers in their next
          greatest mission; to protect and serve their family and community.
          <br />
          <br />
          1. Offices
          <br />
          &nbsp;1..1 Principal Office. The principal offices of, The Long Walk
          Home, Inc. (TLWH/the Corporation") shall be at 9645 White Cliff Place,
          Highlands Ranch&nbsp; CO&nbsp; 80129 and/or 97671 Overseas Hwy Key
          Largo FL&nbsp; 33037.&nbsp; &nbsp;The Corporation may keep and
          maintain such other offices, either within or outside the State of
          Colorado, as the board of directors (the "Board of Directors") may
          designate or as the business of the Corporation may require from time
          to time.
          <br />
          <br />
          l. 2 Registered Office. The Corporation shall have and continuously
          maintain in the State of Colorado a registered office and a registered
          agent whose business office is identical with such registered office.
          The initial registered office and the initial registered agent are
          specified in the articles of incorporation (the "Articles"). The
          Corporation may change its registered office or change its registered
          agent, or both, upon filing a statement in the office of the Colorado
          Secretary of State, or by otherwise complying with the Colorado
          Revised Nonprofit Corporation Act, as amended (the "Act"), as it may
          apply from time to time.
          <br />
          <br />
          2. Members and Shareholders&nbsp; The Corporation shall have no
          members or shareholders.
          <br />
          <br />
          3. Board of Directors&nbsp; The property, affairs, and business of the
          Corporation shall be managed and conducted by a Board of Directors.
          The members of the Board of Directors are referred to as Director or
          Directors as the context might require. The Board of Directors are
          also referred to herein as the Board.
          <br />
          <br />
          3.1 Number,&nbsp; Qualification&nbsp; Term: Tenure. The Directors of
          the Corporation shall be natural persons at least eighteen years of
          age or older. The initial Board members shall be appointed by the
          incorporator and shall be four (4) and no more than nine (9) unless
          and until changed by resolution of the Board of Directors. Directors
          shall be elected by a majority of the Board of Directors for life
          after first submitting in writing why they want this position. A
          Director can only be removed because of health reasons, resignation or
          a majority vote by the Board of Directors.
          <br />
          <br />
          3.2 Regular Meetings. Regular meetings of the Board shall be held
          annually on such date, at such time, and at such place as the Board
          may by resolution determine. Unless otherwise provided by the Act or
          the Articles, a regular meeting of the Board may be held without
          notice of the date, time, place or purpose of such meetings if all
          Directors consent in writing. The Board may make such rules and
          regulations covering its meetings as it may deem necessary.&nbsp;
          <br />
          <br />
          3.3 Special Meetings. Special meetings of the Board may be called by
          or at the request of the president or any Director. Special meetings
          shall be held at such time and place, as may be designated by the
          authority calling such meeting; provided that no meeting shall be
          called outside the State of Colorado unless a majority of the Board
          has so authorized. Notice stating the place, day, and hour of every
          special meeting shall be given to each member of the Board by mailing
          such notice at least 2 days before the date fixed for the meeting.
          Unless otherwise provided by the Act or the Articles, the notice of
          such special meeting need not describe the purpose of the meeting.
          <br />
          <br />
          &nbsp;3.4 Quorum: Voting. A quorum at all meetings of the Board shall
          consist of a majority of the Directors then serving. Fewer than a
          quorum of Directors may adjourn a meeting from time to time without
          further notice until a quorum is secured. Except as otherwise provided
          by the Act, the Articles, or these Bylaws, the act of a majority of
          the Directors present at a meeting at which a quorum is present shall
          be the act of the Board. Voting by proxy is not permitted. A Director
          who is present at a meeting of the Board is deemed to have assented to
          all action taken unless: (i) the Director objects at the beginning of
          the meeting, or promptly upon arrival, to holding the meeting or
          transacting business at the meeting and does not thereafter vote for
          or assent to any action taken; (ii) the Director contemporaneously
          requests that the Director's dissent or abstention as to any specific
          action taken be entered in the minutes of the meeting; or (iii) the
          Director causes written notice of the Director's dissent or abstention
          as to any specific action to be received by the presiding Officer of
          the meeting before adjournment or by the Corporation promptly after
          adjournment. The right of dissent or abstention is not available to a
          Director who votes in favor of the action taken.
          <br />
          <br />
          &nbsp;3.5 Committees. 3.5.1 General. The President may designate from
          among the Directors, one or more committees, each of which shall have
          and may exercise such authority of the Board of Directors in the
          management of the Corporation as shall be delegated by the President.
          No such committee shall have the power or authority to authorize
          distributions; elect, appoint or remove any Director; amend, restate,
          alter, or repeal the Articles; amend, alter, or repeal these or any
          other Bylaws of the Corporation; approve a sale, lease, exchange, or
          other disposition of all or substantially all of the property of the
          Corporation, with or without goodwill; or take any other action
          prohibited by the Act. The Board shall exercise discretionary
          authority on all matters not specifically covered by these Bylaws.
          <br />
          <br />
          &nbsp;3.6 Resignation. A Director may resign at any time by giving
          written notice of resignation to the Board. The resignation is
          effective when the notice is received by the Corporation unless the
          notice specifies a later effective date.
          <br />
          <br />
          &nbsp;3.7 Removal of a Director. A Director may be removed with or
          without cause by a two-thirds (2/3rds) vote of all of the Directors of
          the Corporation present at a special meeting of the Board called for
          that purpose (excluding the Director who is the subject of such
          removal).
          <br />
          <br />
          3.8 Action Without a Meeting. Any action required by law to be taken
          at a meeting of the Board or any committee thereof, or any other
          action which may be taken at a meeting of the Board, or any committee
          thereof, may be taken without a meeting if all members of the Board
          consent hereto in writing or by such other vote as provided in the
          Act. Any such writings may be received by electronically transmitted
          facsimile or other form of wire or wireless communication providing
          the Corporation with a complete copy of the document including a copy
          of the signature. Actions taken shall be effective when the last
          writing necessary to effect the action is received by the Corporation
          unless the writings set forth a different effective date. Any Director
          who has signed a writing may revoke it by a writing signed, dated and
          stating the prior vote is revoked. However, such writing must be
          received by the Corporation before the last writing necessary to
          effect the action is received. All such actions shall have the same
          effect as action taken at a meeting.
          <br />
          <br />
          3.9 Compensation. Directors will not be compensated for meetings and
          can only be compensated for services rendered if they are an officer
          of TLWH.&nbsp; Only members of the Board may be Officers of
          TLWH.&nbsp; Initial compensation will be equal to that of a Private in
          the U.S. Armed Forces and after 6 months they can request a review to
          get promoted up to equal the rank Chief Master Gunnery Sargent it may
          include the benefits as well, i.e. Housing allowance, food, travel,
          etc.
          <br />
          <br />
          3.10 Methods of Notice. Any notice required by the Act, the Articles
          or these Bylaws shall be given personally, by mail to each Director's
          business address, or by notice transmitted by telephone, private
          courier, e-mail, electronically transmitted facsimile or other form of
          wire or wireless communication. If mailed and if in a comprehensible
          form, such notice shall be deemed to be given and to be effective on
          the earliest of: (i) the date received; (ii) five days after such
          notice is deposited in the United States mail, properly addressed,
          with first class postage prepaid; (iii) the date shown on the return
          receipt, if mailed by registered or certified mail return receipt
          requested, provided that the return receipt is signed by the Director
          to whom the notice is addressed; or (iv) ten days after its deposit in
          the United States mail, as evidenced by the postmark, if mailed
          correctly addressed and with other than first class, registered or
          postage affixed. If notice is given by private courier or a form of
          wire or wireless communication, such notice shall be deemed to be
          given and to be effective when received by the Director. With respect
          to an electronically transmitted facsimile, such notice shall be
          deemed to be given and effective upon the sender's receipt of a
          facsimile transmission confirmation report. If a Director has
          designated in writing one or more reasonable addresses or facsimile
          numbers for delivery of notice, notice sent by mail, electronically
          transmitted facsimile or other form of wire or wireless communication
          shall not be deemed to have been given or to be effective unless sent
          to such addresses or facsimile numbers, as the case may be.
          <br />
          <br />
          3.11 Waiver of Notice. A Director may waive notice of a meeting before
          or after the time and date of the meeting by a writing signed by the
          Director. Such waiver shall be delivered to the corporate Secretary
          for filing with the corporate records, but such delivery and filing
          shall not be conditions to the effectiveness of the waiver. Further, a
          Director's attendance at or participation in a meeting waives any
          required notice to the Director of the meeting unless at the beginning
          of the meeting, or promptly upon the Director's later arrival, the
          Director objects to holding the meeting or transacting business at the
          meeting because of lack of notice or defective notice and does not
          thereafter vote for or assent to action taken at the meeting
          <br />
          <br />
          4. Officers
          <br />
          <br />
          4.1 General. The Officers of the Corporation shall be a President, one
          (1) or more Vice Presidents, Secretary, and a Treasurer, and all such
          other Officers as determined by the Board of Directors by resolution
          from time to time. All Officers shall be natural persons who are
          eighteen years or older. An Officer may be, but need not be a
          Director;&nbsp; the same individual may simultaneously hold more than
          one office in the Corportation.
          <br />
          <br />
          4.2 Powers and Duties. The Officers of the Corporation shall exercise
          and perform the respective powers, duties, and functions as are stated
          below and as may be assigned to them by the Board.
          <br />
          <br />
          &nbsp;4.2.1 President. The President shall preside at all meetings of
          the Corporation's Board of Directors. The President shall be the chief
          executive officer of the Corporation and shall, subject to the general
          direction and control of the Board, have the general supervision,
          direction, and control over the business and affairs of the
          Corporation and its Officers, agents, and employees. The President
          shall sign, together with the Secretary or any other proper Officer of
          the Corporation designated by the board, any deeds, leases, mortgages,
          deeds of trust, or other documents of conveyance or encumbrance of any
          real property owned by the Corporation and any agreements concerning
          any affiliation of the Corporation. He or she shall also perform all
          duties incident to the office of President and such other duties as
          may be assigned by the Board. The President shall appoint all
          committees and be a member ex officio of all committees.
          <br />
          <br />
          4.2.2 Vice Presidents. In the absence or disability of the President
          or when so directed by the President, the Vice President may perform
          all the duties of the President, and, when so acting, shall have all
          the powers of, and be subject to all the restrictions upon, the
          President. The Vice President shall perform other such duties as may
          be assigned by the Board or the President.
          <br />
          <br />
          4.2.3 Secretary. The Secretary shall prepare and maintain accurate
          minutes of the meetings of the Corporation's Directors and its Board
          and of any committees of the Board and shall prepare and maintain all
          corporate records and other information required to be kept by the
          Corporation pursuant to Section 6.1 hereof; shall bear the
          responsibility of authenticating the Corporation's records; shall
          ensure that all notices are duly given in accordance with provisions
          of these Bylaws; shall be custodian of the records and of the seal of
          the Corporation; shall attest the affixing of the seal of the
          Corporation when authorized by the Board; and shall perform such
          additional duties as are incident to such office and as may be
          assigned to such person by the Board or the President.
          <br />
          <br />
          4.2.4. The Treasurer shall be the principal financial Officer of the
          Corporation; shall have the charge and custody of and be responsible
          for all funds and securities of the Corporation; shall deposit such
          funds in the name of the Corporation in such depositories as shall be
          designated by the Board; shall keep accurate books of account and
          records of financial transactions and the condition of the Corporation
          and shall submit such reports thereof as the Board may from time to
          time require; and in general, perform all duties incident to such
          office and such other duties as may from time to time be assigned to
          such person by an President or by the Board. The Treasurer shall make
          an annual financial report to the Corporation at the annual meeting of
          the Directors. With the approval of the Board, the Treasurer shall be
          authorized to engage an outside professional firm to assist in the
          performance of any of the duties incident to the Treasurer's office'
          <br />
          <br />
          4,3&nbsp; Election and Terms of Offices. The Officers of the
          Corporation shall be members of the Board and are elected for life or
          until resignation, or removal (in the manner hereinafter provided) of
          such Officer.
          <br />
          <br />
          4.4 Compensation.&nbsp; Officers, if they elect to get compensated
          shall be paid no more than a Private in the U.S. Armed Forces and
          every 6 months may go up for review to go up the pay scale which will
          not exceed the pay grade of a Chief Master Gunnery Sargent in addition
          to the allowances for food, lodging and travel.&nbsp;
          <br />
          <br />
          4.5 Resignation and Removal. An Officer may resign at any time by
          giving written notice of resignation to the Board. The resignation is
          effective when the notice is received by the Corporation unless the
          notice specifies a later effective date. Any Officer may be removed at
          any time with or without cause by the Board. Such removal does not
          affect the contract rights, if any, of the Corporation or of the
          person so removed. The appointment of an Officer shall not in itself
          create contract rights.
          <br />
          <br />
          4.6 Vacancies: Incapacity. A vacancy in any office, however occurring,
          may be filled by the president with majority concurrence of the Board,
          for the unexpired portion of the Officer's term. If an Officer is
          unable to fulfill his or her duties due to illness or other
          incapacity, the president shall have the authority to appoint an
          individual who shall fulfill the duties and shall exercise all of the
          rights and powers of the incapacitated Officer during his or her
          incapacity.
          <br />
          <br />
          5. Standard of Conduct for Directors and Officers.&nbsp; Each Director
          and Officer shall perform his or her duties, including without
          limitation his or her duties as a member of any committee of the
          Board, in good faith, in a manner the Director or Officer reasonably
          believes to be in the best interests of the Corporation, and with the
          care an ordinarily prudent person in a like position would exercise
          under similar circumstances. ln the performance of his or her duties,
          a Director or Officer shall be entitled to rely on information,
          opinions, reports or statements, including financial statements and
          other financial data, in each case prepared or presented by the
          following persons: (i) one or more Officers or employees of the
          Corporation whom the Director or Officer reasonably believes to be
          reliable and competent in the matters presented; or (ii) legal
          counsel, a public accountant, or other person as to matters which the
          Director or Officer reasonably believes to be within such person's
          professional or expert competence.&nbsp; However, a Director or
          Officer shall not be considered to be acting in good faith if the
          Director or Officer has knowledge concerning the matter in question
          that would cause such reliance to be unwarranted. A Director or
          Officer shall not be liable to the Corporation or its Directors for
          any action the Director or Officer takes or omits to take as a
          Director or Officer if in connection with such action or omission, the
          Director or Officer performs his or her duties in compliance with this
          Section. A Director or Officer, regardless of title, shall not be
          deemed to be a trustee with respect to the Corporation or with respect
          to any property held or administered by the Corporation including,
          without limitation, property that may be subject to restrictions
          imposed by the donor or transferor of such property.
          <br />
          <br />
          6. Corporate Documents. Records. and Finances
          <br />
          <br />
          6.1 Corporate Records. At a minimum, the Corporation shall keep as
          permanent records minutes of all meetings of its Directors and Board,
          a record of all actions taken by the Directors or Board without a
          meeting and of actions taken by a committee in place of the Board, and
          a record of all waivers of notices of meetings of Directors, the Board
          or any committee. The Corporation shall also maintain the following
          records: (i) appropriate accounting records; (ii) its Articles and
          Bylaws; (iii) all written communications within the past 3 years to
          Directors; (iv) a list of the names and business or home addresses of
          its current Directors and Officers; (v) a copy of its most recent
          corporate report delivered to the Colorado Secretary of State; (vi)
          all applications received for grants and grants delivered; and (vii)
          all financial statements and tax returns prepared for periods during
          the last 3 years.
          <br />
          <br />
          6.2 Fiscal Year. The fiscal year of the Corporation shall commence on
          January lst and terminate on the 31st day of December of each year.
          <br />
          <br />
          7.&nbsp; Contracts. Loans. Checks. Deposits. Investments and Expenses
          <br />
          <br />
          7.1 Contracts. The Board of Directors may authorize any Officer or
          Officers or agent or agents of the Corporation to enter into any
          contract or execute and deliver any instrument in the name of and on
          behalf of the Corporation and such authority may be general or
          confined to specific instances.
          <br />
          <br />
          7.2 Loans. No loans shall be made by the Corporation and no evidences
          of indebtedness shall be issued in its name unless authorized by a
          resolution of the Board of Directors. Such authority may be general or
          confined to specific instances. No loans shall be made by the
          Corporation to its Directors or Officers.
          <br />
          <br />
          7.3 Checks. Drafts. etc. All checks, drafts, or other orders for the
          payment of money and notes or other evidences of indebtedness issued
          in the name of the Corporation shall be signed by such Officer or
          Officers or agent or agents of the Corporation and in such manner as
          shall from time to time be determined by resolution of the Board of
          Directors
          <br />
          <br />
          7.4 Deposits. All funds of the Corporation not otherwise employed
          shall be deposited from time to time to the credit of the Corporation
          in such banks, trust companies, or other depositories as the Board of
          Directors may select.
          <br />
          <br />
          7.5 Investments. The funds of the Corporation shall be invested in
          such investments as the Board of Directors or any investment manager
          appointed by the Board of Directors may from time to time select,
          giving due regard to balancing the need to preserve principal, produce
          income and capital gain, and achieve long-term growth for the
          Corporation's assets.
          <br />
          <br />
          7.6 Expenses. The Board of Directors shall pay all expenses of the
          Corporation, including but not limited to custodian, investment
          management, and accounting fees and charges, first from income (if
          available), and if not, from the principal assets of the Corporation.
          8. Amendments.
          <br />
          <br />
          8.1 Bylaws. The Board shall have power to make, alter, amend, and
          repeal the Bylaws of the Corporation by the affirmative vote of a two
          thirds (2/3rds) majority of the Board of Directors then in office;
          provided, however, that notice of the proposed amendment or amendments
          shall have been included in the meeting notice which is given to the
          members of the Board and, provided, further, that no such action shall
          be taken that would adversely affect the qualification of the
          Corporation as an organization that is exempt from Federal income
          taxation under Code Section 501(a), or as an organization described in
          Code Section 501(c)(3), contributions to which are deductible under
          Code Sections 170(c)(2),2055(a)(2) and 2522(a)(2).
          <br />
          <br />
          8.2 Articles of Incorporation. The Board reserves the right from time
          to time to amend, alter, change or repeal the Articles of
          Incorporation by a vote of two thirds (2/3rds) of the Directors
          present at a meeting called for such purpose pursuant notice, or in
          the manner permitted under C.R.S. Q 7-IZS-202 for taking action by
          unanimous written consent of the Directors without a meeting;
          provided, however, that no amendment to the Articles of incorporation
          shall have the effect of giving any Director or Officer of this
          Corporation any proprietary interest in its property or assets,
          whether during the terms of its existence or as an incident to its
          dissolution.
          <br />
          <br />
          9. Dissolution.&nbsp; The Corporation may be dissolved upon a motion
          of dissolution and a unanimous vote by the Board of Directors. Upon
          the dissolution of the Corporation or the winding up of its affairs,
          the Board of Directors shall, after paying or making provision for the
          payment of all of the Corporation's debts, distribute the remaining
          assets of the Corporation in such manner and to such organization
          having similar purpose which at that time qualify as exempt
          organizations under Section 501 (c) (3) of the Code, as the
          Corporation's Board of Directors shall determine. Any such assets not
          so disposed of shall be turned over to the District Court for the
          County of Adams, State of Colorado, for distribution to such
          organizations having similar purposes which at that time qualify as
          exempt organizations under Section 501(c)(3) of the Code as said Court
          shall determine.
          <br />
          <br />
          10. lndemnification.
          <br />
          <br />
          10.1 Right to Indemnification. The Corporation shall indemnify any
          person who was, is, or is threatened to be made a party to any
          threatened, pending, or completed action, suit, or proceeding, whether
          civil, criminal, administrative or investigative and whether formal or
          informal (other than an action by or in the right of the Corporation)
          by reason of the fact that he is or was a Director, Officer, or
          employee, fiduciary or agent of the Corporation, is or was serving at
          the request of the Corporation as a Director, Officer, partner,
          employee, fiduciary, or agent of another corporation, partnership,
          joint venture, trust, other enterprise or employee benefit plan,
          against expenses (including attorney fees), judgments, fines and
          amounts paid in settlement actually and reasonably incurred by him in
          connection with such action, suit or proceeding, to the extent that
          and under the circumstances in which the Act permits such
          indemnification. The Corporation shall indemnify any person who was,
          is, or is threatened to be made a party to any threatened, pending, or
          completed action, suit, or proceeding by or in the right of the
          Corporation to procure a judgment in its favor by reason or the fact
          that he is or was a Director, Officer, employee, fiduciary or agent of
          the Corporation, is or was serving at the request of the Corporation
          as a Director, Officer, partner, employee, fiduciary, or agent of the
          corporation, partnership, joint venture, trust, other enterprise or
          employee benefit plan, against expenses (including attorney fees),
          judgments, fines and amounts paid in settlement actually and
          reasonably incurred by him in connection with such action, suit or
          proceeding, to the extent that and under the circumstances in which
          the Act permits such indemnification.
          <br />
          <br />
          l0.2&nbsp; Manner of Indemnification. Any indemnification under this
          Section 10.2 (unless ordered by a court) shall be made as authorized
          in a specific case upon a determination that indemnification of the
          Director, Officer, employee, fiduciary, or agent is proper in the
          circumstances because he has met the applicable standard of conduct
          set forth in the Act with respect to indemnification of directors.
          Such determination may be made:
          <br />
          <br />
          (a) by the Board by a majority vote of a quorum consisting of
          Directors who were not parties to such action, suit, or proceeding, or
          <br />
          <br />
          b) if such a quorum is not obtainable, by a majority vote of a
          committee of the Board designated by the Board, which committee shall
          consist of two (2) or more Directors who were not parties to the
          action, suit, or proceeding, except that Directors who were parties to
          the action suit, or proceeding may participate in the designation of
          Directors for the committee.
          <br />
          <br />
          If such a quorum is not obtainable or such committee cannot be
          established pursuant to (a) and (b) above, or even if such quorum is
          obtained or such committee is designated if such quorum or committee
          so directs, such determination shall be made: (a) by independent legal
          counsel selected by vote of the Board of Directors or the committee in
          the manner specified in (a) or (b) above (as the case may be) or, if a
          quorum cannot be obtained and a committee cannot be established
          pursuant to (a) and (b) above, by independent legal counsel selected
          by a majority vote of the full Board. Authorization of indemnification
          and evaluation as to reasonableness of expenses may be made in the
          same manner as the determination that indemnification is properly run
          by independent legal counsel (as set forth above), authorization of
          indemnification and evaluation as to reasonableness of expenses may be
          made by the body that selected said counsel.
          <br />
          <br />
          10.3 Non-Exclusive Right. The foregoing right of indemnification shall
          not be deemed exclusive of any other right to which those seeking
          indemnification may be entitled and shall continue as to a person who
          has ceased to be a Director, Officer, employee, fiduciary, or agent
          and shall inure to the benefit of the heirs, executors and
          administrators of such a person.
          <br />
          <br />
          10.4 Breach of Fiduciary Duty. The Directors shall not have any
          personal liability to the Corporation for monetary damages for breach
          of fiduciary duty as a Director as set forth in C.R.S. 57-123-102(s)
          and to the extent permitted pursuant to C.R.S. g 7-128-402'
          <br />
          <br />
          11. Miscellaneous.
          <br />
          <br />
          11.1 Seal. The Board may adopt a corporate seal, which may be circular
          in form and shall contain the name of the Corporation and the words,
          "Seal, Colorado."
          <br />
          <br />
          &nbsp;ll.2 Conflicts. In the event of any irreconcilable conflict
          between these Bylaws and either the Corporation's Articles or the Act,
          the latter shall control.
          <br />
          <br />
          11.3 Definitions. Except as otherwise specifically provided in these
          Bylaws, all terms used in these Bylaws shall have the same definition
          as in the Act.
          <br />
          <br />
          114 Receipt of Notices by the Corporation. Notices, Director writings
          consenting to action, and other documents or writings shall be deemed
          to have been received by the Corporation when they are actually
          received: (1) at the registered office of the Corporation in Colorado;
          (2) at the principal office of the Corporation (as that office is
          designated in the most recent document filed by the Corporation with
          the Colorado Secretary of State designating a principal office)
          addressed to the attention of the Secretary of the Corporation; (3) by
          the Secretary of the Corporation wherever the Secretary may be found;
          or (4) by any other person authorized from time to time by the Board
          or the President to receive such writings wherever such person is
          found. 11.5 Conflicting Interest Transactions. A "conflicting interest
          transaction" means a contract, transaction, or other financial
          relationship between the Corporation and a Director or Officer of the
          Corporation, or between the Corporation and a patty related to a
          Director or Officer, or between the Corporation and an entity in which
          a Director of the Corporation is a Director or Officer or has a
          financial interest. For purposes of this Section
          <br />
          <br />
          11.5 a ,'party related to a Director" shall mean a spouse, a
          descendent, an ancestor, a sibling, the rpo.tp or descendent of a
          sibling, an estate or trust in which the Director or a party related
          to the Director has a beneficial interest, or an entity in which a
          party related to a Director is a Director, Officer, or has a financial
          interest. A conflicting interest transaction shall not be permitted
          unless: (i) the material facts as to the Director's relationship or
          interest and as to the conflicting interest transaction are disclosed
          or are known to the Board or the committee of the Board that
          authorizes, approves, or ratifies the conflicting interest
          transaction, and the Board or such committee in good faith authorizes,
          approves, or ratifies the conflicting interest transaction by the
          affirmative vote of a majority of the disinterested Directors, even
          though the disinterested Directors are less than a quorum; (ii) the
          material facts as to the Director's relationship or interest and as to
          the conflicting interest transaction are disclosed or are known to the
          Directors entitled to vote thereon, and the conflicting interest
          transaction is specifically authorized, approved, or ratified in good
          faith by a vote of the Directors; or (iii) the conflicting interest
          transaction is fair as to the Corporation.&nbsp; Any Director or
          Officer who assents to or participates in the making of any such loan
          shall be liable to the Corporation for the amount of such loan until
          the repayment thereof. Notwithstanding anything in this Sectiop 11.5
          to the contrary, a conflicting interest transaction that meets the
          requirements of this Section 11.5 must also be in compliance with the
          Conflict of Interest policy adopted by the Corporation for the purpose
          of protecting the Corporation's tax-exempt organization&nbsp; status.
          The above Bylaws were approved.
          <br />
          &nbsp;
          <br />
          <em>
            The above Bylaws were approved and adopted by the Board of Directors
            of the The Long Walk Home,Inc. as of October 12, 2006
          </em>
        </div>
      </Container>
    </div>
  );
};

ByLaws.propTypes = {
  className: PropTypes.string
};

export default ByLaws;
