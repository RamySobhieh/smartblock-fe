import React from "react";
import PropertiesList from "./PropertiesList";

function PropertySection() {
  return (
    <div className="flex justify-center items-center">
      <main className="flex flex-col pt-0 mt-0">
        <h2 className="mb-4 md:mb-12">Our properties</h2>
        <PropertiesList />
      </main>
    </div>
  );
}

export default PropertySection;
