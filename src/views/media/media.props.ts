import { MediaPageProps } from "@/pages/media";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MediaProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, MediaPageProps {}
