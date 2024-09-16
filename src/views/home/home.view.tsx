import { useTranslation } from "next-i18next";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import { HomeProps } from "./home.props";

import { CategoryCard, PostCard, ProductCard, Slider } from "@/components";
import HomeHero from "@/components/blocks/home-hero/home-hero";
import CountryCard from "@/components/ui/country-card";
import dynamic from "next/dynamic";
import AboutView from "../about/about.view";
import ContactView from "../contact/contact.view";
const StatsCard = dynamic(() => import("@/components/ui/stats-card"), { ssr: false });

export const HomeView: FC<HomeProps> = ({
  banners,
  categories,
  certificates,
  posts,
  catalogs,
  abouts,
  centrals,
  factories,
}) => {
  const { t } = useTranslation();

  //ставит ограничение на количество элементов
  const maxElemet = 12;
  // if (categories.length > maxElemet) categories.splice(maxElemet);
  // if (certificates.length > maxElemet) certificates.splice(maxElemet);
  // if (posts.length > maxElemet) posts.splice(maxElemet);
  // if (catalogs.length > maxElemet) catalogs.splice(maxElemet);

  return (
    <>
      <section>
        <HomeHero banners={banners} />
      </section>

      <CountryCard />
      <StatsCard />
      <AboutView abouts={abouts} />
      <ContactView centrals={[]} factories={factories} />

      {/* {!!categories.length && (
        <section className="container mb-80 products-slide">
          <h2 className="color-accent mb-30">{t("products")}</h2>
          <Slider mobile={true} type="dynamic" quantity={4}>
            {categories.length &&
              categories.map((category) => (
                <SwiperSlide key={category.id}>
                  <CategoryCard category={category} />
                </SwiperSlide>
              ))}
          </Slider>
        </section>
      )} */}

      {/* {!!certificates.length && (
        <section className="container mb-80">
          <h2 className="color-accent mb-30">{t("certificates")}</h2>
          <Slider mobile={true} type="dynamic" quantity={4}>
            {certificates.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <ProductCard card="certificate" product={item} />
                </SwiperSlide>
              );
            })}
          </Slider>
        </section>
      )}

      {!!catalogs.length && (
        <section className="container mb-80">
          <h2 className="color-accent mb-30">{t("catalogs")}</h2>
          <Slider mobile={true} type="dynamic" quantity={4}>
            {catalogs.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <ProductCard card="catalog" product={item} />
                </SwiperSlide>
              );
            })}
          </Slider>
        </section>
      )}

      {!!posts.length && (
        <section className="container mb-80">
          <h2 className="color-accent mb-30">{t("news")}</h2>
          <Slider mobile={true} type="dynamic" quantity={4}>
            {posts.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <PostCard post={item} />
                </SwiperSlide>
              );
            })}
          </Slider>
        </section>
      )} */}
    </>
  );
};

export default HomeView;
