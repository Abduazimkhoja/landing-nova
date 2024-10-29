import { DOMAIN } from "@/helpers/api.helper";
import { LangTuple } from "@/helpers/languages.helper";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { countryCardsData } from "./country-data";
import styles from "./style.module.scss";

type Props = {
  className?: string;
} & JSX.IntrinsicElements["div"];

const CountryCard: FC<Props> = ({ className, ...rest }) => {
  const [language, setLanguage] = useState<LangTuple>("ru");
  const clientLanguage = useTranslation().i18n.language as LangTuple;

  useEffect(() => {
    setLanguage(clientLanguage);
  }, [clientLanguage]);

  return (
    <div className={`${className} ${styles.countries} container`} {...rest}>
      <h2 className={styles.title}>{countryCardsData[`title_${language}`]}</h2>
      <ul className={styles.list}>
        {countryCardsData?.cards?.map(({ country, link, ...labels }) => (
          <li className={styles.item} key={labels[`label_${language}`]}>
            <a target="_blank" href={link}>
              <div className={styles.card}>
                <Image
                  width="800"
                  height="400"
                  src={`${DOMAIN}/uploads/assets/images/${country}-card.webp`}
                  alt="country"
                  className={styles.img}
                />
                <div className={styles.link}>
                  <Image
                    height="28"
                    width="28"
                    src={`/icons/flags/${country}-flag.svg`}
                    alt="flag"
                    className={styles["icon-flag"]}
                  />
                  <h3 className={styles.name}>
                    {labels[`label_${language}`]}
                    <Image width="10" height="14" className={styles["icon-arrow"]} src="/icons/arrow.svg" alt="arrow" />
                  </h3>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryCard;
