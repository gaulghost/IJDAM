import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import Album from '@material-ui/icons/Album';

import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import NavPills from 'components/NavPills/NavPills.js';
import Special from './Special';

const useStyles = makeStyles(styles);
const flex = { display: 'flex', alignItems: 'center', textalign: 'justify' };

function ListStyle(props) {
  const classes = useStyles();
  return (
    <h6 className={classes.description} style={flex}>
      <Album />{' '}
      <li style={{ listStyle: 'none', marginLeft: '5px', textAlign: 'left' }}> {props.text}</li>{' '}
    </h6>
  );
}

export default function Regular() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Call For Regular Issues</h2>
      <NavPills
        color="primary"
        tabs={[
          {
            tabButton: 'Data Analytics',
            tabContent: (
              <span>
                <GridContainer xs={12} sm={12} md={18} justify="center">
                  <GridItem xs={12} sm={4} md={4}>
                    <ListStyle text="Tools, frameworks and mechanisms for data analytics " />
                    <ListStyle text="Open API for data analytics, In-database analytics " />
                    <ListStyle text="Pre-built analytics (pattern, time-series, clustering, graph, statistical analysis, etc.) " />
                    <ListStyle text="Analytics visualization " />
                    <ListStyle text="Multi-modal support for data analytics " />
                    <ListStyle text="Scalable data analytics " />
                    <ListStyle text="Big data analytics, Deep data analytics " />
                    <ListStyle text="Mass data analytics Storing, dropping and filtering data " />
                  </GridItem>

                  <GridItem xs={12} sm={4} md={4}>
                    <ListStyle text="Relevant / redundant / obsolete data analytics " />
                    <ListStyle text="Nomad analytics , Predictive analytics " />
                    <ListStyle text="Trust in data analytics " />
                    <ListStyle text="Architectures for generic sentiment analysis systems " />
                    <ListStyle text="Sentiment analysis techniques on social media " />
                    <ListStyle text="Document-level analysis , Sentence-level analysis " />
                    <ListStyle text="Aspect-based analysis , Comparative-sentiment analysis " />
                    <ListStyle text="Statistical applications " />
                  </GridItem>

                  <GridItem xs={12} sm={4} md={4}>
                    <ListStyle text="Simulation applications " />
                    <ListStyle text="Crawling web services; Cross-database analytics " />
                    <ListStyle text="Forecast analytics , Financial risk management , ROI analytics " />
                  </GridItem>
                </GridContainer>
              </span>
            ),
          },
          {
            tabButton: 'Data Management',
            tabContent: (
              <GridContainer xs={12} sm={12} md={18} justify="center">
                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Business analytics " />
                  <ListStyle text="Malware analytics " />
                  <ListStyle text="Data Exchange, Integration, quality, cleaning and Lineage " />
                  <ListStyle text="Database administration and upgrading challenges " />
                  <ListStyle text="Algorithms and Programming Techniques " />
                  <ListStyle text="Real-time data management in navigation and mobility " />
                  <ListStyle text="Agricultural Informatics and Communication " />
                  <ListStyle text="Survey-based online asset analytics " />
                  <ListStyle text="Online employment analytics " />
                  <ListStyle text="Population growth and migration analytics " />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Community Information Systems " />
                  <ListStyle text="Computational Economics " />
                  <ListStyle text="Digital Photogrammetry, Remote Sensing, GIS and GPS " />
                  <ListStyle text="Disaster Management " />
                  <ListStyle text="e-governance, e-Commerce, e-business, e-Learning " />
                  <ListStyle text="Information Ecology and Knowledge Management " />
                  <ListStyle text="Irrigation Informatics " />
                  <ListStyle text="Utility proximity-search analytics " />
                  <ListStyle text="User choice analytics , Branding analytics " />
                  <ListStyle text="Food-borne illness outbreaks analytics " />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Neuroinformatics " />
                  <ListStyle text="Open Source: Challenges and opportunities " />
                  <ListStyle text="Web-Based Learning: Innovation and Challenges " />
                  <ListStyle text="Cyber-threats analytics " />
                  <ListStyle text="Mining user logs " />
                  <ListStyle text="Reputation analytics" />
                  <ListStyle text="Geology analytics , Global climate analytics " />
                  <ListStyle text="Remote learning analytics " />
                  <ListStyle text="Homecare analytics " />
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Big Data',
            tabContent: (
              <GridContainer xs={12} sm={12} md={18} justify="center">
                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Foundational models for Big Data " />
                  <ListStyle text="Big Data Analytics and Metrics" />
                  <ListStyle text="Big Data processing and management" />
                  <ListStyle text="Big Data search and mining , Big Data platforms" />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Big Data and social networks , Big Data economics" />
                  <ListStyle text="Knowledge Discovery from Huge Data" />
                  <ListStyle text="Computational Intelligence for Huge Data" />
                  <ListStyle text="Linked Huge Data" />

                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Security Intelligence with Huge Data" />
                  <ListStyle text="Big Data Analytics, Metrics, Platforms" />
                  <ListStyle text="Business Performance Management using Big Data Technique" />
                  <ListStyle text="Big Data Management and Frameworks" />
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Computational Intelligence',
            tabContent: (
              <GridContainer xs={12} sm={12} md={18} justify="center">
                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Big Data persistence and preservation" />
                  <ListStyle text="Artificial Intelligence" />
                  <ListStyle text="Deep Learning" />
                  <ListStyle text="Evolutionary algorithms" />
                  <ListStyle text="Swarm Intelligence" />
                  <ListStyle text="Fuzzy sets and vague sets" />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Rough set theoretic approaches" />
                  <ListStyle text="Quantum inspired computational intelligence" />
                  <ListStyle text="Hybrid Computational Intelligence" />
                  <ListStyle text="Machine Learning" />
                  <ListStyle text="Computer Vision" />
                  <ListStyle text="Soft Computing" />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Distributed Computing" />
                  <ListStyle text="Parallel and Grid Computing" />
                  <ListStyle text="Cloud Computing" />
                  <ListStyle text="High Performance Computing" />
                  <ListStyle text="Biomedical Computing" />
                  <ListStyle text="Decision Support and Decision making" />
                </GridItem>
              </GridContainer>
            ),
          },
          {
            tabButton: 'Communication Networks',
            tabContent: (
              <GridContainer xs={12} sm={12} md={18} justify="center">
                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Wireless sensor networks" />
                  <ListStyle text="Mobile ad-hoc networks" />
                  <ListStyle text="Software defined networks" />
                  <ListStyle text="Information theory and coding" />
                  <ListStyle text="Cloud communications and networking" />
                  <ListStyle text="Wearable network and systems" />
                  <ListStyle text="Personal communication systems" />
                  <ListStyle text="Vehicular networks and applications" />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Wireless communications" />
                  <ListStyle text="Virtual and overlay networks" />
                  <ListStyle text="Future Internet Architecture and protocols" />
                  <ListStyle text="Satellite Communication" />
                  <ListStyle text="Next Generation Networking" />
                  <ListStyle text="Quantum Networking" />
                  <ListStyle text="Qos Provisioning and Architectures" />
                  <ListStyle text="Telecommunication Services and Applications" />
                </GridItem>

                <GridItem xs={12} sm={4} md={4}>
                  <ListStyle text="Optical Communication" />
                  <ListStyle text="Network Performance" />
                  <ListStyle text="Computer Security" />
                  <ListStyle text="Digital Signature" />
                  <ListStyle text="Information Security" />
                  <ListStyle text="Network Security" />
                  <ListStyle text="Cyber Security" />
                  <ListStyle text="MANET’s" />
                </GridItem>
              </GridContainer>
            ),
          },
        ]}
      />
      <Special />
    </div>
  );
}
