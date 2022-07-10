import "styled-components";
import { themeInterface } from "./interfaces/ThemeStyle.Interface";

declare module "styled-components" {
  export interface DefaultTheme extends themeInterface {}
}
