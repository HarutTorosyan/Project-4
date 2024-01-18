import TitleSmall from "./TitleSmall";
import Main1 from "../../assets/img/main-images-1.jpg";
import Main2 from "../../assets/img/main-images-2.jpg";
import Main3 from "../../assets/img/main-images-3.jpg";
import SmallOurTeam from "./SmallOurMenu";
export default function HomeOurMenu() {
    return (
        <>
            <div className="bg-[#0B1315] w-full  relative">
                <div className="absolute w-full h-[100%] flex justify-evenly">
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                </div>
                <div className="max-w-screen-xl py-36  mx-auto   relative">

                    <div className="w-full max-md:mt-12 sm:px-24 md:px-0 flex flex-col justify-center items-center space-y-8">
                        <TitleSmall small={'Laurent’s tasty offer '} title={'OUR MENu'} desc={''} />
                    </div>
                    <div className="w-full max-xl:px-6 flex max-md:flex-col max-md:space-y-6 md:space-x-6 mt-12">
                        <SmallOurTeam image={Main1} title={'Starters'} desc={'Specialties'}  />
                        <SmallOurTeam image={Main2} title={'Main Courses'} desc={'Specialties'}  />
                        <SmallOurTeam image={Main3} title={'Desserts'} desc={'Specialties'}  />
                            
                    </div>
                </div>

            </div>
        </>
    )
}