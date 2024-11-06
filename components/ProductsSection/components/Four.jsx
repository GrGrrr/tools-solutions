import Image from 'next/image';
import fourPic from '@/public/microsoft-365-MFK0JpFU13U-unsplash.jpg';

export const Four = () => {
    return (
        <div
            className="2xl:pl-[40px] 3xl:pl-[64px] 2xl:grid 2xl:grid-cols-2 sm:flex sm:flex-col bg-base-weak shadow-slider">
            <div className="sm:pt-[60px] sm:px-[20px] lg:px-[40px] 2xl:px-0 2xl:pt-[80px] 2xl:mr-[80px]">
                <span
                    className="sm:text-mobile-title-sm 2xl:text-desktop-title-sm text-base-strong">Empower Your Team</span>
                <p className="sm:text-desktop-text-md 2xl:text-desktop-text-md text-base-strong sm:mt-[40px] sm:mb-[60px] 2xl:mt-[80px]">We
                    believe that your team is central to
                    achieving your vision, and we’re here to equip them with the necessary skills. Our Talent & Learning
                    Solutions offers customized, hands-on programs that align with your organizational goals, nurturing
                    a culture of continuous learning and leadership development.
                    <br/>
                    <br/>
                    Explore more of our Talent & Learning Solutions! </p>
            </div>
            <div className="relative w-auto sm:h-[560px] 2xl:h-[900px]">
                <Image className="z-0 h-full" src={fourPic} layout={'fill'} objectFit={'cover'}
                       objectPosition={'center'} alt={''}/>
            </div>
        </div>
    )
}