import { ImageDataLike } from "gatsby-plugin-image";

export interface Project {
  frontmatter: {
    date: string;
    title: string;
    company?: string;
    tech: string[];
    external?: string;
    github?: string;
    ios?: string;
    playstore?: string;
    cover: ImageDataLike;
    cta: string;
  };
  html: string;
}
