import heroPic from '@/public/8399d3dc713bd4a64320ee0461bedc01.jpeg';

const styling = {
    backgroundImage: `url('${heroPic.src}')`,
    backgroundPosition: 'center center',
    objectFit: 'contain',
    width: "100%",
    height: "100%",
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)'
}

export const HeroSection = () => {
    return (
        <div className="w-full h-full z-10 pt-[152px]" style={styling}>
            <div className="relative sm:mx-[20px] lg:mx-[40px] 2xl:mx-[64px] 2xl:mb-[120px] 4xl:mx-[100px] z-10">
                <div className="sm:hidden 2xl:justify-start 2xl:flex">
                    <p className="2xl:text-tablet-text 3xl:text-desktop-hero-title 4xl:text-desktop-hero-title-lg text-base-weak uppercase">
                        Tools & Solutions
                    </p>
                </div>
                <div className="sm:block sm:pb-[10px] 2xl:hidden">
                    <p className="sm:text-mobile-hero-title lg:text-mobile-horizontal text-base-weak uppercase">
                        Tools & Solutions
                    </p>
                </div>
            </div>
            <div className="2xl:grid 2xl:grid-cols-2 relative sm:mx-[20px] sm:my-[80px] 2xl:mx-[64px] mb-[80px] z-10">
                <div className="flex flex-col">
                    <p className="sm:text-mobile-text-md 2xl:text-desktop-text-lg text-base-weak">From
                        For more than 25 years, we&#39;ve been bucking Silicon Valley trends, taking our own approach to
                        building products</p>
                </div>
            </div>
            <div
                className="relative sm:mx-[20px] 2xl:mx-[64px] pb-[120px] z-10">
                <a href="#" className="sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak underline">Learn
                    more about our clients</a>
            </div>
        </div>
    )
}