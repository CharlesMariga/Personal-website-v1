import { FlattenSimpleInterpolation } from "styled-components";

export interface themeInterface {
  bp: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tabletXS: string;
    tabletL: string;
    desktopXS: string;
    desktopS: string;
    desktopM: string;
    desktopL: string;
  };
  mixins: {
    lightMode: FlattenSimpleInterpolation;
    darkMode: FlattenSimpleInterpolation;
    lightSelection: FlattenSimpleInterpolation;
  };
}
