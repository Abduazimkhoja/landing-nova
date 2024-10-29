import { getTags } from "@/api/tag.api";
import { languages } from "@/helpers/languages.helper";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useReducer, useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "./lang-select.module.scss";

type Props = {
  className?: string;
} & JSX.IntrinsicElements["div"];

const LangSelect: FC<Props> = ({ className, ...rest }) => {
  const { i18n } = useTranslation();
  let { replace, query, pathname, reload } = useRouter();

  const locales = languages.filter((language) => language.locale !== i18n.language);

  const handleChange = async (locale: string) => {
    let currentQuery = { ...query };

    const isArabicLocale = i18n.language === "ar" || locale === "ar";

    if (query.tags) {
      const { data } = await getTags(typeof query.tags === "string" ? [query.tags] : [...query.tags], {
        language: locale,
      });

      currentQuery = { ...query, tags: data };
    }

    await replace({ pathname, query: currentQuery }, "", { locale, scroll: false });
    if (isArabicLocale) reload();
  };

  const options = locales.map(({ locale }) => ({
    option: locale,
    optionOnClick: () => handleChange(locale),
  }));

  return (
    <div className={`${styles.select} ${className} active`} {...rest}>
      <button
        className={styles.btn}
        role="combobox"
        aria-label="select button"
        aria-haspopup="listbox"
        aria-expanded="false"
        aria-controls="select-dropdown"
      >
        <span className={styles["selected-value"]}></span>
        <span className={styles.arrow}></span>
      </button>
      <ul className={styles.dropdown} role="listbox" id="select-dropdown">
        <li role="option" aria-selected={false}>
          <input checked disabled type="radio" id="github" name="social-account" />
          <label htmlFor="ru">
            <Image width="20" height="20" src="/icons/flags/ru-flag.svg" alt="flag-ru" />
            ru
          </label>
        </li>
        <li role="option" aria-selected={false}>
          <input type="radio" id="instagram" name="social-account" />
          <label htmlFor="en">
            <Image width="20" height="20" src="/icons/flags/en-flag.svg" alt="flag-en" />
            en
          </label>
        </li>
        <li role="option" aria-selected={false}>
          <input type="radio" id="instagram" name="social-account" />
          <label htmlFor="ar">
            <Image width="20" height="20" src="/icons/flags/ar-flag.svg" alt="flag-ar" />
            ar
          </label>
        </li>
        <li role="option" aria-selected={false}>
          <input type="radio" id="instagram" name="social-account" />
          <label htmlFor="tr">
            <Image width="20" height="20" src="/icons/flags/tr-flag.svg" alt="flag-tr" />
            tr
          </label>
        </li>
      </ul>
    </div>
  );
};

export default LangSelect;
