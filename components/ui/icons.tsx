import { MapPin, House, LayoutPanelLeft } from "lucide-react";
const iconMap = {
  location: MapPin,
  house: House,
  propertyLayout: LayoutPanelLeft,
};

export type IconKey = keyof typeof iconMap;

interface IconProps {
  name: IconKey;
  className: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} />;
};
