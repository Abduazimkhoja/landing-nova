import cn from "classnames";
import { useTranslation } from "next-i18next";
import { FC } from "react";

import { FooterProps } from "./footer.props";

import styles from "./footer.module.scss";

export const Footer: FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <footer className={cn(styles.wrapper, className)}>
      <div className={cn(styles.wrap, "container")}>
        <p className={cn(styles["copyright-info"], "text-md color-gray")}>
          © Nova Plastic 2024. {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
};
