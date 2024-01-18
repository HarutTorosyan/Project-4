import TitleSmall from "./TitleSmall";
import Img1 from "../../assets/img/main-img-5.jpg";
import WiewAll from "./wiewAll";
export default function HomeKitchen() {
    return(
        <>
          <div className="bg-[#0B1315] w-full  relative" id={'Kitchen'}>
                <div className="absolute w-full h-[100%] flex justify-evenly">
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                </div>
                <div className="max-w-screen-2xl   mx-auto flex max-md:flex-col  relative">
                    <div className="md:w-1/2 p-24">
                        <img src={Img1} />
                    </div>
                    <div className="md:w-1/2 sm:px-24 md:px-0 flex flex-col justify-center items-center space-y-8">
                        <TitleSmall small={'Recommendations'} title={'OUR BEST SPECIALTIES'} desc={'Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu smotem por incididunt ut abore et dolore magali qua. Ut enim ad minm eni amquis nostrud exercitation.'} />
                        <WiewAll />
                    </div>
                </div>
              
            </div>
        </>
    )
}