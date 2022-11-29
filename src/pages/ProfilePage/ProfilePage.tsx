import { Row, Col, Button, Calendar } from "antd";
import { PlainLayout } from "components/layout";
import { COPYRIGHT } from "constant";
import {
  ProfileCard,
  SkillBox,
  CommunityBox,
  ActivityCard,
  NewPostBox,
  PostInfoBox,
} from "./partials";

export interface ProfilePageProps {}

const Page: React.FC<ProfilePageProps> = () => {
  return (
    <PlainLayout
      HeaderProps={{
        title: "Good morning!",
      }}
      FooterProps={{
        children: COPYRIGHT,
        className: "text-center",
      }}
      className='bg-inherit'
    >
      <Row gutter={[16, 8]}>
        <Col span={6}>
          <div className='flex flex-col gap-8 sticky top-0'>
            <ProfileCard />
            <SkillBox />
            <CommunityBox />
          </div>
        </Col>
        <Col span={12}>
          <div className='flex flex-col gap-4'>
            <NewPostBox />
            <PostInfoBox />
            <PostInfoBox />
            <Button className='w-full' type='dashed'>
              read more
            </Button>
          </div>
        </Col>
        <Col span={6}>
          <div className='flex flex-col gap-8 sticky top-0'>
            <Calendar fullscreen={false} />
            <ActivityCard />
          </div>
        </Col>
      </Row>
    </PlainLayout>
  );
};

export default Page;
