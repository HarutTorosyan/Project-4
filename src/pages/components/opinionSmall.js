export default function OpinionSmall(props) {
    return (
        <>
            <div className="flex flex-col space-y-4">
                <div className="text-[#afb8b8] text-[22px] tracking-[0.04em] font-miniver text-center">
                    {props.desc}
                </div>
                <div className="text-textGold font-Caviar uppercase text-[19px] text-center">
                    {props.author}
                </div>
                <div className="text-white font-josefin text-[19px] text-center">
                    {props.profession}
                </div>
            </div>
        </>
    )
}