import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IBanner } from "@/types/banner.interface";
import { IAbout } from "@/types/about.interface";
import { IContact } from "@/types/contact.interface";

export interface HomeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  banners: IBanner[];
  abouts: IAbout[];
  factories: IContact[];
}
