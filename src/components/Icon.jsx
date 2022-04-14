import React from "react";
import PropTypes from "prop-types";
import {
  IconAppStore,
  IconExternal,
  IconFolder,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconPlayStore,
  IconTwitter,
} from "./icons";

export default function Icon({ name, width, height }) {
  switch (name) {
    case "AppStore":
      return <IconAppStore width={width} height={height} />;
    case "Folder":
      return <IconFolder width={width} height={height} />;
    case "GitHub":
      return <IconGitHub width={width} height={height} />;
    case "LinkedIn":
      return <IconLinkedin width={width} height={height} />;
    case "Instagram":
      return <IconInstagram width={width} height={height} />;
    case "PlayStore":
      return <IconPlayStore width={width} height={height} />;
    case "Twitter":
      return <IconTwitter width={width} height={height} />;
    default:
      return <IconExternal width={width} height={height} />;
  }
}

Icon.prototype = {
  name: PropTypes.string.isRequired,
};
