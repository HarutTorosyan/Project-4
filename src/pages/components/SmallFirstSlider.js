export default function SmallFirstSlider(props) {
    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center text-white" style={{ backgroundImage: `url(${props.bg})`}}>
                <div className="font-miniver  sm:text-[25px] text-textGold">{props.desc}</div>
                <div className="font-metropolis tracking-[16px] md:tracking-[28px] text-textGold text-[40px] lg:text-[80px] xl:text-[114px] text-center">{props.title}</div>
                <div className="text-white font-josefin sm:text-[19px] text-center w-[80%] md:w-[60%] lg:w-[50%] xl:max-w-[32%]">{props.second}</div>
            </div>
        </>
    )
}