import Image from 'next/image';
import onePic from '@/public/taylor-nicole-qH7nLsK_IjE-unsplash.jpg';

export const One = () => {
    return (
        <div
            className="lg:pl-[40px] 2xl:pl-[64px] 2xl:grid 2xl:grid-cols-2 sm:flex sm:flex-col bg-base-weak sm:border-t-[1px] sm:border-smoke-weak sm:mt-[60px] 2xl:mt-[120px] shadow-slider]">
            <div className="sm:pt-[60px] sm:px-[20px] lg:px-[40px] 2xl:px-0 2xl:pt-[80px] 2xl:mr-[80px]">
                <span className="sm:text-mobile-title-sm 2xl:text-desktop-title-sm text-base-strong">Lead with Innovation</span>
                <p className="sm:text-desktop-text-md 2xl:text-desktop-text-md text-base-strong sm:mt-[40px] sm:mb-[60px] 2xl:mt-[80px]">We
                    accelerate your journey toward digital
                    transformation, partnering with businesses and government entities to implement strategies that
                    enhance efficiency, optimize processes, and stimulate sustainable growth. <br/><br/>When you choose
                    T&S, you
                    set the standard for business excellence.</p>
            </div>
            <div className="relative w-auto sm:h-[560px] 2xl:h-[900px]">
                <Image className="z-0 h-full" src={onePic} layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                       alt={''}/>
            </div>
        </div>
    )
}