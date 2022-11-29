import BaseLayout, { BaseChildLayoutProps } from "./BaseChildLayout";

export type BaseLayoutProps<T extends unknown> = T & BaseChildLayoutProps;

function withBaseChildLayout<T>(
  Page: React.ComponentType<T & BaseChildLayoutProps>
): React.FC<BaseLayoutProps<any>> {
  const RootPage = (props: T & BaseChildLayoutProps) => {
    const { FooterProps, HeaderProps } = props;

    return (
      <BaseLayout FooterProps={FooterProps} HeaderProps={HeaderProps}>
        <Page {...(props as any)} />
      </BaseLayout>
    );
  };

  return RootPage;
}

export default withBaseChildLayout;
