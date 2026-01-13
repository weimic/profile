import Image from "next/image";
import blobgun from '@/public/images/blobgun.png';
import NavBar from '@/components/nav.tsx';


export default function Blob() {
 return (
    <div className="w-[100%] flex flex-wrap gap-x-60 mt-30 justify-center">
        <div className="font-semibold animate-fadein flex-col">
            <div className="text-[80px] lg:text-[150px] lg:-ml-2"> 
                Blob
            </div>
            <br/>
            <div className="text-[80px] lg:text-[150px] -mt-18">
                Showdown.
            </div>
            <div className="text-[20px] text-alt-foreground -mt-4 lg:-mt-8 lg:ml-2">
                May - July 2024
            </div>
            <div className="ml-2 mt-3">
                <NavBar/>
            </div>
        </div>
        <div className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]">
            <Image 
                src={blobgun}
                alt="Player" 
                className="animate-revolveX"/>
        </div>
        
    </div>
    
    
 );
}