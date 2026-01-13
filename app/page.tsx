import NavBar from '@/components/nav.tsx';
import Main from "@/components/front/front";
import Sphere from "@/components/front/Photo";


export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center gap-100 max-lg:flex-col">
        <div className="flex">
          <Main/>
        </div>
        <div className="">
          <Sphere/>
        </div>
        
      </div>
      
    </>
  );
}
