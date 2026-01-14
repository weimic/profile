import Item, {ItemProps} from "@/components/about/ui/item.tsx";

export default function Act() {
 return (
    <div className="flex flex-col w-[40%] min-w-sm p-4 gap-2">
        <div className="font-semibold text-[40px]"> 
                Activities
        </div>

        <Item
            title="GTGuessr Web Developer"
            date="Sep. 2025 - Present"
            subtitle="WebDev@GT"
            note="Firebase, Express.js, Next.js, Node.js, Tailwind CSS"/>

        <Item
            title="Assistant Concertmaster"
            date="Aug. 2025 - Present"
            subtitle="Georgia Tech Concert Orchestra"
            note="First Violinist"/>

        <Item
            title="Natural Language Processing Research Lead"
            date="June 2023 - Nov. 2023"
            subtitle="University of Groningen"
            note="Remote"/>


    </div>
    
    
 );
}