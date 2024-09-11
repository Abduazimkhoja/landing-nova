import { IBanner } from "@/types/banner.interface";
import { HTMLAttributes } from "react";

export interface HomeHeroProps extends HTMLAttributes<HTMLDivElement> {
  banners: IBanner[];
}
