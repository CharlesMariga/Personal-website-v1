import "styled-components";
import { themeInterface } from "./interfaces/Theme.Interface";

declare module "styled-components" {
  export interface DefaultTheme extends themeInterface {}
}
