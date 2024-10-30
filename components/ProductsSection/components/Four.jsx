import Image from 'next/image';
import fourPic from '@/public/microsoft-365-MFK0JpFU13U-unsplash.jpg';

export const Four = () => {
    return (
        <div className="3xl:pl-[64px] 3xl:grid 3xl:grid-cols-2 sm:flex sm:flex-col bg-base-weak shadow-slider">
            <div className="sm:pt-[60px] sm:px-[20px] 3xl:pt-[80px] 3xl:mr-[80px]">
                <span className="sm:text-mobile-title-sm 3xl:text-desktop-title-sm text-base-strong">Empower Your Team</span>
                <p className="sm:text-desktop-text-md 3xl:text-desktop-text-md text-base-strong sm:mt-[40px] sm:mb-[60px] 3xl:mt-[80px]">We believe that your team is central to
                    achieving your vision, and we’re here to equip them with the necessary skills. Our Talent & Learning
                    Solutions offers customized, hands-on programs that align with your organizational goals, nurturing
                    a culture of continuous learning and leadership development.
                    <br/>
                    <br/>
                    Explore more of our Talent & Learning Solutions! </p>
            </div>
            <div className="relative w-auto sm:h-[560px] 3xl:h-[900px]">
                <Image className="z-0 h-full" src={fourPic} layout={'fill'} objectFit={'cover'}
                       objectPosition={'center'} alt={''}/>
            </div>
        </div>
    )
}