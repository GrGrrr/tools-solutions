import Image from 'next/image';
import threePic from '@/public/linkedin-sales-solutions-u3hmzw5U-SI-unsplash.jpg';

export const Three = () => {
    return (
        <div className="3xl:pl-[64px] 3xl:grid 3xl:grid-cols-2 sm:flex sm:flex-col bg-base-weak shadow-slider">
            <div className="sm:pt-[60px] sm:px-[20px] 3xl:pt-[80px] 3xl:mr-[80px]">
                <span className="sm:hidden 3xl:text-desktop-title-sm 3xl:block text-base-strong">The Power of Intelligent&nbsp;Insights</span>
                <span
                    className="sm:text-mobile-title-sm sm:block 3xl:hidden text-base-strong">The Power of <br/>Intelligent&nbsp;Insights</span>
                <p className="sm:text-desktop-text-md 3xl:text-desktop-text-md text-base-strong sm:mt-[40px] sm:mb-[60px] 3xl:mt-[80px]">We
                    turn raw data into actionable
                    insights. Our data practice, powered by AI and machine learning technologies, enables businesses and
                    government entities to unlock the potential of data, optimize decision-making, and drive innovation.
                    We harness the power of data-driven insights to ensure an adaptive and forward-thinking
                    approach.</p>
            </div>
            <div className="relative w-auto sm:h-[560px] 3xl:h-[900px]">
                <Image className="z-0 h-full" src={threePic} layout={'fill'} objectFit={'cover'}
                       objectPosition={'center'} alt={''}/>
            </div>
        </div>
    )
}