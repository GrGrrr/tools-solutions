import Image from 'next/image';
import award1Pic from "@/public/claudio-schwarz-77ruI1Fed3o-unsplash.jpg";
import award2Pic from "@/public/david-dvoracek-T59zfXPNyOQ-unsplash.jpg";
import award3Pic from "@/public/matt-seymour-o2DXhb7ew8w-unsplash.jpg";

export const AwardsSection = () => {
    return (
        <div
            className="sm:px-[20px] lg:px-[40px] sm:py-[80px] 2xl:px-[64px] 3xl:py-[160px] 4xl:px-[100px] bg-base-weak">
            <span className="sm:hidden 2xl:text-desktop-title-md 2xl:block text-base-strong uppercase">Celebrating Our Milestones</span>
            <span className="sm:text-mobile-title-lg sm:block 2xl:hidden text-base-strong uppercase">Celebrating <br/>Our Milestones</span>
            <p className="sm:text-mobile-text-lg 2xl:text-desktop-text-md text-base-strong mt-[64px] sm:pb-[60px] 2xl:pb-[80px] 2xl:mr-[80px]">Tools
                & Solutions’
                dedication to quality and excellence across various <br/>sectors has been widely recognized, earning
                several prestigious awards</p>
            <div
                className="sm:flex sm:flex-col sm:pt-[60px] lg:grid 2xl:hidden 3xl:grid lg:grid-cols-3 lg:gap-[20px] lg:pt-[80px] border-t-[1px] border-smoke-weak">
                <div className="sm:mb-[80px] lg:mb-0">
                    <div className="relative sm:mb-[20px] 3xl:mb-[40px] sm:h-[240px] 3xl:h-[400px]">
                        <Image className="z-0 w-auto rounded-lg" src={award1Pic} layout={'fill'} objectFit={'cover'}
                               objectPosition={'center'} alt=""/>
                    </div>
                    <span
                        className="sm:text-mobile-subtitle 3xl:text-desktop-subtitle text-base-strong sm:mr-[40px] 3xl:mr-[20px]">King Abdulaziz Quality Award</span>
                    <p className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-smoke-strong mt-[20px]">We are
                        proud to have received the
                        prestigious King Abdulaziz Quality Award, honoring our commitment to exceptional service and
                        quality standards in the industry</p>
                </div>
                <div className="sm:mb-[80px] lg:mb-0">
                    <div className="relative sm:mb-[20px] 2xl:mb-[40px] sm:h-[240px] 2xl:h-[400px]">
                        <Image className="z-0 w-auto rounded-lg" src={award2Pic} layout={'fill'} objectFit={'cover'}
                               objectPosition={'center'} alt=""/>
                    </div>
                    <span
                        className="sm:text-mobile-subtitle 2xl:text-desktop-subtitle text-base-strong sm:mr-[40px] 3xl:mr-[20px]">Gulf Business Excellence Award</span>
                    <p className="sm:text-mobile-text-md 2xl:text-desktop-text-md text-smoke-strong mt-[20px]">Recognized
                        for our innovative
                        solutions and outstanding service delivery, we received the Gulf Business Excellence Award,
                        highlighting our dedication to client satisfaction</p>
                </div>
                <div>
                    <div className="relative sm:mb-[20px] 2xl:mb-[40px] sm:h-[240px] 2xl:h-[400px]">
                        <Image className="z-0 w-auto rounded-lg" src={award3Pic} layout={'fill'} objectFit={'cover'}
                               objectPosition={'center'} alt=""/>
                    </div>
                    <span
                        className="sm:text-mobile-subtitle 2xl:text-desktop-subtitle text-base-strong sm:mr-[40px] 3xl:mr-[20px]">Saudi Arabian Innovation Award</span>
                    <p className="sm:text-mobile-text-md 2xl:text-desktop-text-md text-smoke-strong mt-[20px]">Honored
                        with the Saudi Arabian
                        Innovation Award, we are acknowledged for our pioneering contributions to technology and
                        business transformation in the region</p>
                </div>
            </div>
            <div
                className="sm:hidden 2xl:block 3xl:hidden 2xl:pt-[80px] border-t-[1px] border-smoke-weak">
                <div className="grid grid-cols-2 gap-[20px]">
                    <div className="sm:mb-[80px] 3xl:mb-0">
                        <div className="relative sm:mb-[20px] 2xl:mb-[40px] sm:h-[240px] 2xl:h-[400px]">
                            <Image className="z-0 w-auto rounded-lg" src={award1Pic} layout={'fill'} objectFit={'cover'}
                                   objectPosition={'center'} alt=""/>
                        </div>
                        <span
                            className="sm:text-mobile-subtitle 2xl:text-desktop-subtitle text-base-strong sm:mr-[40px] 3xl:mr-[20px]">King Abdulaziz Quality Award</span>
                        <p className="sm:text-mobile-text-md 2xl:text-desktop-text-md text-smoke-strong mt-[20px]">We
                            are
                            proud to have received the
                            prestigious King Abdulaziz Quality Award, honoring our commitment to exceptional service and
                            quality standards in the industry</p>
                    </div>
                    <div className="sm:mb-[80px] 3xl:mb-0">
                        <div className="relative sm:mb-[20px] 2xl:mb-[40px] sm:h-[240px] 2xl:h-[400px]">
                            <Image className="z-0 w-auto rounded-lg" src={award2Pic} layout={'fill'} objectFit={'cover'}
                                   objectPosition={'center'} alt=""/>
                        </div>
                        <span
                            className="sm:text-mobile-subtitle 2xl:text-desktop-subtitle text-base-strong sm:mr-[40px] 3xl:mr-[20px]">Gulf Business Excellence Award</span>
                        <p className="sm:text-mobile-text-md 2xl:text-desktop-text-md text-smoke-strong mt-[20px]">Recognized
                            for our innovative
                            solutions and outstanding service delivery, we received the Gulf Business Excellence Award,
                            highlighting our dedication to client satisfaction</p>
                    </div>
                </div>
                <div>
                    <div className="relative sm:mb-[20px] 2xl:mb-[40px] sm:h-[240px] 2xl:h-[400px]">
                        <Image className="z-0 w-auto rounded-lg" src={award3Pic} layout={'fill'} objectFit={'cover'}
                               objectPosition={'center'} alt=""/>
                    </div>
                    <span
                        className="sm:text-mobile-subtitle 2xl:text-desktop-subtitle text-base-strong sm:mr-[40px] 3xl:mr-[20px]">Saudi Arabian Innovation Award</span>
                    <p className="sm:text-mobile-text-md 2xl:text-desktop-text-md text-smoke-strong mt-[20px]">Honored
                        with the Saudi Arabian
                        Innovation Award, we are acknowledged for our pioneering contributions to technology and
                        business transformation in the region</p>
                </div>
            </div>
        </div>
    )
}