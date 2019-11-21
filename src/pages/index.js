import React, { Fragment } from "react";
import classes from "stylesheets/index.module.less";
import Nav from "components/Nav/Nav";
import WelcomeBanner from "components/WelcomeBanner/WelcomeBanner";
import { getText } from "components/Text/Text";
import { graphql } from "gatsby";
import "src/styles.css";

export default ({ data }) => {
  return (
    <Fragment>
      <Nav
        en="https://www.appinchina.co"
        cn="https://wwww.appinchina.com.cn"
        title={getText("meta.home.title")}
        description={getText("meta.home.description")}
      />
      <div className={classes.container}>
        <WelcomeBanner img={data.screenshot} />
      </div>
    </Fragment>
  );
};

export const query = graphql`
  fragment LargeScreenshot on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 800) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment MediumScreenshot on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 600) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment DashboardImage on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 650) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  fragment CompanyImage on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 300) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    screenshot: file(relativePath: { eq: "other/laptop-dashboard.png" }) {
      ...LargeScreenshot
    }
  }
`;
