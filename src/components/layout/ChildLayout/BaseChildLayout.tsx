/**
 * Base Layout for nested components
 * # Usages:
 *
 * <Layout
 *  HeaderProps={{
 *    title: 'Page Title'
 *  }}
 *  FooterProps={{
 *    children: 'All copyright cozde'
 *  }}
 * >
 *  Content goes here
 * </Layout>
 */
import { PageHeaderProps } from "@ant-design/pro-layout";
import { Layout } from "antd";
import clsx from "clsx";
import React from "react";
import { PageHeader } from "components/shared";

const { Footer } = Layout;

export interface BaseChildLayoutProps {
  /**
   * Ref for HeaderProps: https://ant.design/components/page-header/#header
   */
  HeaderProps?: PageHeaderProps;
  /**
   * Ref for FooterProps: N/A
   */
  FooterProps?: React.HTMLAttributes<HTMLElement>;
  children?: React.ReactElement;
}

const XLayout: React.FC<BaseChildLayoutProps> = (props) => {
  const { children, HeaderProps, FooterProps } = props;

  return (
    <>
      {HeaderProps && (
        <PageHeader
          {...HeaderProps}
          className={clsx(HeaderProps.className, "px-0")}
        />
      )}
      <div className='overflow-x-hidden overflow-y-auto'>{children}</div>
      {FooterProps && <Footer {...FooterProps} />}
    </>
  );
};

export default XLayout;
