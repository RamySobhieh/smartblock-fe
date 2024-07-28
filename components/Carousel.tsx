"use client";
import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarouselExample = () => {
  const imgArr = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];
  return (
    <Carousel orientation="vertical" className="flex items-center gap-2">
      <div className="relative basis-3/4">
        <CarouselMainContainer className="h-[460px]">
          {imgArr.map((img, index) => (
            <SliderMainItem
              key={index}
              className="border border-muted flex items-center justify-center rounded-md overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
      </div>
      <CarouselThumbsContainer className="h-[460px] basis-1/4 gap-2">
        {imgArr.map((img, index) => (
          <SliderThumbItem
            key={index}
            index={index}
            className="rounded-md bg-transparent"
          >
            <span className="border border-muted flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover object-center w-full h-full"
                />
              </div>
            </span>
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export default CarouselExample;
