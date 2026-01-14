import Item, {ItemProps} from "@/components/about/ui/item.tsx";

export default function Education() {
 return (
    <div className="flex flex-col w-[40%] min-w-sm p-4 gap-2">
        <div className="font-semibold text-[40px]"> 
                Education
        </div>

        <Item 
            title="Georgia Institute of Technology"
            date="May 2028"
            subtitle="Bachelor of Science in Computer Science"
            note="First-Year"/>

        <Item 
            title="Ward Melville High School"
            date="June 2025"
            subtitle="Honors Graduate, Excellence in Data Structures"
            note="GPA: 104.6"/>

        <Item 
            title="Relevant Coursework Taken"
            date=""
            subtitle="Data Structures, Differential Equations, Multivariable Calculus, Linear Algebra, Introduction to Object-Oriented Programming"
            note=""/>


    </div>
    
    
 );
}