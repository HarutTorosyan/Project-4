import HomeAbout from "./components/homeAbout";
import HomeFirst from "./components/homeFirst";
import HomeKitchen from "./components/homeKitchen";
import HomeMenu from "./components/homeMenu";
import HomeOpinion from "./components/homeOpinion";
import HomeOurMenu from "./components/homeOurMenu";
import HomeSelect from "./components/homeSelect";
import HomeTips from "./components/homeTips";
import HomeVideo from "./components/homeVideo";


export default function Home() {
    return(
        <>
            <HomeFirst />
          <HomeAbout />
           <HomeOpinion />
           <HomeKitchen />
           <HomeMenu />
            <HomeTips />
            <HomeVideo />
            <HomeOurMenu />
      <HomeSelect />
        </>
    )
}