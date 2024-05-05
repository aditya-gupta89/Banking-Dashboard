import React from "react";
import CreditCard from "./CreditCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CreditCards = ({ cards }: any) => {
  return (
    <div className="relative w-[86%] m-auto">
      <Carousel >
        <CarouselContent >
          {cards.map((card: any) => (
            <CarouselItem className="md:basis-[20rem]">
            <CreditCard key={card.id} {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="absolute bottom-2 left-3 text-left">
        <ul className="flex space-x-2">
          {cards.map((_, index: number) => (
            <li key={index}>
              <button className="text-white text-opacity-50 transition duration-300 ease-in-out hover:text-opacity-100">
                <span className="sr-only">Slide {index + 1}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreditCards;
