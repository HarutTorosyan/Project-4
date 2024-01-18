import TitleSmall from "./TitleSmall";
import WiewAll from "./wiewAll";
import Img1 from "../../assets/img/main-img-8.jpg";
import Img2 from "../../assets/img/main-img-6.jpg";
export default function HomeTips() {
    return (
        <>
            <div className="bg-[#0B1315] w-full  relative" id={'Team'}>
                <div className="absolute w-full h-[100%] flex justify-evenly">
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                </div>
                <div className="max-w-screen-xl py-36  mx-auto flex max-md:flex-col  relative">
                    <div className="md:w-1/2 flex max-md:flex-col max-md:space-y-6 md:space-x-6">
                        <div className="w-[80%] max-md:mx-auto md:w-1/2"><img src={Img2} /></div>
                        <div className="w-[80%] max-md:mx-auto md:w-1/2"><img src={Img1} /></div>
                    </div>
                    <div className="md:w-1/2 max-md:mt-12 sm:px-24 md:px-0 flex flex-col justify-center items-center space-y-8">
                        <TitleSmall small={'Our food philosophy'} title={'OUR TIPS'} desc={'Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu smotem por incididunt ut abore et dolore magali qua. Ut enim ad minm eni amquis nostrud exercitation.'} />
                        <WiewAll />
                    </div>
                </div>

            </div>
        </>
    )
}