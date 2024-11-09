import Image from 'next/image';
import doPic from '@/public/redd-f-5U_28ojjgms-unsplash.jpg';

export const DoSection = () => {
    return (
        <div
            className="2xl:grid 2xl:grid-cols-2 sm:flex sm:flex-col 2xl:pl-[64px] 4xl:pl-[100px] bg-base-weak relative z-10">
            <div className="sm:px-[20px] sm:py-[80px] lg:px-[40px] 2xl:px-0 2xl:py-[160px]">
                <span className="sm:text-mobile-title-md 2xl:text-desktop-title-md text-base-strong uppercase">What we do</span>
                <p className="sm:text-desktop-text-md 2xl:text-desktop-text-md text-base-strong mt-[64px] 2xl:mr-[80px]">We
                    enable your organization to
                    navigate change with confidence. By spearheading digital innovation, we keep you at the forefront of
                    today’s competitive landscape. As your strategic partner, we provide comprehensive solutions — from
                    business process solutions to talent and learning — each designed to drive your digital
                    transformation, powered by intelligent automation
                    <br/>
                    <br/>
                    Together, let’s shape your future!</p>
            </div>
            <div className="relative w-auto sm:h-[320px] 2xl:h-[830px] 3xl:h-[695px]">
                <Image className="z-0 h-full" src={doPic} layout={'fill'} objectFit={'cover'} objectPosition={'center'}
                       alt={''}/>
            </div>
        </div>
    )
}