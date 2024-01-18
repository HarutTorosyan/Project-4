import { Link } from "react-router-dom";

export default function WiewAll(props){
    return(
        <>
            <Link to={props.link} className="border overflow-hidden border-textGold tracking-[.36em] text-white text-[14px] font-roboto font-light uppercase py-4 px-[39px] relative after:absolute after:top-0 after:left-7 after:w-[1px] after:h-0 after:bg-textGold after:rotate-45 after:origin-top-left after:transition-all after:duration-300 hover:after:h-full before:absolute before:bottom-0 before:right-7 before:w-[1px] before:h-0 before:bg-textGold before:rotate-45 before:origin-bottom-right before:transition-all before:duration-300 hover:before:h-full">
                View All
            </Link>           
        </>
    )
}