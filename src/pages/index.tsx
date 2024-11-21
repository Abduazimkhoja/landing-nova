import { FC } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { IBanner } from "@/types/banner.interface";
import { IAbout } from "@/types/about.interface";
import { ContactTypeEnum } from "@/enums/contact-type.enum";
import { IContact } from "@/types/contact.interface";

import { getAll as getAllBanners } from "@/api/banner.api";
import { getAll as getAllAbouts } from "@/api/about.api";

import { withLayout } from "@/layout/layout";

import { HomeView } from "@/views";

import { getByType as getContactByType } from "@/api/contact.api";

const HomePage: FC<HomePageProps> = ({ _nextI18Next, ...rest }) => {
  return (
    <>
      <Head>
        <title>NOVA Plastik</title>
      </Head>

      <HomeView {...rest} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({ locale }) => {
  try {
    const {
      data: { data: banners },
    } = await getAllBanners({ language: locale });

    const { data: factories } = await getContactByType(ContactTypeEnum.FACTORY, locale);

    const {
      data: { data: abouts },
    } = await getAllAbouts({ language: locale });

    return {
      props: {
        banners,
        abouts,
        factories,
        ...(await serverSideTranslations(String(locale))),
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default withLayout(HomePage);

export interface HomePageProps extends Record<string, unknown> {
  banners: IBanner[];
  abouts: IAbout[];
  factories: IContact[];
}
