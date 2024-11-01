import Image from 'next/image';
import doPic from '@/public/redd-f-5U_28ojjgms-unsplash.jpg';

export const DoSection = () => {
    return (
        <div className="3xl:grid 3xl:grid-cols-2 sm:flex sm:flex-col 3xl:pl-[64px] bg-base-weak">
            <div className="sm:px-[20px] sm:py-[80px] 3xl:py-[160px]">
                <span className="sm:text-mobile-title-md 3xl:text-desktop-title-md text-base-strong uppercase">What we do</span>
                <p className="sm:text-desktop-text-md 3xl:text-desktop-text-md text-base-strong mt-[64px] 3xl:mr-[80px]">We enable your organization to
                    navigate change with confidence. By spearheading digital innovation, we keep you at the forefront of
                    today’s competitive landscape. As your strategic partner, we provide comprehensive solutions — from
                    business process solutions to talent and learning — each designed to drive your digital
                    transformation, powered by intelligent automation
                    <br/>
                    <br/>
                    Together, let’s shape your future!</p>
            </div>
            <div className="relative w-auto sm:h-[320px] 3xl:h-[692px]">
                <Image className="z-0 h-full" src={doPic} layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                       alt={''}/>
            </div>
        </div>
    )
}