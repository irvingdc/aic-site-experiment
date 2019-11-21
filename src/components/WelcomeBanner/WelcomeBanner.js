import React, { Component, Fragment } from "react";
import classes from "./WelcomeBanner.module.less";
import { Link } from "gatsby";
import gp from "images/companies/gp.png";
import teamwork from "images/other/teamwork.png";
import aic from "images/companies/aic.png";
import GradientBackground from "components/GradientBackground/GradientBackground";
import { Text } from "components/Text/Text";
import Img from "gatsby-image";

const FirstFloor = ({ img }) => {
  console.log("img", img);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>
            <Text id="home.welcome.title" />
          </h1>
          <p>
            <Text id="home.welcome.description" />
          </p>
        </div>
        <div className={classes.image}>
          <Img fluid={img} alt="alt" title="Dashboard" />
        </div>
      </div>
    </div>
  );
};

const Cards = () => (
  <div className={classes.cards}>
    <div className={classes.card}>
      <img src={gp} alt="Google Play" />
      <h3>Google Play</h3>
      <p>
        <span>2.5</span> billion active devices
      </p>
    </div>
    <div className={classes.card}>
      <img src={aic} alt="AppInChina" />
      <h3>AppInChina</h3>
      <p>
        <span>1.1</span> billion active devices
      </p>
    </div>
    <div className={classes.textCard}>
      <h2>Do you know what you're missing?</h2>
      <div>
        <ul>
          <li>70% of mobile users in China use Android.</li>
          <li>None can access Google Play.</li>
          <li>We'll introduce you to 1.1 billion new users.</li>
        </ul>
        <Link className={classes.link} to="/get-started/">
          <button size="large" type="primary">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const Team = () => (
  <div className={classes.team}>
    <div>
      <h2>International Team</h2>
      <p>
        Our <b>English-speaking, Beijing-based team</b> makes a complicated
        process simple, with constant communication and expert guidance - via
        phone, email, messaging, and our <b>client dashboard</b>.
      </p>
    </div>
    <img src={teamwork} alt="Teamwork" />
  </div>
);

export default ({ img }) => (
  <Fragment>
    <GradientBackground height={200} />
    <FirstFloor img={img.childImageSharp.fluid} />
    <Cards />
    <Team />
  </Fragment>
);
