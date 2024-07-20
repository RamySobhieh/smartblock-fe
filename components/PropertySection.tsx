import React from "react";
import PropertiesList from "./PropertiesList";

function PropertySection() {
  return (
    <div className="flex justify-center items-center mb-12">
      <div className="flex flex-col pt-0 mt-0 w-full max-w-[1400px]">
        <h2 className="mb-4 md:mb-12">Our properties</h2>
        <PropertiesList />
      </div>
    </div>
  );
}

export default PropertySection;
