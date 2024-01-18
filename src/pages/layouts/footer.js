import Logo from '../../assets/img/footer-logo.png';

export default function Footer() {
    return (
        <>
            <div className="bg-[#0B1315] w-full  relative" id='Footer'>
                <div className="absolute w-full h-[100%] flex justify-evenly">
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                    <div className="hidden md:block relative w-[20px] h-[100%] after:absolute after:top-0 after:left-0 after:h-[100%] after:w-[2px] after:bg-[#21221E]"></div>
                </div>
                <div className="max-w-screen-xl py-36  mx-auto   relative">
                    <div className="flex justify-center">
                        <img src={Logo} />
                    </div>
                    <div className='mt-3 text-center text-white font-josefin text-[19px] flex flex-col space-y-3'>
                        <p>Laurent Restaurant & Fine dining, 71 Madison Ave</p>
                        <p>10013 New York, 914-309-7030, reservations@laurent.com</p>
                        <p>Open: 09:00 am – 01:00 pm</p>
                    </div>
                    <div className='mt-12'>
                        <ul className='text-white text-[19px] font-josefin text-center flex justify-center max-sm:flex-col max-sm:space-y-4 sm:space-x-12'>
                            <li><a href='' className='Header__Links'> Facebook</a></li>
                            <li><a href='' className='Header__Links'> Instagram</a></li>
                            <li><a href='' className='Header__Links'> Trip Advisor</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}