import Image from 'next/image';
import numeralsPic from '@/public/christina-wocintechchat-com-L85a1k-XqH8-unsplash.jpg';

export const NumeralsSection = () => {
    return (
        <div className="relative">
            <Image className="z-0 h-full" src={numeralsPic} layout={'fill'} objectFit={'cover'}
                   style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', opacity: '0.5'}}
                   objectPosition={'center'} alt={''}/>
            <div
                className="relative z-10 sm:mx-[20px] lg:mx-[40px] sm:pt-[80px] 2xl:mx-[64px] 2xl:pt-[160px] 4xl:mx-[100px]">
            <span
                className="sm:hidden 2xl:text-desktop-title-md 2xl:block text-base-weak uppercase">Empowering Growth.<br/>
            Our Expertise. Our&nbsp;Commitment</span>
                <span className="sm:text-mobile-title-md sm:block 2xl:hidden text-base-weak uppercase">Empowering <br/>Growth<br/>
            Our Expertise< br/>Our Commitment</span>
                <p className="sm:text-mobile-text-lg 2xl:text-desktop-text-md text-base-weak sm:mt-[40px] sm:mb-[30px] 2xl:mt-[64px] 2xl:mr-[80px]">Discover
                    the numbers that reflect
                    the T&S journey, where each statistic is a tribute to our impact</p>
                <div className="2xl:hidden">
                    <button type="button"
                            className="w-[160px] h-[64px] rounded-full bg-base-weak text-base-strong">Contact us
                    </button>
                </div>
            </div>
            <div
                className="relative sm:flex sm:flex-col 2xl:grid 2xl:grid-cols-3 z-10 sm:mx-[20px] lg:mx-[40px] sm:pt-[40px] sm:pb-[30px] 2xl:mx-[64px] 2xl:pt-[80px] pb-[40px]">
                <div className="flex items-center sm:pb-[20px]">
                    <div className="flex justify-center flex-col h-full border-l-[1px] border-smoke-weak">
                        <span
                            className="pl-[40px] sm:text-mobile-hero-title 2xl:text-desktop-hero-title text-base-weak">15+</span>
                        <p className="pl-[40px] sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak">Years in
                            Saudi Arabia</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="border-l-[1px] border-smoke-weak sm:mb-[20px] 2xl:mb-[40px]">
                        <span
                            className="pl-[40px] sm:text-mobile-title-sm 2xl:text-desktop-title-sm text-base-weak">500</span>
                        <p className="pl-[40px] sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak">Entities
                            Established</p>
                    </div>
                    <div className="border-l-[1px] border-smoke-weak sm:mb-[20px]">
                        <span
                            className="pl-[40px] sm:text-mobile-title-sm 2xl:text-desktop-title-sm text-base-weak">97%</span>
                        <p className="pl-[40px] sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak">Strategic
                            Partnerships</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex justify-center flex-col h-full border-l-[1px] border-smoke-weak">
                        <span
                            className="pl-[40px] sm:text-mobile-hero-title 2xl:text-desktop-hero-title text-base-weak">15+</span>
                        <p className="pl-[40px] sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak">Certifications
                            and Awards</p>
                    </div>
                </div>
            </div>
            <div
                className="relative sm:flex sm:flex-col sm:mx-[20px] lg:mx-[40px] sm:pb-[80px] 2xl:grid 2xl:grid-cols-3 z-10 2xl:mx-[64px] 2xl:pb-[160px]">
                <div className="flex items-center">
                    <div className="border-l-[1px] border-smoke-weak sm:mb-[20px]">
                        <span
                            className="pl-[40px] sm:text-mobile-title-sm 2xl:text-desktop-title-sm text-base-weak">500</span>
                        <p className="pl-[40px] sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak">Clients
                            Served</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="border-l-[1px] border-smoke-weak sm:mb-[20px]">
                        <span
                            className="pl-[40px] sm:text-mobile-hero-title 2xl:text-desktop-hero-title text-base-weak">20+</span>
                        <p className="pl-[40px] sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak">Corporate
                            Cost Savings</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="border-l-[1px] border-smoke-weak">
                        <span
                            className="pl-[40px] sm:text-mobile-title-sm 2xl:text-desktop-title-sm text-base-weak">97%</span>
                        <p className="pl-[40px] sm:text-mobile-text-md 2xl:text-desktop-text-md text-base-weak">Solutions
                            Success Rate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}