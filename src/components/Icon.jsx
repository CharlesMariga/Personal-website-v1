import React from "react";
import PropTypes from "prop-types";
import {
  IconExternal,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconTwitter,
} from "./icons";

export default function Icon({ name, width, height }) {
  switch (name) {
    case "Instagram":
      return <IconInstagram width={width} height={height} />;
    case "GitHub":
      return <IconGitHub width={width} height={height} />;
    case "Twitter":
      return <IconTwitter width={width} height={height} />;
    case "LinkedIn":
      return <IconLinkedin width={width} height={height} />;
    default:
      return <IconExternal width={width} height={height} />;
  }
}

Icon.prototype = {
  name: PropTypes.string.isRequired,
};
