export enum LangEnum {
  ru = "ru",
  en = "en",
  tr = "tr",
  ar = "ar",
}

export type LangTuple = 'ru' | 'en' | 'tr' | 'ar'

export const languages: { locale: LangEnum }[] = [
  {
    locale: LangEnum.ru,
  },
  {
    locale: LangEnum.en,
  },
  {
    locale: LangEnum.tr,
  },
  // ar-off
  {
    locale: LangEnum.ar,
  },
];
