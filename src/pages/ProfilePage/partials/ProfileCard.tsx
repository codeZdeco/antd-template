import {
  EditOutlined,
  MailOutlined,
  UserOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { Card, Avatar, Image } from "antd";

function ProfileCard() {
  return (
    <Card
      className='relative border-none'
      cover={
        <Image
          style={{
            height: 100,
          }}
          alt='example'
          src='https://cdn.stocksnap.io/img-thumbs/280h/bokeh-lights_CXNXR1QOFU.jpg'
        />
      }
      actions={[<EditOutlined key='edit' />]}
    >
      <Meta
        title='Anonymous'
        description='Software Engineer'
        className='mb-4'
      />
      <Meta
        className='mb-2'
        description={
          <span>
            <EnvironmentOutlined /> HCM city
          </span>
        }
      />
      <Meta
        className='mb-2'
        description={
          <span>
            <MailOutlined /> anonymous@gmail.com
          </span>
        }
      />
      <Avatar
        className='absolute left-[1rem] top-[50px]'
        shape='square'
        size={64}
        icon={<UserOutlined />}
      />
    </Card>
  );
}

export default ProfileCard;
