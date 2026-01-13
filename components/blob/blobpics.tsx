import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { ImageProps } from "next/image";

import b1sg from '@/public/images/b1sgAR.gif';
import b1s1 from '@/public/images/b1s1.png';
import b1s2 from '@/public/images/b1s2.png';
import b1s3 from '@/public/images/b1s3.png';
import b1s4 from '@/public/images/b1s4.png';






function Pic({...props}: ImageProps) {
    return(
            <Image
            className="w-full h-full object-cover border-3 border-red-300 rounded"
            width={1174}
            height={858}  
                {...props}
                /> 
        
    );
}
// Top off => 860
// Sides -6, end 1174
// Bottom off => 858

// 1174 x 858
// => 587 x 429

export default function BlobPics() {
    return(
        <div className="flex w-[350px] lg:w-200">
            <Carousel
                opts={{
                    loop:true,
                }}>
                <CarouselContent>
                    <CarouselItem>
                        <Pic
                            src={b1sg}
                            alt="Gameplay" 
                        />
                    </CarouselItem>
                    
                    <CarouselItem>
                        <Pic
                            src={b1s1}
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                    <CarouselItem>
                        <Pic
                            src={b1s2}
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                    <CarouselItem>
                        <Pic
                            src={b1s3}
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                    <CarouselItem>
                        <Pic
                            src={b1s4}
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                
                <CarouselNext />
            </Carousel>
        </div>
        
    );
}