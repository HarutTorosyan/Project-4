import SvImg from "../../assets/img/untitled.png";
export default function SmallOurTeam(props) {
    return (
        <>
            <div className="w-[80%] relative max-md:mx-auto md:w-1/3">
                <div className="relative group">
                    <img src={props.image} />
                    <div className="absolute overflow-hidden flex justify-center items-center top-[5%] left-[5%] w-[90%] h-[0] bg-[#111d22] transition-all duration-500 group-hover:h-[90%]">
                        <img src={SvImg} />
                    </div>
                </div>
                <div>
                    <p className="uppercase text-textGold font-bold font-Caviar text-[19px] tracking-[0.23em] text-center mt-6">{props.title}</p>
                    <p className="mt-2 text-white font-josefin text-[19px]  text-center">{props.desc}</p>
                </div>

            </div>
        </>
    )
}