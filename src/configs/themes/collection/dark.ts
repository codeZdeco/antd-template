import { theme } from "antd";
import { ThemeConfig } from "antd/es/config-provider/context";

const { defaultAlgorithm, darkAlgorithm } = theme;

const instance: ThemeConfig = {
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
};

export default instance;
