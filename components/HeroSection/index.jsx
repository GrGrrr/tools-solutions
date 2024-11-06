import Image from 'next/image';
import heroPic from '@/public/Hero.png';

export const HeroSection = () => {
    return (
        <div className="w-full h-full z-10">
            <Image
                className="z-0 sm:min-h-[980px] sm:min-w-[280%] lg:min-w-[124%] lg:min-h-[1062px] 2xl:min-w-[124%] 2xl:min-h-[1050px] 4xl:min-w-[100%] 4xl:min-h-[1250px]"
                src={heroPic}
                layout={'fill'} objectFit={'cover'} objectPosition={'left'}
                style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', opacity: '0.5'}}
                alt={''}/>
            <div className="relative sm:mx-[20px] lg:mx-[40px] 3xl:mx-[64px] 2xl:mb-[120px] 4xl:mx-[100px] z-10">
                <div className="sm:hidden 2xl:justify-start 2xl:flex">
                    <p className="2xl:text-tablet-text 3xl:text-desktop-hero-title 4xl:text-desktop-hero-title-lg text-base-weak uppercase">
                        Empovering &
                    </p>
                </div>
                <div className="sm:block sm:pb-[10px] 2xl:hidden">
                    <p className="sm:text-mobile-hero-title lg:text-mobile-horizontal text-base-weak uppercase">
                        Empovering
                    </p>
                </div>
                <div className="sm:hidden 2xl:justify-end 2xl:flex">
                    <p className="2xl:text-tablet-text 3xl:text-desktop-hero-title 4xl:text-desktop-hero-title-lg text-base-weak uppercase">
                        Elevating
                    </p>
                </div>
                <div className="sm:block sm:pb-[10px] 2xl:hidden">
                    <p className="sm:text-mobile-hero-title lg:text-mobile-horizontal text-base-weak uppercase">
                        & Elevating
                    </p>
                </div>
                <div className="sm:hidden 2xl:flex 2xl:justify-center">
                    <p className="2xl:text-tablet-text 3xl:text-desktop-hero-title 4xl:text-desktop-hero-title-lg text-base-weak uppercase">
                        Business growth
                    </p>
                </div>
                <div className="sm:block sm:pb-[10px] 2xl:hidden">
                    <p className="sm:text-mobile-hero-title lg:text-mobile-horizontal text-base-weak uppercase">
                        Business
                    </p>
                </div>
                <div className="sm:block 2xl:hidden">
                    <p className="sm:text-mobile-hero-title lg:text-mobile-horizontal text-base-weak uppercase">
                        growth
                    </p>
                </div>
            </div>
            <div
                className="grid 2xl:grid-cols-2 relative sm:mx-[20px] sm:my-[80px] lg:mx-[40px] 3xl:mx-[64px] mb-[80px] z-10">
                <div className="flex flex-col">
                    <p className="sm:text-mobile-text-md 2xl:text-desktop-text-lg 2xl:text-end text-base-weak">From
                        enhancing operational efficiency to incorporating
                        the latest technology, we help businesses achieve more. Our solutions are designed to provide
                        you with smarter, quicker, and easier ways to succeed</p>
                </div>
                <div className="flex flex-col sm:pt-[40px] 2xl:pt-0 2xl:justify-center 2xl:items-center">
                    <button type="button"
                            className="w-[198px] h-[64px] rounded-full bg-base-weak text-base-strong">Contact us
                    </button>
                </div>
            </div>
            <div
                className="relative sm:grid sm:grid-cols-2 lg:flex lg:items-center lg:justify-between sm:mx-[20px] lg:mx-[40px] 3xl:mx-[64px] pb-[120px] z-10">
                <a href="#" className="sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak underline">Intelligent
                    Automation</a>
                <a href="#"
                   className="sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak sm:text-end underline">Data
                    Management</a>
                <a href="#" className="sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak underline">Learning
                    & Talent</a>
                <a href="#"
                   className="sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak sm:text-end underline">Business
                    Establishment</a>
            </div>
        </div>
    )
}