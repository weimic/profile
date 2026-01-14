import Main from '@/components/about/main.tsx';
import Edu from '@/components/about/edu.tsx';
import Act from '@/components/about/act.tsx';
import Comp from '@/components/about/comp';
import Volun from '@/components/about/volun.tsx';
import NavBar from '@/components/nav.tsx';
import Footer from '@/components/Footer.tsx';
import Me from '@/public/images/mepeace.jpg';
import Image from 'next/image';


export default function About() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center gap-x-10 -mt-10">
                <div className = "flex flex-wrap justify-between justify-center gap-x-60 gap-y-5 mt-40">
                    <div className = "flex h-[100%] flex-col animate-fadein">
                        <Main/>
                        <div className="mt-3">
                            <NavBar/>
                        </div>
                    </div>
                    <div className="flex flex-row h-[100%]">
                        <Image className="rounded-full p-3" src={Me} alt="Me" width={500}/>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-x-20 max-w-350">
                    <Edu/>
                    <Act/>
                </div>
                <div className="flex flex-wrap justify-center max-w-175 gap-x-20">
                    <Comp/>
                    {/* <Volun/> */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}