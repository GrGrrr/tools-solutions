import {Unsplash} from "@/assets/icons/Unsplash";
import {Slack} from "@/assets/icons/Slack";
import {Squarespace} from "@/assets/icons/Squarespace";
import {Dribbble} from "@/assets/icons/Dribbble";
import {Webflow} from "@/assets/icons/Webflow";

export const ClientsSection = () => {
    return (
        <div className="sm:px-[20px] sm:py-[80px] 3xl:px-[64px] 3xl:py-[160px] bg-base-weak">
            <div className="flex 3xl:items-center sm:flex-col justify-between">
                <span className="sm:text-mobile-title-sm sm:pb-[40px] 3xl:text-desktop-title-sm text-base-strong 3xl:uppercase">Trusted by Industry Leaders</span>
                <button type="button" className="w-[232px] h-[64px] rounded-full bg-base-strong text-base-weak">Success
                    stories
                </button>
            </div>
            <div className="3xl:grid 3xl:grid-cols-5 items-center justify-items-center sm:pt-[40px] 3xl:pt-[80px]">
                <Unsplash/>
                <Slack/>
                <Squarespace/>
                <Dribbble/>
                <Webflow/>
            </div>
        </div>
    )
}