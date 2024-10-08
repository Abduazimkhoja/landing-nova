import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BreadcrumbsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  mb: string;
  urlList: {
    title: string;
    link: string;
  }[];
}
