export type ItemProps = {
    title : string,
    date: string,
    subtitle: string,
    note: string,
};

export default function Item(props : ItemProps) {
    return (
        <div className="flex flex-col ml-1">
            <div className="flex flex-row justify-between">
                <div className="font-semibold text-[15px] text-foreground">
                    {props.title}
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