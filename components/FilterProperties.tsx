import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { DropDownItem, SelectedItem } from "@/Models/models";
import { FilterDropDown } from "./FilterDropDown";
import { ReceiptRussianRuble } from "lucide-react";
import { Button } from "./ui/button";
const frameworks: DropDownItem[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
function FilterProperties() {
  const selectedItems: SelectedItem[] = [];

  const handleSelectedItem = (item: SelectedItem) => {
    let index = selectedItems.findIndex((filter) => filter.key === item.key);
    if (index) {
      selectedItems[index] = { ...item };
      return;
    }
    selectedItems.push(item);
  };
  return (
    <div className="w-full flex items-center justify-center">
      <main className="translate-y-[-50%]">
        <Card>
          <CardHeader>
            <CardTitle>Search for available properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-11 gap-4">
              <div className="col-span-3">
                <FilterDropDown
                  items={frameworks}
                  filterKey="location"
                  icon="location"
                  handleSelected={handleSelectedItem}
                ></FilterDropDown>
              </div>

              <div className="col-span-3">
                <FilterDropDown
                  items={frameworks}
                  filterKey="propertyType"
                  icon="house"
                  handleSelected={handleSelectedItem}
                ></FilterDropDown>
              </div>

              <div className="col-span-3">
                <FilterDropDown
                  items={frameworks}
                  filterKey="propertySize"
                  icon="propertyLayout"
                  handleSelected={handleSelectedItem}
                ></FilterDropDown>
              </div>
              <div className="col-span-2">
                <Button variant="default" className="w-full">
                  Search Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default FilterProperties;
