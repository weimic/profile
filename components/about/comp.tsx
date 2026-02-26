import Link from 'next/link';
import ItemL, {ItemLProps} from "@/components/about/ui/iteml.tsx";

export default function Comp() {
 return (
    <div className="flex flex-col w-[40%] min-w-sm p-4 gap-2">
        <div className="font-semibold text-[40px]"> 
                Competitions
        </div>
        <ItemL
            title="VisiUN Web Application"
            date="Feb. 2026"
            subtitle="Hacklytics"
            note="React, Next.js, Three.js"
            link="https://devpost.com/software/visiun"
            />

        <ItemL
            title="TypeFight Website"
            date="Nov. 2025"
            subtitle="HexDay"
            note="React, Next.js, MongoDB Atlas, Gemini API"
            link="https://devpost.com/software/typefight"
            />
        
        <ItemL
            title="Sprout Web Application"
            date="Nov. 2025"
            subtitle="AI ATL"
            note="React, Next.js, Firebase, Gemini API"
            link="https://devpost.com/software/sprout-u91sxf"
            />

        <ItemL
            title="Blue's Walk Windows Game"
            date="Oct. 2025"
            subtitle="ATLJam"
            note="Godot, GDScript"
            link="https://itch.io/jam/atljam25/rate/3935874"
            />

        <ItemL 
            title="TidBit Mobile Application"
            date="Sep. 2025"
            subtitle="HackGT"
            note="React Native, Expo, Gemini & OpenAI API"
            link="https://devpost.com/software/tidbit-4yacw1"/>
    </div>
    
    
 );
}