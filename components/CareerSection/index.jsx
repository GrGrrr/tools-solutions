import Image from 'next/image';
import careerPic from '@/public/annie-spratt-hCb3lIB8L8E-unsplash.jpg';

export const CareerSection = () => {
    return (
        <div className="relative">
            <Image className="z-0 h-full" src={careerPic} layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                   alt={''}/>
            <div className="relative z-10 sm:mx-[20px] sm:py-[80px] 3xl:mx-[64px] 3xl:py-[160px]">
                <div className="flex flex-col justify-center items-center">
                    <span
                        className="sm:text-mobile-title-lg sm:uppercase 3xl:normal-case sm:text-center 3xl:text-desktop-title-sm text-base-weak mb-[80px]">What Can We Do for You?</span>
                    <button type="button"
                            className="w-[187px] h-[64px] rounded-full border-[1px] border-base-strong bg-base-weak text-base-strong">Talk
                        to us
                    </button>
                </div>
            </div>
        </div>
    )
}