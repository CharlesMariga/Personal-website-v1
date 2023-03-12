/* eslint-disable @typescript-eslint/member-delimiter-style */
export interface Job {
  frontmatter: {
    date: string;
    title: string;
    company: string;
    location: string;
    range: string;
    url: string;
  };
  html: string;
}
