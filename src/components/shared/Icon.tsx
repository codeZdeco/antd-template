import Icon from "@ant-design/icons";
import { ReactComponent as DashboardSvg } from "assets/icons/dashboard.svg";
import { ReactComponent as AgencySvg } from "assets/icons/agency.svg";

const mapper: {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
} = {
  dashboard: DashboardSvg,
  agency: AgencySvg,
};

export interface IconProps {
  name: string;
  className?: string;
  fill?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

function XIcon(props: IconProps) {
  const { name, ...restProps } = props;

  const Svg = mapper[name];

  return <Icon {...restProps} component={Svg} />;
}

export default XIcon;
