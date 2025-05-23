import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "SickKids Hospital": {
      jobTitle: "Machine Learning Developer (Contract) @",
      duration: "Sep 2024 - Present",
      desc: [
        "Implemented CT scan protocol classification using LLMs, optimizing workflow efficiency and increasing accuracy by 27%",
        "Incorporated RAG, fine-tuning, and prompting to achieve best results while preserving data privacy",
        "Developed a real-time system for protocol selection integrated into the Coral system station at the hospital",
        "Built deep learning models for pediatric liver lesion detection, improving diagnostic accuracy"
      ]
    },
    "IPM Institute for Research": {
      jobTitle: "Machine Learning Developer (Part-Time) @",
      duration: "Sep 2020 - Mar 2022",
      desc: [
        "Developed AI-driven virtual try-on pipelines using DensePose, OpenPose, and 3D garment warping for realistic cloth fitting simulation.",
        "Improved garment alignment and overlay precision using semantic segmentation and human parsing.",
        "Integrated pose estimation and garment matching into a prototype system for e-commerce virtual fitting."
      ]
    },
    "AGP Inc.": {
      jobTitle: "Software Developer (Intern) @",
      duration: "Jul 2020 - Sep 2020",
      desc: [
        "Developed a Django-based website for Persian QA dataset collection",
        "Implemented Agile methodologies (Scrum, Sprint Planning) to improve delivery efficiency"
      ]
    },
    "University of Toronto": {
      jobTitle: "Machine Learning Developer @",
      duration: "May 2021 - Dec 2024",
      desc: [
        "Analyzed a unique Persian poetry dataset using SVM, Random Forest, and Neural Networks, including preprocessing, feature selection, PCA, and embedding clustering. (with Prof. Farzad Khalvati: https://imics.ca/)",
        "Developed an NLP pipeline for n-gram generation and poem clustering; applied BERT for analysis precision and LDA for topic modeling."
      ]
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
