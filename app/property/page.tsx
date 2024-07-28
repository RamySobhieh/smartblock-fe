"use client";
import Carousel from "@/components/Carousel";
import { Main } from "@/components/craft";
import SpecsCard from "@/components/SpecsCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MarkdownRenderer from "@/components/ui/markdown";
import React from "react";

function page() {
  const propertyDetails = `
# Charming Sunnyville Residence

Welcome to 1234 Maple Lane, a delightful family home nestled in the heart of Sunnyville. This spacious property offers the perfect blend of comfort, style, and functionality, making it an ideal choice for those seeking a move-in ready home in a sought-after neighborhood.

As you step through the front door, you'll be greeted by an open and airy floor plan that seamlessly connects the living spaces. The natural light flooding through large windows creates a warm and inviting atmosphere, perfect for both relaxation and entertainment.

## Property Details

- **Address:** 1234 Maple Lane, Sunnyville, CA 90210
- **Price:** $789,000
- **Square Footage:** 2,450 sq ft
- **Bedrooms:** 4
- **Bathrooms:** 2.5
- **Lot Size:** 0.3 acres
- **Year Built:** 1998

## Features

The heart of this home is undoubtedly the stunning kitchen, featuring:

- Sleek granite countertops
- Modern stainless steel appliances
- Ample cabinet space
- A convenient breakfast bar

Other notable features include:
- Hardwood floors throughout the main level
- Master suite with a luxurious walk-in closet and en-suite bathroom
- Finished basement with a state-of-the-art home theater setup
- Dual-zone HVAC system for optimal comfort
- Attached two-car garage
- Inviting backyard patio with a built-in BBQ area, perfect for outdoor entertaining

## Recent Updates

This well-maintained home has seen several recent improvements:

- New roof installed (2021)
- Kitchen appliances upgraded (2022)
- Exterior repainted (2023)

Don't miss this opportunity to make this lovely property your new home. Its combination of modern amenities, recent updates, and prime location make it a rare find in today's competitive real estate market. Schedule your viewing today and experience the charm of 1234 Maple Lane for yourself!
`;
  return (
    <div className="flex justify-center items-center flex-col w-full mt-24">
      <div className="flex max-w-[1400px] w-full justify-center items-center flex-col p-4 md:p-12">
        {/* TITLE */}
        <div className="items-start flex flex-col gap-4 w-full mb-14">
          <div className=" max-w-2xl">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-start">
              621 E Le Claire Rd
            </h1>
          </div>
          <div className=" max-w-3xl">
            <p className="text-xl text-muted-foreground text-start">
              Eldridge, IA 52748
            </p>
          </div>
        </div>

        {/* Image and spec cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-14">
          <div className="col-span-1 w-full">
            <div className="flex w-fulll h-full items-center justify-center">
              <Carousel />
            </div>
          </div>
          <div className="col-span-1 w-full">
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-between">
                    <h3>Estimated Price</h3>
                    <h3>55$</h3>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <div className="col-span-1">
                    <SpecsCard />
                  </div>
                  <div className="col-span-1">
                    <SpecsCard />
                  </div>
                  <div className="col-span-1">
                    <SpecsCard />
                  </div>
                  <div className="col-span-1">
                    <SpecsCard />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between flex-col gap-4 sm:flex-row w-full">
                  <Button size={"lg"} className="w-full">
                    Buy
                  </Button>
                  <Button size={"lg"} variant={"outline"} className="w-full">
                    Sell
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="flex flex-col items-start w-full justify-start mt-20">
          <MarkdownRenderer content={propertyDetails} />
        </div>
      </div>
    </div>
  );
}

export default page;
