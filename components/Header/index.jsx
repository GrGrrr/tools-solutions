import Link from 'next/link';
import {Logo} from "@/assets/icons/Logo";
import {LogoMobile} from "@/assets/icons/LogoMobile";

export const Header = () => {
    return (
        <header
            className="sm:px-[20px] sm:pt-[40px] lg:px-[40px] 3xl:px-[64px] 2xl:pt-[40px] 4xl:px-[100px] relative z-10">
            <nav className="flex items-center justify-between pb-[80px]" aria-label="Global">
                <div className="2xl:flex 2xl:flex-1 sm:hidden">
                    <Link href="/">
                        <Logo/>
                    </Link>
                </div>
                <div className="sm:block 2xl:hidden">
                    <a href="#">
                        <LogoMobile/>
                    </a>
                </div>
                <div className="sm:hidden 2xl:flex 2xl:gap-x-12">
                    <a href="#" className="text-desktop-text-md text-base-weak">Link 1</a>
                    <a href="#" className="text-desktop-text-md text-base-weak">Link 2</a>
                    <a href="#" className="text-desktop-text-md text-base-weak">Link 3</a>
                    <a href="#" className="text-desktop-text-md text-base-weak">Link 4</a>
                </div>
                <div className="sm:hidden 2xl:flex 2xl:flex-1 2xl:justify-end">
                    <a href="#" className="text-desktop-text-md text-base-weak underline">English</a>
                </div>
            </nav>
        </header>
    )
}