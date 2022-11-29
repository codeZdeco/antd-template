import { Card, Col, Row, Segmented, Button } from "antd";
import { PlainLayout } from "components/layout";
import { COPYRIGHT } from "constant";
import {
  SummaryPieChart,
  TinyChart,
  TrackingChart,
  WatchTable,
} from "./partials";
import {
  ExpandOutlined,
  ReloadOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { useHelmet } from "hooks";

export interface HomePageProps {}

const Page: React.FC<HomePageProps> = (props) => {
  useHelmet({
    title: "Home Page",
  });

  return (
    <PlainLayout
      HeaderProps={{
        title: "Dashboard",
        extra: [
          <Button type='text' key='reload-btn' icon={<ReloadOutlined />} />,
          <Button type='text' key='expand-btn' icon={<ExpandOutlined />} />,
        ],
      }}
      FooterProps={{
        children: COPYRIGHT,
        className: "text-center",
      }}
      className='bg-inherit'
    >
      <Row gutter={[8, 8]}>
        <Col span={18}>
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <Card
                size='small'
                className='h-[200px] border-none flex flex-col'
              >
                <TinyChart />
              </Card>
            </Col>
            <Col span={6}>
              <Card size='small' className='h-[200px] border-none'>
                <TinyChart />
              </Card>
            </Col>
            <Col span={6}>
              <Card size='small' className='h-[200px] border-none'>
                <TinyChart />
              </Card>
            </Col>
            <Col span={6}>
              <Card size='small' className='h-[200px] border-none'>
                <TinyChart />
              </Card>
            </Col>
            <Col span={24}>
              <Card
                size='small'
                title='Chart Tracking'
                className='h-[250px] border-none'
                extra={[
                  <Segmented
                    size='small'
                    options={["Daily", "Weekly", "Monthly"]}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  />,
                ]}
              >
                <TrackingChart />
              </Card>
            </Col>
            <Col span={24}>
              <Card
                size='small'
                title='Watch list'
                className='h-[250px] border-none'
                extra={[
                  <Button
                    icon={<EllipsisOutlined />}
                    type='text'
                    size='small'
                  />,
                ]}
              >
                <WatchTable />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row gutter={[8, 8]}>
            <Col span={24}>
              <Card
                size='small'
                title='Summary'
                className='h-[250px] border-none'
                extra={[
                  <Button
                    icon={<EllipsisOutlined />}
                    type='text'
                    size='small'
                  />,
                ]}
              >
                <SummaryPieChart />
              </Card>
            </Col>
            <Col span={24}>
              <Card
                size='small'
                title='Overview'
                className='h-[458px] border-none'
                extra={[
                  <Button
                    icon={<EllipsisOutlined />}
                    type='text'
                    size='small'
                  />,
                ]}
              >
                {/* <DotMap {...mapConfig} /> */}
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </PlainLayout>
  );
};

export default Page;
