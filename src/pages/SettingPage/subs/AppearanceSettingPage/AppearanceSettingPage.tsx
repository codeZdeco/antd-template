import { Space, Typography, Card, Image, Radio, Switch } from "antd";
import { SettingSection } from "pages/SettingPage/partials";
import { CirclePicker, ColorResult } from "react-color";
import { useAppDispatch, useAppSelector } from "store";
import { selectAccentColor, selectTheme } from "store/app/theme";

const { Text } = Typography;
const { Meta } = Card;

const themeList = [
  {
    key: "dark",
    name: "Dark",
    img: "/images/themes/dark-theme.png",
  },
  {
    key: "default",
    name: "Light",
    img: "/images/themes/light-theme.png",
  },
];

export interface AppearanceSettingPageProps {}

const Page: React.FC<AppearanceSettingPageProps> = () => {
  const dispatch = useAppDispatch();
  const { selected, colorPrimary } = useAppSelector((state) => state.app.theme);

  const handleChangeTheme = (themeKey: string) =>
    dispatch(selectTheme(themeKey));

  const handleChangeColorPrimary = (colorHex: ColorResult) =>
    dispatch(selectAccentColor(colorHex.hex));

  return (
    <Space direction='vertical' className='w-full'>
      <SettingSection title='Theme' className='w-full mb-8'>
        <Text>Customize your UI theme</Text>
        <Space direction='horizontal'>
          {themeList.map((themeValue) => (
            <Card
              key={themeValue.key}
              size='small'
              hoverable
              style={{ width: 240 }}
              onClick={() => handleChangeTheme(themeValue.key)}
              cover={
                <Image
                  height={180}
                  alt={`${themeValue.key}-theme`}
                  preview={false}
                  src={themeValue.img}
                />
              }
            >
              <div className='flex items-center justify-between'>
                <Meta title={themeValue.name} />
                <Radio checked={selected === themeValue.key} />
              </div>
            </Card>
          ))}
        </Space>
      </SettingSection>
      <SettingSection title='Accent color' className='w-full mb-8'>
        <div className='flex items-start justify-between'>
          <Text>Choose your accent color</Text>
          <Space>
            <CirclePicker
              color={colorPrimary}
              onChange={handleChangeColorPrimary}
            />
          </Space>
        </div>
      </SettingSection>
      <SettingSection title='Compact style' className='w-full mb-8'>
        <div className='flex items-start justify-between'>
          <Text>Choose your application style is compact or not</Text>
          <Space>
            <Switch />
          </Space>
        </div>
      </SettingSection>
    </Space>
  );
};

export default Page;
