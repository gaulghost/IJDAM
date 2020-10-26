import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
// core components
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

export default function AdvisoryBoard() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{ textAlign: 'center' }}>
        {' '}
        Archive
      </h2>
      <ExpansionPanel style={{ borderRadius: '10px' }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {' '}
            <h3>
              {' '}
              <b>Coming Soon... </b>{' '}
            </h3>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <GridContainer justify="center" style={{ textAlign: 'justify' }}>
            // <GridItem xs={12} sm={12} md={12}>
            //   <Card>
            //     <CardBody>
            //       <h4>
            //         <b>
            //           Title :{' '}
            //           <a
            //             href="https://drive.google.com/file/d/1GBQI3-uqkLAhi09raYK0s6DUO8jcnAxN/view"
            //             target="_blank"
            //             style={{ color: '#1565d4' }}
            //           >
            //             {' '}
            //             Editorial – Inaugural Issue of Innovative Computing and Communication: An
            //             International Journal{' '}
            //           </a>{' '}
            //         </b>
            //       </h4>
            //       <h5>
            //         <b>Author(s): </b> Deepak Gupta, Ashish Khanna
            //       </h5>
            //       <h5>
            //         <b>Pages: 1-4 </b>
            //       </h5>
            //     </CardBody>
            //   </Card>
            // </GridItem>
            // <GridItem xs={12} sm={12} md={12}>
            //   <Card>
            //     <CardBody>
            //       <h4>
            //         <b>
            //           Title :{' '}
            //           <a
            //             href="https://drive.google.com/file/d/10f1GZJxjNVBV3rITIckeIlmMm5nEZEAm/view?usp=sharing"
            //             target="_blank"
            //             style={{ color: '#1565d4' }}
            //           >
            //             {' '}
            //             GEO PROFILING MAPS BASED ON CRIME{' '}
            //           </a>{' '}
            //         </b>
            //       </h4>
            //       <h5>
            //         <b>Author(s): </b> Siddhant Magow, Harshit Kapoor, Chiranjeev Singh Bindra,
            //         Deepak Gupta
            //       </h5>
            //       <h5>
            //         <b>Pages: 1-8 </b>
            //       </h5>
            //       <br />
            //     </CardBody>
            //   </Card>
            // </GridItem>
          </GridContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <br />

      // <ExpansionPanel style={{ borderRadius: '10px' }}>
      //   <ExpansionPanelSummary
      //     expandIcon={<ExpandMoreIcon />}
      //     aria-controls="panel1a-content"
      //     id="panel1a-header"
      //   >
      //     <Typography className={classes.heading}>
      //       {' '}
      //       <h3>
      //         {' '}
      //         <b>Vol. 1, Issue 2, September 2019 </b>{' '}
      //       </h3>
      //     </Typography>
      //   </ExpansionPanelSummary>
      //   <ExpansionPanelDetails>
      //     <GridContainer justify="center" style={{ textAlign: 'justify' }}>
      //       <GridItem xs={12} sm={12} md={12}>
      //         <Card>
      //           <CardBody>
      //             <h4>
      //               <b>
      //                 Title :{' '}
      //                 <a
      //                   href="https://drive.google.com/file/d/1FJByHB4EYxyvTuc23UTluYavMzC6027J/view?usp=sharing"
      //                   target="_blank"
      //                   style={{ color: '#1565d4' }}
      //                 >
      //                   {' '}
      //                   RC Car Using LabVIEW And Arduino{' '}
      //                 </a>{' '}
      //               </b>
      //             </h4>
      //             <h5>
      //               <b>Author(s): </b> Nimit Nayak, Sahib Singh, Rajatdeep Singh, Ramandeep Singh,
      //               Parul Dawar
      //             </h5>
      //             <h5>
      //               <b>Pages: 1-6</b>
      //             </h5>
      //           </CardBody>
      //         </Card>
      //       </GridItem>
      //
      //       <GridItem xs={12} sm={12} md={12}>
      //         <Card>
      //           <CardBody>
      //             <h4>
      //               <b>
      //                 Title :{' '}
      //                 <a
      //                   href="https://drive.google.com/file/d/16kGHpjv8cgO_lIRfwsK6pkZPWjoW_3gk/view?usp=sharing"
      //                   target="_blank"
      //                   style={{ color: '#1565d4' }}
      //                 >
      //                   {' '}
      //                   Robotic Arm Control using LabView{' '}
      //                 </a>{' '}
      //               </b>
      //             </h4>
      //             <h5>
      //               <b>Author(s): </b> Piyush Malhotra, Parul Dawar
      //             </h5>
      //             <h5>
      //               <b>Pages: 21-24</b>
      //             </h5>
      //           </CardBody>
      //         </Card>
      //       </GridItem>
      //     </GridContainer>
      //   </ExpansionPanelDetails>
      // </ExpansionPanel>
      // <br />
    </div>
  );
}
