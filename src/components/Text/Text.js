import React, { Fragment } from "react";
import EN from "../../locales/EN";

export const Text = ({ id }) => {
  const languages = { EN };
  const text = languages[process.env.GATSBY_LAN || "EN"];
  return <Fragment>{!!id && !!text[id] ? text[id] : id || ""}</Fragment>;
};

export const getText = (id) => {
  const languages = { EN };
  const text = languages[process.env.GATSBY_LAN || "EN"];
  return !!id && !!text[id] ? text[id] : id || ""
}