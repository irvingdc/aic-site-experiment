import React from "react";
import Classes from "./GradientBackground.module.less";

export default props => (
  <div>
    <div className={Classes.parallax} style={{ height: props.height + 600 }} />
    <div className={Classes.filter}>
      <div className={Classes.textContainer}>
        <div className={!props.text ? Classes.noText : Classes.withText}>
          {props.title}
        </div>
        <p>{props.text}</p>
        {props.children ? props.children : null}
      </div>
    </div>
  </div>
);
