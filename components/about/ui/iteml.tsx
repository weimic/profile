import Link from "next/link";

export type ItemLProps = {
    title : string,
    date: string,
    subtitle: string,
    note: string,
    link: string
};

export default function ItemL(props : ItemLProps) {
    return (
        <div className="flex flex-col ml-1">
            <div className="flex flex-row justify-between">
                <div className="font-semibold text-[15px] text-foreground underline">
                    <Link href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</Link>
                </div>
                <div className="font-semibold text-[15px] text-foreground text-right">
                    {props.date}
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className="font-normal text-[15px] text-alt-foreground ">
                    {props.subtitle}
                </div>
                <div className="font-normal text-[15px] text-alt-foreground text-right">
                    {props.note}
                </div>
            </div>
        </div>
    )
}