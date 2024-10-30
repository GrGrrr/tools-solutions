import Image from 'next/image';
import heroPic from '@/public/Hero.png';

export const HeroSection = () => {
    return (
        <div className="w-full h-full">
            <Image className="z-0 3xl:min-w-[127%] 3xl:min-h-[127%]" src={heroPic} layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                   alt={''}/>
            <div className="relative sm:mx-[20px] 3xl:mx-[64px] 3xl:mb-[120px] z-10">
                <div className="flex sm:hidden 3xl:justify-start sm:pb-[10px] 3xl:block">
                    <p className="sm:text-mobile-hero-title 3xl:text-desktop-hero-title 4xl:desktop-hero-title-lg uppercase">
                        Empovering &
                    </p>
                </div>
                <div className="flex sm:block 3xl:justify-start sm:pb-[10px] 3xl:hidden">
                    <p className="sm:text-mobile-hero-title 3xl:text-desktop-hero-title 4xl:desktop-hero-title-lg uppercase">
                        Empovering
                    </p>
                </div>
                <div className="flex sm:hidden 3xl:justify-end 3xl:block">
                    <p className="sm:text-mobile-hero-title 3xl:text-desktop-hero-title 4xl:desktop-hero-title-lg uppercase">
                        Elevating
                    </p>
                </div>
                <div className="flex sm:block sm:pb-[10px] 3xl:hidden">
                    <p className="sm:text-mobile-hero-title 3xl:text-desktop-hero-title 4xl:desktop-hero-title-lg uppercase">
                        & Elevating
                    </p>
                </div>
                <div className="flex sm:hidden 3xl:block 3xl:justify-center">
                    <p className="sm:text-mobile-hero-title 3xl:text-desktop-hero-title 4xl:desktop-hero-title-lg uppercase">
                        Business growth
                    </p>
                </div>
                <div className="flex sm:block sm:pb-[10px] 3xl:hidden">
                    <p className="sm:text-mobile-hero-title 3xl:text-desktop-hero-title 4xl:desktop-hero-title-lg uppercase">
                        Business
                    </p>
                </div>
                <div className="flex sm:block 3xl:hidden">
                    <p className="sm:text-mobile-hero-title 3xl:text-desktop-hero-title 4xl:desktop-hero-title-lg uppercase">
                        growth
                    </p>
                </div>
            </div>
            <div className="grid 3xl:grid-cols-2 relative sm:mx-[20px] sm:my-[80px] 3xl:mx-[64px] mb-[80px] z-10">
                <div className="flex flex-col">
                    <p className="sm:text-mobile-text-md 3xl:text-desktop-text-lg 3xl:text-end">From enhancing operational efficiency to incorporating
                        the latest technology, we help businesses achieve more. Our solutions are designed to provide
                        you with smarter, quicker, and easier ways to succeed</p>
                </div>
                <div className="flex flex-col sm:pt-[40px] 3xl:justify-center 3xl:items-center">
                    <button type="button"
                            className="w-[198px] h-[64px] rounded-full bg-base-weak text-base-strong">Contact us
                    </button>
                </div>
            </div>
            <div className="relative sm:grid sm:grid-cols-2 3xl:flex 3xl:items-center 3xl:justify-between sm:mx-[20px] 3xl:mx-[64px] pb-[120px] z-10">
                <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak underline">Intelligent Automation</a>
                <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak sm:text-end underline">Data Management</a>
                <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak underline">Learning & Talent</a>
                <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak sm:text-end underline">Business Establishment</a>
            </div>
        </div>
    )
}