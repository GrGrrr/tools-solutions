import {useState} from "react";
import {CaseCard} from "@/components/HomePage/CaseSection/components/CaseCard";
import {CaseItem} from "@/components/HomePage/CaseSection/components/CaseItem";
import {desktopInfo, desktopLogos, mobile} from "@/components/HomePage/CaseSection/data";
import {VerticalTab} from "@/components/HomePage/CaseSection/components/VerticalTab";

export const CaseSection = () => {
    const [activeTab, setActiveTab] = useState('01');
    const handleTabClick = (index) => setActiveTab(index);

    return (
        <div className="sm:px-[20px] sm:py-[80px] lg:px-[40px] 2xl:px-[64px] 2xl:py-[160px] 4xl:px-[100px] bg-bg-weak">
            <p className="sm:text-mobile-title-md 2xl:text-desktop-title-md text-base-strong uppercase">Featured Case
                studies</p>
            <div
                className="sm:hidden 2xl:grid 2xl:grid-cols-2 2xl:gap-[40px] auto-cols-max 2xl:pt-[80px]">
                {desktopInfo.map((item, i) => <CaseItem key={i} item={item} activeTab={activeTab} index={item.index}/>)}
                <div className="flex flex-col">
                    {desktopLogos.map((item, i) => <VerticalTab key={i} item={item} onClick={handleTabClick}
                                                                activeTab={activeTab} index={item.index}/>)}
                </div>
            </div>
            <div
                className="sm:flex sm:flex-row overflow-x-auto sm:pt-[60px] 2xl:hidden">
                {mobile.map((item, i) => <CaseCard key={i} item={item}/>)}
            </div>
        </div>
    )
}