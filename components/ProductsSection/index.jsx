import {One} from "@/components/ProductsSection/components/One";
import {Two} from "@/components/ProductsSection/components/Two";
import {Three} from "@/components/ProductsSection/components/Three";
import {Four} from "@/components/ProductsSection/components/Four";
import {Five} from "@/components/ProductsSection/components/Five";

export const ProductsSection = () => {
    return (
        <div className="sm:pt-[80px] 2xl:pt-[160px] bg-base-weak">
            <p className="sm:px-[20px] lg:px-[40px] 2xl:pl-[64px] 4xl:pl-[100px] sm:text-mobile-title-md 2xl:text-desktop-title-md text-base-strong uppercase">A
                Company Driven</p>
            <p className="sm:px-[20px] lg:px-[40px] 2xl:pl-[64px] 4xl:pl-[100px] sm:text-mobile-title-md 2xl:text-desktop-title-md text-base-strong uppercase">by
                Your Vision</p>
            <One/>
            <Two/>
            <Three/>
            <Four/>
            <Five/>
        </div>
    )
}