import Image from 'next/image';
import onePic from '@/public/taylor-nicole-qH7nLsK_IjE-unsplash.jpg';

export const One = () => {
    return (
        <div
            className="3xl:pl-[64px] 3xl:grid 3xl:grid-cols-2 sm:flex sm:flex-col bg-base-weak sm:border-t-[1px] sm:border-smoke-weak sm:mt-[60px] 3xl:mt-[120px] shadow-slider]">
            <div className="sm:pt-[60px] sm:px-[20px] 3xl:pt-[80px] 3xl:mr-[80px]">
                <span className="sm:text-mobile-title-sm 3xl:text-desktop-title-sm text-base-strong">Lead with Innovation</span>
                <p className="sm:text-desktop-text-md 3xl:text-desktop-text-md text-base-strong sm:mt-[40px] sm:mb-[60px] 3xl:mt-[80px]">We
                    accelerate your journey toward digital
                    transformation, partnering with businesses and government entities to implement strategies that
                    enhance efficiency, optimize processes, and stimulate sustainable growth. <br/><br/>When you choose
                    T&S, you
                    set the standard for business excellence.</p>
            </div>
            <div className="relative w-auto sm:h-[560px] 3xl:h-[900px]">
                <Image className="z-0 h-full" src={onePic} layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                       alt={''}/>
            </div>
        </div>
    )
}