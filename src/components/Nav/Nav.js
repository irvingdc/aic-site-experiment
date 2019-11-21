import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import { Text } from "../Text/Text";
import logo_white from "images/logo-white.png";
import menuIcon from "images/menu.png";
import close from "images/close.png";
import back from "images/back.svg";
import styles from "./Nav.module.less";
import MetaTags from "../MetaTags/MetaTags";
import pin from "images/other/localization-pinpointmap.png";
import play from "images/other/distribution-play.png";
import diamond from "images/other/monetization-diamond.png";
import gears from "images/other/integration-gears.png";
import world from "images/other/hosting-world.png";
import bars from "images/other/ua-bars.png";
import store from "images/other/store_fill.png";
import apps from "images/other/posterous.png";
import device from "images/other/mobile.png";
import os from "images/other/os-icon.png";
import people from "images/other/people.png";
import target from "images/other/target.jpg";
import news from "images/other/newspaper.png";

export default ({ title, description, featured_image, cn, en }) => {
  let [open, setOpen] = useState(false);
  let [backButtonDisplayed, setBackButtonDisplayed] = useState(false);

  let menu = {
    services: {
      title: <Text id="nav.services" />,
      options: [
        {
          img: pin,
          title: <Text id="nav.localization" />,
          url: "/services/localization/",
          text:
            "We help you comply with local laws, register and protect your IP, and modify your app for Chinese users."
        },
        {
          img: play,
          title: <Text id="nav.distribution" />,
          url: "/services/distribution/",
          text:
            "Launch your app on the top 15 Android app stores in China with personalized one-on-one service."
        },
        {
          img: diamond,
          title: <Text id="nav.monetization" />,
          url: "/services/monetization/",
          text:
            "AppInChina Pay is the best way to integrate WeChat Pay & Alipay in-app payments in China."
        },
        {
          img: gears,
          title: "Integration",
          url: "/services/integration/",
          text:
            "We can test your app for dependencies and provide SDKs & cloud services that work in China."
        },
        {
          img: world,
          title: "Hosting",
          url: "/services/hosting/",
          text:
            "With our local hosting service, you can comply with Chinese law and provide the best user experience."
        },
        {
          img: bars,
          title: "User Acquisition",
          url: "/services/acquisition/",
          text:
            "We custom UA services for the Chinese market with analytics, ASO and CPD campaigns."
        }
      ]
    },
    market: {
      title: <Text id="nav.market" />,
      options: [
        {
          img: store,
          title: <Text id="nav.market.app-stores" />,
          url: "/market/app-stores/",
          text:
            "Updated quarterly, the AppInChina App Store Index is the market-leading index of China's largest Android app stores."
        },
        {
          img: apps,
          title: <Text id="nav.market.apps" />,
          url: "/market/apps/",
          text:
            "The AppInChina App Index ranks the best-performing Android app in the Chinese market."
        },
        {
          img: device,
          title: <Text id="nav.market.device-brands" />,
          url: "/market/device-brands/",
          text:
            "Updated quarterly, the AppInChina Mobile Device Index ranks the top 20 most popular mobile device brands in China today."
        },
        {
          img: os,
          title: <Text id="nav.market.operating-systems" />,
          url: "/market/operating-systems/",
          text:
            "Especially useful for developers, we rank the top 10 most popular operating system versions in China each quarter."
        },
        {
          img: world,
          title: <Text id="nav.market.user-locations" />,
          url: "/market/user-locations/",
          text:
            "The AppInChina User Location Index shows the percentage of total active mobile devices in the different regions of Mainland China."
        }
      ]
    },
    resources: {
      title: <Text id="nav.resources" />,
      url: "/news/"
    },
    company: {
      title: <Text id="nav.company" />,
      options: [
        {
          img: people,
          title: <Text id="nav.company.about-us" />,
          url: "/our-company/",
          text:
            "Meet the team and learn why we are the most trusted company for foreign app distribution and marketing in Mainland China."
        },
        {
          img: target,
          title: <Text id="nav.company.success-stories" />,
          url: "/success/",
          text:
            "We are proud to count the world's most respected companies and brands among our clients. Read some stories of their successful launches in China."
        },
        {
          img: news,
          title: <Text id="nav.company.media" />,
          url: "/media/",
          text:
            "Major news outlets regularly cite AppInChina for the most current data and insights into trends regarding the Chinese mobile app market."
        }
      ]
    },
    signIn: {
      title: <Text id="nav.sign-in" />,
      url: "https://clients.appinchina.co/login",
      isExternal: true
    }
  };

  const getOtherLanguage = () => {
    return process.env.GATSBY_LAN === "CN" ? "EN" : "中文";
  };

  const getCurrentLanguage = () => {
    return process.env.GATSBY_LAN === "CN" ? "中文" : "EN";
  };

  const getOtherUrl = () => {
    return process.env.GATSBY_LAN === "CN" ? en : cn;
  };

  const getCanonical = () => {
    return process.env.GATSBY_LAN === "CN" ? cn : en;
  };

  const languageSwitcher = () => (
    <li className={styles.dropdown}>
      <span className={styles.dropbtn}>
        {getCurrentLanguage()}
        <b className={styles.arrow}>▼</b>
      </span>
      <ul className={styles.dropdown_content}>
        <li>
          <a href={getOtherUrl()} target="_self" rel="noopener noreferrer">
            {getOtherLanguage()}
          </a>
        </li>
      </ul>
    </li>
  );

  return (
    <Fragment>
      <MetaTags
        canonical={getCanonical()}
        title={title}
        description={description}
        featured_image={featured_image}
      />
      <nav className={[styles.nav, open ? styles.open : ""].join(" ")}>
        {open ? (
          <img
            alt="Close"
            src={close}
            className={styles.button}
            onClick={() => setOpen(false)}
          />
        ) : (
          <img
            alt="Menu"
            src={menuIcon}
            className={styles.button}
            onClick={() => setOpen(true)}
          />
        )}
        <img
          alt="Close"
          src={back}
          className={[
            styles.button,
            styles.backButtonNotDisplayed,
            backButtonDisplayed ? styles.backButtonDisplayed : ""
          ].join(" ")}
          onClick={() => setBackButtonDisplayed(false)}
        />
        <div
          className={[
            backButtonDisplayed ? styles.backButtonDisplayed : "",
            styles.whiteBox
          ].join(" ")}
        ></div>
        <ul>
          <li className={styles.company_logo}>
            <Link to="/">
              <img src={logo_white} alt="Company Logo" title="Company Logo" />
            </Link>
          </li>
          {Object.keys(menu).map(key => (
            <li className={styles.dropdown} key={key}>
              {menu[key].url ? (
                menu[key].isExternal ? (
                  <a
                    href={menu[key].url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {menu[key].title}
                  </a>
                ) : (
                  <Link to={menu[key].url}>{menu[key].title}</Link>
                )
              ) : (
                <span
                  className={styles.dropbtn}
                  onClick={() => setBackButtonDisplayed(true)}
                >
                  {menu[key].title}
                </span>
              )}
              {menu[key].options ? (
                <ul className={styles.dropdown_content}>
                  {menu[key].options.map(option => (
                    <li key={option.url}>
                      <Link to={option.url} className={styles.flex}>
                        <img src={option.img} alt="Icon" />
                        <div>
                          <h5>{option.title}</h5>
                          <p>{option.text}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
          <li className={styles.dropbtn}>
            <Link to="/get-started/" className={styles.whiteButton}>
              <Text id="nav.get-started" />
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
