export default function SmallMenu(props) {
    return(
        <>
               <div className="w-full lg:w-1/2 sm:pr-8 mt-10">
                <div className="flex justify-between max-sm:flex-col max-sm:space-y-2">
                    <div className="flex-shrink-0  text-[14px] tracking-[0.22em] sm:text-[19px] text-textGold font-Caviar font-bold">{props.title}</div>
                    <div className="max-sm:hidden Dotted-After  w-[100%] relative after:absolute flex items-center after:w-[96%] after:h-[8px] after:right-[2%]"></div>
                    <div className="font-bold  font-Caviar text-textGold">{props.price}</div>
                </div>
                <div className="font-josefin sm:text-[19px] text-white">
                    {props.description}
                </div>
            </div>
        </>
    )
}