import cn from "classnames";
import { FC } from "react";

import { HomeHeroProps } from "./home-hero.props";

import { DOMAIN } from "@/helpers/api.helper";

import styles from "./home-hero.module.scss";

export const HomeHero: FC<HomeHeroProps> = ({ banners }) => {
  const { id, posterDesktop, posterMobile, title, description, subtitle } = banners[0];

  return (
    <div className={styles.wrapper}>

      <div className={cn(styles.background)}>
        <div
          className={cn(styles.background__desktop)}
          style={{ backgroundImage: `url('${DOMAIN}${posterDesktop}')` }}
        />

        <div
          className={cn(styles.background__mobile)}
          style={{ backgroundImage: `url('${DOMAIN}${posterMobile ? posterMobile : posterDesktop}')` }}
        />
      </div>

      <div className={cn(styles.wrap, "container")}>
        <div className={styles.content}>
          <h1 className={cn("color-white")} dangerouslySetInnerHTML={{ __html: title }} />

          <div
            className={cn(styles.description, "subtitle-lg", "color-white")}
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div
            className={cn(styles.subtitle, "subtitle-md", "color-white")}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>
      </div>


            {/* <Slider className={cn(styles.swiper)} type={"full-screen"}>
        {banners.map(({ id, posterDesktop, posterMobile, title, description, subtitle }, index) => {
          return (
            <SwiperSlide className={cn(styles.slide)} key={id}>
             <>
                <div className={cn(styles.background)}>
                  <div
                    className={cn(styles.background__desktop)}
                    style={{ backgroundImage: `url('${DOMAIN}${posterDesktop}')` }}
                  />

                  <div
                    className={cn(styles.background__mobile)}
                    style={{ backgroundImage: `url('${DOMAIN}${posterMobile ? posterMobile : posterDesktop}')` }}
                  />
                </div>

                <div className={cn(styles.wrap, "container")}>
                  <div className={styles.content}>
                    <h1 className={cn("color-white")} dangerouslySetInnerHTML={{ __html: title }} />

                    <div
                      className={cn(styles.description, "subtitle-lg", "color-white")}
                      dangerouslySetInnerHTML={{ __html: description }}
                    />

                    <div
                      className={cn(styles.subtitle, "subtitle-md", "color-white")}
                      dangerouslySetInnerHTML={{ __html: subtitle }}
                    />
                  </div>
                </div>
             </>
            </SwiperSlide>
          );
        })}
      </Slider> */}
    </div>
  );
};

export default HomeHero;
