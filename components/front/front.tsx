import NavBar from '@/components/nav.tsx';

export default function Main() {
 return (
    <div className="lg:w-30% font-semibold ml-10 mt-10 lg:ml-0 lg:mt-30 animate-fadein flex flex-col">
        <div className="text-[85px] lg:text-[150px] -ml-1 lg:-ml-2"> 
            Michael
        </div>
        <div className="text-[85px] lg:text-[150px] -mt-12 lg:-mt-24">
            Wei.
        </div>
        <div className="text-[16px] lg:text-[20px] text-alt-foreground -mt-5 lg:-mt-10 ml-2">
            Computer Science @ Georgia Tech.
        </div>
        <div className="ml-2 mt-10">
            <NavBar/>
        </div>
        
    </div>
 );
}