import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BG1 from "../../assets/img/BG1.jpg";
import BG2 from "../../assets/img/BG2.jpg";
import BG3 from "../../assets/img/BG3.jpg";
import SmallFirstSlider from "./SmallFirstSlider";
export default function HomeFirst() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        autoplay: true,
        autoplaySpeed: 3000
    };
    const SliderData = [
        {bg:BG1 , desc:'welcome to our delicious corner' , title:'The Best Dishes' ,second :'We have a proper passion for cooking. Love is the secret ingredient that makes all our meals taste better and magical'},
        {bg:BG2 , desc:'take a sip of our innovative drinks ' , title:'The Best Drinks' ,second :'From the delicious food to wonderful cocktails, Laurent’s offer is guaranteed to satisfy all of your taste buds'},
        {bg:BG3 , desc:'the most delicious flavor combos' , title:'The Food Heaven' ,second :'Experimentation in the kitchen and focus on excellence are among our main driving forces in cooking.'},
    ]
    return (
        <>
            <div id="Home">
            <Slider {...settings}>

{
    SliderData && SliderData.map((item,index) => {
        return <div key={index} className="h-[100vh] flex flex-col justify-center">
            <SmallFirstSlider bg={item.bg} desc={item.desc} title={item.title} second={item.second} />
        </div>
    })
}

</Slider>
            </div>
        </>
    )
}


