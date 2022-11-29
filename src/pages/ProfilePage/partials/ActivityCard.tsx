import { Card, Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

function ActivityBox() {
  return (
    <Card
      title='Recent activities'
      size='small'
      className='h-[300px] bg-inherit'
    >
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item dot={<ClockCircleOutlined />} color='red'>
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </Card>
  );
}

export default ActivityBox;
