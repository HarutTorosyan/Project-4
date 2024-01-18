import React from "react"
import Img1 from "../../assets/img/main-img-4.jpg";
import Img2 from "../../assets/img/quote-mark.png";
import Slider from "react-slick";
import OpinionSmall from "./opinionSmall";
export default function HomeOpinion() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000
    };
    const SliderData = [
        { desc: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia orem ipsum dolor sit amet, consectetur.', author: 'Andrea Chung', profession: 'Cook' },
        { desc: 'Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.', author: 'Robert Chang', profession: 'Sommelier'},
        { desc: 'Ut enim ad minim venia orem ipsum dolor sit amet, consectetur adipisic sed do. Eiusmod tempor incididunt ut labore et dolore magna.', author: 'Jan Winsent', profession: 'Cook',},
    ]
    return (
        <>
            <div className="w-full bg-bgLight flex max-md:flex-col">
                <div className="w-[70%] max-md:mx-auto md:w-1/2 flex items-center">
                    <div className="w-0  lg:w-1/4"></div>
                    <div className="max-md:py-12 w-full lg:w-2/4 h-fit cursor-pointer">
                        <div className="mb-8 flex justify-center"><img src={Img2} /></div>
                        <Slider {...settings}>

                            {
                                SliderData && SliderData.map((item, index) => {
                                    return <div key={index} className="">
                                        <OpinionSmall  desc={item.desc} author={item.author} profession={item.profession} />
                                    </div>
                                })
                            }

                        </Slider>
                    </div>
                    <div className="w-0  lg:w-1/4"></div>
                </div>
                <div className="md:w-1/2">
                    <img src={Img1} />
                </div>
            </div>
        </>
    )
}