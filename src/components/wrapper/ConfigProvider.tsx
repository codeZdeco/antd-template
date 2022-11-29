import { ConfigProvider } from "antd";
import { useAppSelector } from "store";
import { themes } from "configs";
import { useMemo } from "react";
import { Global } from "@emotion/react";

export interface XConfigProviderProps {
  children?: React.ReactNode;
}

const XConfigProvider = (props: XConfigProviderProps) => {
  const { selected: selectedThemeKey, ...restConfigProps } = useAppSelector(
    (state) => state.app.theme,
  );

  const selectedTheme = useMemo(
    () => themes[selectedThemeKey],
    [selectedThemeKey],
  );

  return (
    <>
      <Global
        styles={{
          ".ant-layout-sider-trigger": {
            backgroundColor:
              selectedTheme && selectedTheme.components?.Layout?.colorBgTrigger,
          },
        }}
      />
      <ConfigProvider {...restConfigProps} theme={selectedTheme}>
        {props.children}
      </ConfigProvider>
    </>
  );
};

export default XConfigProvider;
