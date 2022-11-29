import { ConfigProvider, theme } from "antd";

const { defaultAlgorithm, darkAlgorithm } = theme;

export interface XConfigProviderProps {
  children?: React.ReactNode;
}

const XConfigProvider = (props: XConfigProviderProps) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: [defaultAlgorithm, darkAlgorithm],
        token: {
          colorBgLayout: "#22272e",
          colorPrimary: "#316dca",
          colorBgBase: "#2d333b",
          colorBorder: "#464e58",
          colorSuccess: "#9be9a8",
          colorError: "#ce504a",
        },
        components: {
          Button: {
            boxShadow: "none",
          },
          Layout: {
            colorBgHeader: "#2d333b",
            colorBgTrigger: "#464e58",
          },
          Card: {
            colorBgLayout: "#282828",
          },
          Input: {
            colorBgContainer: "#1c2128",
          },
          Select: {
            colorBgContainer: "#1c2128",
          },
          DatePicker: {
            colorBgContainer: "#1c2128",
          },
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};

export default XConfigProvider;
