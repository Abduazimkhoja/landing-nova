import cn from "classnames";
import dynamic from "next/dynamic";
import { FunctionComponent } from "react";

import { LayoutProps } from "./layout.props";

import { SideBarProvider } from "@/contexts/sidebar.context";

import { Footer } from "./footer/footer.component";

import styles from "./layout.module.scss";

const CleanHeader = dynamic(() => import("./clean-header/clean-header"), { ssr: false });

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={cn(styles.wrapper)}>
      <CleanHeader className={cn(styles.header)} />

      <main className={cn(styles.main)}>{children}</main>

      <Footer className={cn(styles.footer)} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <SideBarProvider isOpen={false}>
        <Layout>
          <Component {...props} />
        </Layout>
      </SideBarProvider>
    );
  };
};
