import cn from "classnames";
import { FC } from "react";

import { CleanHeaderProps } from "./clean-header.props";

import { Language, Logo } from "@/components";

import LangSelect from "@/components/ui/lang-select/LangSelect";
import styles from "./clean-header.module.scss";

export const CleanHeader: FC<CleanHeaderProps> = ({ className, children, ...props }) => {
  return (
    <header className={cn(styles["header--home"], styles.header, className)} {...props}>
      <div className="container">
        <div className={styles.wrap}>
          <Logo className={styles.logo} color="custom" />

          <div className={cn(styles.additions)}>
            <Language />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CleanHeader;
