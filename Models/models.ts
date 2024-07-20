export interface DropDownItem {
  value: string;
  label: string;
}
export type filterKeys = "location" | "propertySize" | "propertyType";

export interface SelectedItem {
  key: filterKeys;
  item: DropDownItem;
}

export const filterLabels: Record<filterKeys, string> = {
  location: "Location",
  propertySize: "Property Size",
  propertyType: "Property Type",
};
