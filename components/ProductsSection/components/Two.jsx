import Image from 'next/image';
import twoPic from '@/public/campaign-creators-qCi_MzVODoU-unsplash.jpg';

export const Two = () => {
    return (
        <div className="3xl:pl-[64px] 3xl:grid 3xl:grid-cols-2 sm:flex sm:flex-col bg-base-weak shadow-slider">
            <div className="sm:pt-[60px] sm:px-[20px] 3xl:pt-[80px] 3xl:mr-[80px]">
                <span className="sm:hidden 3xl:text-desktop-title-sm 3xl:block text-base-strong">Streamlined Solutions for Success</span>
                <span className="sm:text-mobile-title-sm sm:block text-base-strong">Streamlined Solutions for <br/>Success</span>
                <p className="sm:text-desktop-text-md 3xl:text-desktop-text-md text-base-strong sm:mt-[40px] sm:mb-[60px] 3xl:mt-[80px]">With
                    our low-code and SAP implementation
                    services, we refine complex integration processes, supporting your organization to stay agile in
                    today’s dynamic market. From maximizing technology adoption to modernizing digital platforms, our
                    team will deliver the solutions to keep you responsive and reliable. Let’s work together to turn
                    your vision into reality.</p>
            </div>
            <div className="relative w-auto sm:h-[560px] 3xl:h-[900px]">
                <Image className="z-0 h-full" src={twoPic} layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                       alt={''}/>
            </div>
        </div>
    )
}