

export const NumbersSection = () => {
    return (
        <div className="sm:px-[20px] sm:py-[80px] 3xl:py-[160px] 3xl:px-[64px] 4xl:px-[100px] bg-bg-weak">
            <span className="sm:text-mobile-title-md 3xl:text-desktop-title-md text-base-strong uppercase">Success in Numbers</span>
            <div className="relative sm:mx-[20px] 3xl:mx-[64px] 3xl:mb-[120px] z-10">
                <div className="sm:hidden 2xl:justify-start 3xl:flex">
                    <div className="grid grid-cols-2 gap-[40px]">
                    <div className="3xl:text-desktop-hero-title 4xl:text-desktop-hero-title-lg text-base-strong uppercase">
                        1973
                    </div>
                        <div className="3xl:text-desktop-text-lg 4xl:text-desktop-text-lg text-base-strong">We started with an insurgent mindset and a mission to redefine management consulting by focusing on results, not reports</div>
                    </div>
                </div>
                <div className="sm:hidden 2xl:justify-end 3xl:flex">
                    <div className="grid grid-cols-2">
                    <p className="3xl:text-desktop-hero-title 4xl:text-desktop-hero-title-lg text-base-strong uppercase">
                        64%
                    </p>
                        <p className="3xl:text-desktop-text-lg 4xl:text-desktop-text-lg text-base-strong">We&#39;ve worked with 64%
                            of the Global 500</p>
                        </div>
                </div>
                <div className="sm:hidden 3xl:flex 3xl:justify-center">
                    <div className="grid grid-cols-2">
                    <p className="3xl:text-desktop-hero-title 4xl:text-desktop-hero-title-lg text-base-strong uppercase">
                        40
                    </p>
                        <p className="3xl:text-desktop-text-lg 4xl:text-desktop-text-lg text-base-strong">Across 65 cities in 40 countries, we work as one global team to help clients achieve the extraordinary</p>
                    </div>
                </div>
            </div>
        </div>
    )
}