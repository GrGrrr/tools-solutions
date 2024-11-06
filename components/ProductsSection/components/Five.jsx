import Image from 'next/image';
import fivePic from '@/public/microsoft-edge-Px0X7g1mc8k-unsplash.jpg';

export const Five = () => {
    return (
        <div
            className="2xl:pl-[40px] 3xl:pl-[64px] 2xl:grid 2xl:grid-cols-2 sm:flex sm:flex-col bg-base-weak shadow-slider">
            <div className="sm:pt-[60px] sm:px-[20px] lg:px-[40px] 2xl:px-0 2xl:pt-[80px] 2xl:mr-[80px]">
                <span className="sm:hidden 2xl:text-desktop-title-sm 2xl:block text-base-strong">Expert Guidance for Every Step</span>
                <span className="sm:text-mobile-title-sm sm:block 2xl:hidden text-base-strong">Expert Guidance for Every Step</span>
                <p className="sm:text-desktop-text-md 2xl:text-desktop-text-md text-base-strong sm:mt-[40px] sm:mb-[60px] 2xl:mt-[80px]">We
                    handle the complexities, bringing
                    clarity to your day-to-day operations with our business process solutions. From setting up new
                    businesses to total workspace solutions, managing government relationships, as well as legal,
                    finance, and HR functions, T&S offers effective business process outsourcing services. Whether
                    you&apos;`re navigating private or public sector requirements, we ensure seamless operations and
                    full compliance so you remain focused on achieving your business goals.</p>
            </div>
            <div className="relative w-auto sm:h-[560px] 2xl:h-[900px]">
                <Image className="z-0 h-full" src={fivePic} layout={'fill'} objectFit={'cover'}
                       objectPosition={'center'} alt={''}/>
            </div>
        </div>
    )
}