import Image from 'next/image';
import careerPic from '@/public/annie-spratt-hCb3lIB8L8E-unsplash.jpg';

export const CareerSection = () => {
    return (
        <div className="relative">
            <Image className="z-0 h-full" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', opacity: '0.5'}}
                   src={careerPic} layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                   alt={''}/>
            <div
                className="relative z-10 sm:mx-[20px] sm:py-[80px] lg:mx-[40px] 2xl:mx-[64px] 2xl:py-[160px] 4xl:mx-[100px]">
                <div className="flex flex-col justify-center items-center">
                    <span
                        className="sm:text-mobile-title-lg sm:text-center 2xl:text-desktop-title-sm 4xl:text-desktop-title-md text-base-weak mb-[40px] uppercase">Ready to do your
<br/>best work?</span>
                    <span
                        className="sm:text-mobile-subtitle sm:text-center 2xl:text-desktop-subtitle text-base-weak mb-[40px]">Let’s get you started</span>
                    <button type="button"
                            className="w-[187px] h-[64px] rounded-full border-[1px] border-base-strong bg-base-weak text-base-strong">Sign up now
                    </button>
                </div>
            </div>
        </div>
    )
}