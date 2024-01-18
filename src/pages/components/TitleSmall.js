export default function TitleSmall (props){
    return(
        <div className="text-center flex flex-col space-y-4">
            <div className="font-miniver text-textGold text-[19px]">{props.small}</div>
            <div className="uppercase font-Caviar text-[30px] sm:text-[48px] text-textGold">{props.title}</div>
            <div className="font-josefin text-[19px]  text-white text-center w-[90%] md:w-[80%] lg:w-[70%] xl:max-w-[80%] mx-auto">{props.desc}</div>
        </div>
    )
}