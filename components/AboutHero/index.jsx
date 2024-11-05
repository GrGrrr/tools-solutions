import Image from 'next/image';
import heroPic from '@/public/8399d3dc713bd4a64320ee0461bedc01.jpeg';

export const AboutHeroSection = () => {
    return (
        <div className="w-full h-full overflow-hidden z-10">
            <Image className="z-0 3xl:min-w-[127%] 3xl:min-h-[127%] 4xl:min-w-[100%] 4xl:min-h-[100%]" src={heroPic}
                   layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                   alt={''}/>
            <div className="relative sm:mx-[20px] 3xl:mx-[64px] 4xl:mx-[100px] 3xl:mb-[120px] z-10">
                <div className="sm:hidden 2xl:justify-start 3xl:flex">
                    <p className="3xl:text-desktop-hero-title 4xl:text-desktop-hero-title-lg text-base-weak uppercase">
                        Tools & Solutions
                    </p>
                </div>
                <div className="sm:block 2xl:justify-start sm:pb-[10px] 3xl:hidden">
                    <p className="sm:text-mobile-hero-title text-base-weak uppercase">
                        Tools & Solutions
                    </p>
                </div>
            </div>
            <div className="grid 3xl:grid-cols-2 relative sm:mx-[20px] sm:my-[80px] 3xl:mx-[64px] mb-[80px] z-10">
                <div className="flex flex-col">
                    <p className="sm:text-mobile-text-md 3xl:text-desktop-text-lg text-base-weak">From
                        For more than 25 years, we&#39;ve been bucking Silicon Valley trends, taking our own approach to building products</p>
                </div>
            </div>
            <div
                className="relative sm:mx-[20px] 3xl:mx-[64px] pb-[120px] z-10">
                <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak underline">Learn more about our clients</a>
            </div>
        </div>
    )
}