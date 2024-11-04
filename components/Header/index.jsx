import {Logo} from "@/assets/icons/Logo";
import {LogoMobile} from "@/assets/icons/LogoMobile";

export const Header = () => {
    return (
        <header className="sm:mx-[20px] sm:mt-[40px] 3xl:mx-[64px] 3xl:mt-[40px] relative z-10">
            <nav className="flex items-center justify-between pb-[80px]" aria-label="Global">
                <div className="flex 3xl:flex-1 sm:hidden 3xl:block">
                    <a href="#">
                        <Logo className="sm:block 3xl:hidden"/>
                    </a>
                </div>
                <div className="flex 3xl:flex-1 sm:block 3xl:hidden">
                    <a href="#">
                        <LogoMobile className="sm:block 3xl:hidden"/>
                    </a>
                </div>
                <div className="sm:hidden 3xl:flex 3xl:gap-x-12">
                    <a href="#" className="text-desktop-text-md text-base-weak">Link 1</a>
                    <a href="#" className="text-desktop-text-md text-base-weak">Link 2</a>
                    <a href="#" className="text-desktop-text-md text-base-weak">Link 3</a>
                    <a href="#" className="text-desktop-text-md text-base-weak">Link 4</a>
                </div>
                <div className="sm:hidden 3xl:flex 3xl:flex-1 3xl:justify-end">
                    <a href="#" className="text-desktop-text-md text-base-weak underline">English</a>
                </div>
            </nav>
        </header>
    )
}