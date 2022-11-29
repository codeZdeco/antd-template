import { MenuProps } from "antd";
import {
  PieChartOutlined,
  ProjectOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { paths } from "constant";

export type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", paths.home, <ProjectOutlined />),
  getItem("Management", "management", <PieChartOutlined />, [
    getItem("Event", paths.event, <CalendarOutlined />),
  ]),
];

export default items;
