import { LangTuple } from "@/helpers/languages.helper";
import { FC } from "react";
import { useTranslation } from "next-i18next";
import { statsCardsData } from "./stats-data";
import styles from "./style.module.scss";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Props = {
  className?: string;
} & JSX.IntrinsicElements["div"];

const StatsCard: FC<Props> = ({ className, ...rest }) => {
  const language = useTranslation().i18n.language as LangTuple;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div id="home-stats" className={`${className} ${styles.wrapper} container`} {...rest} ref={ref}>
      <ul className={styles.list}>
        {statsCardsData.map(({ count, ...titles }) => (
          <li className={styles.item} key={titles[`title_${language}`]}>
            <h4 className={`${styles.title} number-counter`} data-count={count}>
              {inView ? (
                <CountUp end={+count.replace("+", "")} duration={2} suffix={count.endsWith("+") ? "+" : ""} />
              ) : (
                count
              )}
            </h4>
            <span className={styles.devider}></span>
            <p className={styles.description}>{titles[`title_${language}`]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatsCard;
