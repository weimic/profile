import React from 'react';
import Image from "next/image";
import gradhappy from '@/public/images/gradhappy.jpg';

export default function Photo() {
    return (
        <>
            <div className="w-[100%]">
                <Image 
                    src={gradhappy}
                    alt="Graduation!" 
                    width={475} 
                    height={576} 
                    className="max-lg:w-50 backface rounded -mt-87 lg:mt-50 animate-revolveXY shadow-xl object-cover"/>
            </div>
        </>
    );
}   