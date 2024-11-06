import Image from 'next/image';
import twoPic from '@/public/campaign-creators-qCi_MzVODoU-unsplash.jpg';

export const Two = () => {
    return (
        <div
            className="2xl:pl-[40px] 3xl:pl-[64px] 2xl:grid 2xl:grid-cols-2 sm:flex sm:flex-col bg-base-weak shadow-slider">
            <div className="sm:pt-[60px] sm:px-[20px] lg:px-[40px] 2xl:px-0 2xl:pt-[80px] 2xl:mr-[80px]">
                <span className="sm:hidden 2xl:text-desktop-title-sm 2xl:block text-base-strong">Streamlined Solutions for Success</span>
                <span
                    className="sm:text-mobile-title-sm sm:block 2xl:hidden text-base-strong">Streamlined Solutions for Success</span>
                <p className="sm:text-desktop-text-md 2xl:text-desktop-text-md text-base-strong sm:mt-[40px] sm:mb-[60px] 2xl:mt-[80px]">With
                    our low-code and SAP implementation
                    services, we refine complex integration processes, supporting your organization to stay agile in
                    today’s dynamic market. From maximizing technology adoption to modernizing digital platforms, our
                    team will deliver the solutions to keep you responsive and reliable. Let’s work together to turn
                    your vision into reality.</p>
            </div>
            <div className="relative w-auto sm:h-[560px] 2xl:h-[900px]">
                <Image className="z-0 h-full" src={twoPic} layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                       alt={''}/>
            </div>
        </div>
    )
}