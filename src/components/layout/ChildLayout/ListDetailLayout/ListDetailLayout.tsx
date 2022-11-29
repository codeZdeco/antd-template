import { Col, ColProps, Row, RowProps } from "antd";
import withBaseChildLayout from "../withBaseChildLayout";
import { BaseChildLayoutProps } from "../BaseChildLayout";

export interface ListDetailItemLayoutProps extends ColProps {}

export const List: React.FC<ListDetailItemLayoutProps> = (props) => {
  return <Col flex={4} {...props} />;
};

export const Detail: React.FC<ListDetailItemLayoutProps> = (props) => {
  return <Col flex={8} {...props} />;
};

export interface ListDetailLayoutProps
  extends React.FC<RowProps & BaseChildLayoutProps> {
  List: typeof List;
  Detail: typeof Detail;
}

const Layout: ListDetailLayoutProps = (props) => {
  const { children } = props;

  return <Row {...props}>{children}</Row>;
};

Layout.List = List;
Layout.Detail = Detail;

export default withBaseChildLayout(Layout);
