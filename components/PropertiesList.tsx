import React from "react";
import PropertyCard from "./PropertyCard";

function PropertiesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-12 lg:gap-14">
      {Array(20)
        .fill(null)
        .map((_, index) => (
          <PropertyCard key={index} />
        ))}
    </div>
  );
}

export default PropertiesList;
