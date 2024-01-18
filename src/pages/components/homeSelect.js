import SvPng from "../../assets/img/untitled2.png";
import TitleSmall from "./TitleSmall";
import WiewAll from "./wiewAll";
export default function HomeSelect() {
    return (
        <>
            <div className="bg-[#111d22] py-6 md:py-36 relative">
                <div className="absolute left-0 top-[20%]">
                    <img src={SvPng} />
                </div>
                <div className="w-full max-md:mt-12 sm:px-24 md:px-0 flex flex-col justify-center items-center space-y-8">
                        <TitleSmall small={'Laurent’s tasty offer '} title={'OUR MENu'} desc={''} />
                    </div>
                <div className="relative max-w-screen-lg mx-auto flex max-md:flex-col md:space-x-4 max-md:space-y-4">
                    <div className="max-md:flex max-md:justify-center md:w-1/4">
                        <select className="w-[70%] md:w-full h-12 bg-[#111d22] font-josefin text-white border border-textGold px-6">
                            <option className="nn">1 Person</option>
                            <option className="nn">2 People</option>
                            <option className="nn">3 People</option>
                            <option className="nn">4 People</option>
                            <option className="nn">5 People</option>
                            <option className="nn">6 People</option>
                            <option className="nn">7 People</option>
                            <option className="nn">8 People</option>
                            <option className="nn">9 People</option>
                            <option className="nn">10 People</option>
                        </select>
                    </div>
                    <div className="max-md:flex max-md:justify-center md:w-1/4">
                        <input type="date" className="w-[70%] md:w-full h-12 bg-[#111d22] font-josefin text-white border border-textGold px-6" />
                    </div>
                    <div className="max-md:flex max-md:justify-center md:w-1/4">
                        <input type="time" className="w-[70%] md:w-full h-12 bg-[#111d22] font-josefin text-white border border-textGold px-6" />
                    </div>
                    <div className="max-md:flex max-md:justify-center md:w-1/4 mt-3">
                        <WiewAll />
                    </div>
                </div>
            </div>
        </>
    )
}