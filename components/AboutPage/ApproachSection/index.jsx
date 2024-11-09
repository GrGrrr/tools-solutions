import Image from "next/image";
import onePic from "@/public/Img.png";

export const ApproachSection = () => {
    return (
        <div className="sm:pt-[80px] 2xl:pt-[160px] bg-base-weak">
            <p className="sm:px-[20px] lg:px-[40px] 2xl:pl-[64px] 4xl:pl-[100px] sm:text-mobile-title-md 2xl:text-desktop-title-md text-base-strong uppercase">Our
                Approach</p>
            <div
                className="lg:pl-[40px] 2xl:pl-[64px] 2xl:grid 2xl:grid-cols-2 sm:flex sm:flex-col bg-base-weak sm:mt-[60px] 2xl:mt-[120px] shadow-slider]">
                <div className="sm:px-[20px] lg:px-[40px] 2xl:px-0 2xl:mr-[80px]">
                    <p className="sm:text-desktop-text-md 2xl:text-desktop-text-md text-base-strong sm:mb-[60px]">
                        For over a decade, Tools & Solutions has been committed to growing and empowering businesses
                        across the Kingdom.
                        Whether you&#39;re a startup looking to enter the Saudi market or an established company ready
                        to upscale with digital innovation, we support you at every stage of your journey.
                        Achieve better results, enhance customer experience, and boost your performance – all with just
                        one team</p>
                </div>
                <div className="relative w-auto sm:h-[560px]">
                    <Image className="z-0 h-full" src={onePic} layout={'fill'} objectFit={'cover'}
                           objectPosition={'center'}
                           alt={''}/>
                </div>
            </div>
        </div>
    )
}