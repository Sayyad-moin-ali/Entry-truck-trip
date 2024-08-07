"use client"
import React, { useState, useEffect } from 'react';
import { sliderData } from '../Data';
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardContent from '@/components/ui/CardContent';
import Card from '@/components/ui/Card';



const Slider = () => {


  return (

    <div className='flex flex-col justify-center items-center w-full h-full my-16'>
      <h1 className='text-3xl font-serif font-bold mb-5'>Our Testimonials</h1>
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{
          align: "start",
        }}
        className=" w-[80%]"
      >
        <CarouselContent>
          {sliderData.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3  ">
              <div className="p-1 w-full h-full ">
                <Card>
                  <CardContent className="flex h-[250px] flex-col    items-center justify-around ">
                    <p className="text-lg">{item.paragraph}</p>
                    <h1 className='text-xl font-serif font-bold border-b-2 border-black'>{item.name}</h1>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );

};

export default Slider;
