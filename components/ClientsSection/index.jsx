import {Unsplash} from "@/assets/icons/Unsplash";
import {Slack} from "@/assets/icons/Slack";
import {Squarespace} from "@/assets/icons/Squarespace";
import {Dribbble} from "@/assets/icons/Dribbble";
import {Webflow} from "@/assets/icons/Webflow";

export const ClientsSection = () => {
    return (
        <div className="sm:px-[20px] sm:py-[80px] lg:px-[40px] 3xl:px-[64px] 2xl:py-[160px] 4xl:px-[100px] bg-bg-weak">
            <div className="flex lg:flex-row sm:flex-col md:items-center md:justify-between">
                <span
                    className="sm:text-mobile-title-sm 2xl:text-desktop-title-sm text-base-strong">Trusted by Industry Leaders</span>
                <button type="button" className="sm:mt-[20px] md:mt-0 w-[232px] h-[64px] rounded-full bg-base-strong text-base-weak">Success
                    stories
                </button>
            </div>
            <div className="3xl:grid 3xl:grid-cols-5 items-center justify-items-center sm:hidden 3xl:pt-[80px]">
                <Unsplash/>
                <Slack/>
                <Squarespace/>
                <Dribbble/>
                <Webflow/>
            </div>
            <div className="sm:pt-[40px] lg:pt-[80px] sm:hidden 3xl:hidden">
                <div className="grid grid-cols-3 items-center justify-items-center">
                    <Unsplash/>
                    <Slack/>
                    <Squarespace/>
                </div>
                <div className="grid grid-cols-2 items-center justify-items-center sm:pt-[40px] 2xl:pt-[80px]">
                    <Dribbble/>
                    <Webflow/>
                </div>
            </div>
            <div className="sm:pt-[40px] md:hidden">
                <div className="grid grid-cols-2 items-center justify-items-center">
                    <Unsplash style={{ height: '24px'}} />
                    <Slack style={{ height: '24px'}}/>
                </div>
                <div className="flex flex-row items-center justify-center sm:pt-[40px]">
                    <Squarespace style={{ height: '24px'}}/>
                </div>
                <div className="grid grid-cols-2 items-center justify-items-center sm:pt-[40px] 2xl:pt-[80px]">
                    <Dribbble style={{ height: '24px'}}/>
                    <Webflow style={{ height: '24px'}}/>
                </div>
            </div>
        </div>
    )
}