import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { FC } from "react";

import { IBanner } from "@/types/banner.interface";
import { ICategory } from "@/types/category.interface";

import { getAll as getAllBanners } from "@/api/banner.api";
import { getAll as getAllCategories } from "@/api/category.api";
import { getAll as getAllCatalogs } from "@/api/catalog.api";
import { getAll as getAllCertificates } from "@/api/certificate.api";
import { getAll as getAllPosts } from "@/api/post.api";
import { getAll as getAllAbouts } from "@/api/about.api";

import { withLayout } from "@/layout/layout";

import { ICatalog } from "@/types/catalog.interface";
import { ICertificate } from "@/types/certificate.interface";
import { IPost } from "@/types/post.interface";
import { HomeView } from "@/views";
import { IAbout } from "@/types/about.interface";
import { ContactTypeEnum } from "@/enums/contact-type.enum";
import { IContact } from "@/types/contact.interface";

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

export const getStaticProps: GetStaticProps<HomePageProps> = async ({ locale }) => {
  try {
    const {
      data: { data: banners },
    } = await getAllBanners({ language: locale });

    const {
      data: { data: categories },
    } = await getAllCategories({ language: locale, limit: 12 });
    const {
      data: { data: catalogs },
    } = await getAllCatalogs({ language: locale, limit: 12 });
    const {
      data: { data: posts },
    } = await getAllPosts({ language: locale, limit: 12 });

    const { data: certificates } = await getAllCertificates({ language: locale });

    const { data: centrals } = await getContactByType(ContactTypeEnum.CENTRAL, locale);
    const { data: factories } = await getContactByType(ContactTypeEnum.FACTORY, locale);

    const {
      data: { data: abouts },
    } = await getAllAbouts({ language: locale });

    return {
      props: {
        banners,
        categories,
        certificates,
        catalogs,
        posts,
        abouts,
        centrals,
        factories,
        ...(await serverSideTranslations(String(locale))),
      },
      revalidate: 1,
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
  certificates: ICertificate[];
  categories: ICategory[];
  posts: IPost[];
  catalogs: ICatalog[];
  abouts: IAbout[];
  centrals: IContact[];
  factories: IContact[];
}
