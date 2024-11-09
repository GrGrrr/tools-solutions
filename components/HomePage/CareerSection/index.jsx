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
                        className="sm:text-mobile-title-lg sm:text-center 2xl:text-desktop-title-sm 4xl:text-desktop-title-md text-base-weak mb-[80px] uppercase">What Can We Do <br/>for You?</span>
                    <button type="button"
                            className="w-[187px] h-[64px] rounded-full border-[1px] border-base-strong bg-base-weak text-base-strong">Talk
                        to us
                    </button>
                </div>
            </div>
        </div>
    )
}