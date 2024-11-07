import Image from 'next/image';
import threePic from '@/public/linkedin-sales-solutions-u3hmzw5U-SI-unsplash.jpg';

export const Three = () => {
    return (
        <div
            className="lg:pl-[40px] 2xl:pl-[64px] 2xl:grid 2xl:grid-cols-2 sm:flex sm:flex-col bg-base-weak shadow-slider">
            <div className="sm:pt-[60px] sm:px-[20px] lg:px-[40px] 2xl:px-0 2xl:pt-[80px] 2xl:mr-[80px]">
                <span className="sm:hidden 2xl:text-desktop-title-sm 2xl:block text-base-strong">The Power of Intelligent Insights</span>
                <span
                    className="sm:text-mobile-title-sm sm:block 2xl:hidden text-base-strong">The Power of Intelligent&nbsp;Insights</span>
                <p className="sm:text-desktop-text-md 2xl:text-desktop-text-md text-base-strong sm:mt-[40px] sm:mb-[60px] 2xl:mt-[80px]">We
                    turn raw data into actionable
                    insights. Our data practice, powered by AI and machine learning technologies, enables businesses and
                    government entities to unlock the potential of data, optimize decision-making, and drive innovation.
                    We harness the power of data-driven insights to ensure an adaptive and forward-thinking
                    approach.</p>
            </div>
            <div className="relative w-auto sm:h-[560px] 2xl:h-[900px]">
                <Image className="z-0 h-full" src={threePic} layout={'fill'} objectFit={'cover'}
                       objectPosition={'center'} alt={''}/>
            </div>
        </div>
    )
}