import {CaseCard} from "@/components/CaseSection/components/CaseCard";
import {logos} from "@/components/CaseSection/data";

export const CaseSection = () => {
    return (
        <div className="sm:px-[20px] sm:py-[80px] lg:px-[40px] 2xl:px-[64px] 2xl:py-[160px] 4xl:px-[100px] bg-bg-weak">
            <p className="sm:text-mobile-title-md 2xl:text-desktop-title-md text-base-strong uppercase">Featured Case
                studies</p>
            <div
                className="sm:hidden 2xl:grid lg:grid-cols-2 lg:gap-[20px] lg:pt-[80px]">

            </div>
            <div
                className="sm:flex sm:flex-row overflow-x-auto sm:pt-[60px] 2xl:hidden">
                {logos.map((item, i) => <CaseCard key={i} item={item} />)}
            </div>
        </div>
    )
}