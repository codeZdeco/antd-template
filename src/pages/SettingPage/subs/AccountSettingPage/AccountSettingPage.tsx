import { Space, Typography, Button, theme } from "antd";
import { SettingSection } from "pages/SettingPage/partials";

const { Text, Link, Title } = Typography;
const { useToken } = theme;

export interface AccountSettingPageProps {}

const Page: React.FC<AccountSettingPageProps> = () => {
  const config = useToken();

  return (
    <Space direction='vertical' className='w-full'>
      <SettingSection title='Change username' className='w-full mb-8'>
        <Text>
          Changing your username can have <Link>unintended side effects</Link>
        </Text>
        <Button>Change username</Button>
        <Text type='secondary'>
          Looking to manage account security settings? You can find them in the{" "}
          <Link>Password and authentication</Link> page
        </Text>
      </SettingSection>
      <SettingSection title='Export account data' className='w-full mb-8'>
        <Text>
          Export all repositories and profile metadata for{" "}
          <Text strong>@anonymous</Text>. Exports will be available for 7 days.
        </Text>
        <Button>Start export</Button>
      </SettingSection>
      <SettingSection
        title={
          <Title level={3} type='danger'>
            Delete account
          </Title>
        }
        className='w-full'
      >
        <Text>
          You must remove yourself, transfer ownership, or delete these
          organizations before you can delete your user.
        </Text>
        <Button danger>Delete your account</Button>
      </SettingSection>
    </Space>
  );
};

export default Page;
