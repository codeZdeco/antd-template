import { Row, Col, Space, Divider } from "antd";
import { PlainLayout } from "components/layout";
import { COPYRIGHT } from "constant";
import { Menu } from "components/shared";
import {
  FormatPainterOutlined,
  UserOutlined,
  GroupOutlined,
  NotificationOutlined,
  CoffeeOutlined,
  IdcardOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuProps } from "components/shared/Menu";
import { useHelmet } from "hooks";

export interface SettingPageProps {
  children?: React.ReactNode;
}

const Page: React.FC<SettingPageProps> = (props) => {
  useHelmet({
    title: "Taimi - Setting",
  });
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const handleNavigate = (url: string) => navigate(url);

  const menus: (MenuProps & { key: string })[] = [
    {
      key: "general",
      items: [
        {
          key: "/settings/account",
          children: "Account",
          icon: <UserOutlined />,
          onClick: () => handleNavigate("account"),
        },
        {
          key: "/settings/appearance",
          children: "Appearance",
          icon: <FormatPainterOutlined />,
          onClick: () => handleNavigate("appearance"),
        },
        {
          key: "/settings/accessibility",
          children: "Accessibility",
          icon: <GroupOutlined />,
        },
        {
          key: "/settings/notifications",
          children: "Notifications",
          icon: <NotificationOutlined />,
        },
      ],
    },
    {
      key: "access",
      title: "Access",
      items: [
        {
          key: "/settings/sessions",
          children: "Sessions",
          icon: <CoffeeOutlined />,
        },
        {
          key: "/settings/authen",
          children: "Password and authen",
          icon: <IdcardOutlined />,
        },
      ],
    },
    {
      key: "security",
      title: "Security",
      items: [
        {
          key: "/settings/policy",
          children: "Policy",
          icon: <SafetyCertificateOutlined />,
        },
      ],
    },
  ];

  return (
    <PlainLayout
      className='bg-inherit'
      HeaderProps={{
        title: "Settings",
      }}
      FooterProps={{
        children: COPYRIGHT,
        className: "text-center",
      }}
    >
      <Row gutter={[8, 8]}>
        <Col span={4}>
          <Space direction='vertical' className='w-full'>
            {menus.map((value, index) => {
              const isLastElement = index === menus.length - 1;

              if (isLastElement) {
                return <Menu selected={location.pathname} {...value} />;
              }

              return (
                <>
                  <Menu selected={location.pathname} {...value} />
                  <Divider className='m-0' />
                </>
              );
            })}
          </Space>
        </Col>
        <Col span={20}>
          <div className='w-full max-w-[768px]'>{props.children}</div>
        </Col>
      </Row>
    </PlainLayout>
  );
};

export default Page;
