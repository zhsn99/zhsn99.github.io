import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";

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

const EduList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    YORK: {
      jobTitle: "Master of Applied Science Computer Engineering @",
      duration: "Sep 2022 - Dec 2024",
      desc: [
        "GPA: 4.0/4.0",
        "Thesis: Eye-Contact Modeling Using Diffusion Models",
        <span>
          Supervised by{" "}
          <a href="https://csprofkgd.github.io/" target="_blank" rel="noopener noreferrer">
            Dr. Kosta Derpanis
          </a>{" "}
          (
          <a href="https://yorkucvil.github.io/" target="_blank" rel="noopener noreferrer">
            Computational Vision and Imaging Lab
          </a>
          ) and{" "}
          <a href="https://www.biomotionlab.ca/niko-troje/" target="_blank" rel="noopener noreferrer">
            Prof. Niko Troje
          </a>{" "}
          (
          <a href="https://www.biomotionlab.ca/" target="_blank" rel="noopener noreferrer">
            BioMotion Lab
          </a>
          )
        </span>,
        "Research focused on computer vision and deep learning applications in human-computer interaction"
      ]
    },
    IUST: {
      jobTitle: "Bachelor of Science Computer Engineering @",
      duration: "Sep 2018 - Jul 2022",
      desc: [
        "GPA: 3.8/4.0",
        "Thesis: Sub-Claim Extraction Using Meta Learning for Fake News Detection",
        <span>
          Supervised by{" "}
          <a href="https://www.birmingham.ac.uk/staff/profiles/dubai/eetemadi-sauleh" target="_blank" rel="noopener noreferrer">
            Dr. Sauleh Eetemadi
          </a>
        </span>,
        "Research focused on natural language processing and machine learning applications in information verification"
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
          <span className="edulist-edu-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="edulist-edu-company">{key}</span>
          <div className="edulist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="edulist-description">
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

export default EduList;
