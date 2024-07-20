import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { Bed, Proportions, ShowerHead } from "lucide-react";

function PropertyCard() {
  return (
    <Card className="flex flex-col w-full overflow-hidden">
      <div className="aspect-video relative w-full">
        <Badge variant="default" className="absolute top-4 left-4 z-10">
          New Listing
        </Badge>
        <Image
          className="w-full h-full object-cover object-center"
          src={
            "https://images.unsplash.com/photo-1721223016439-76be1d2b3bc8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Image for property"
          fill
        ></Image>
      </div>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row flex-wrap gap-4 justify-between px-1">
          <div className="flex flex-row space-x-2 items-center">
            <Bed className="w-4 h-4 text-muted-foreground" />
            <p className="text-muted-foreground text-nowrap">3 Beds</p>
          </div>

          <div className="flex flex-row space-x-2 items-center">
            <ShowerHead className="w-4 h-4 text-muted-foreground" />
            <p className="text-muted-foreground text-nowrap">4 Baths</p>
          </div>

          <div className="flex flex-row space-x-2 items-center">
            <Proportions className="w-4 h-4 text-muted-foreground" />
            <p className="text-muted-foreground text-nowrap">4 Beds</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <Button>Buy Now</Button>
          <h4 className="text-foreground">Available</h4>
        </div>
      </CardFooter>
    </Card>
  );
}

export default PropertyCard;
