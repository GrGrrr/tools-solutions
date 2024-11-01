import {Logo} from "@/assets/icons/Logo";
import {Arrow} from "@/assets/icons/Arrow";
import {Facebook} from "@/assets/icons/Facebook";
import {Linkedin} from "@/assets/icons/Linkedin";
import {X} from "@/assets/icons/X";
import {LogoMobile} from "@/assets/icons/LogoMobile";

export const Footer = () => {
    return (
        <div className="sm:px-[20px] sm:pt-[40px] sm:pb-[40px] 3xl:px-[64px] 3xl:pt-[80px] 3xl:pb-[40px] relative z-10 bg-base-strong">
            <div className="flex lg:flex-1 pb-[40px] border-b-[1px] border-smoke-weak">
                <a href="#">
                    <Logo/>
                </a>
            </div>
            <div className="3xl:grid 3xl:grid-cols-2 sm:pt-[40px] 3xl:pt-[80px]">
                <div className="3xl:grid 3xl:grid-cols-2">
                    <div className="flex gap-x-12 flex-col">
                        <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak">About Us</a>
                        <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak mt-[10px]">Partners</a>
                        <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak mt-[10px]">Reports & Publications</a>
                    </div>
                    <div className="flex gap-x-12 flex-col">
                        <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak sm:mt-[30px] 3xl:mt-0">News & Media</a>
                        <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak mt-[10px]">Blog</a>
                        <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak mt-[10px]">Careers</a>
                        <a href="#" className="sm:text-mobile-text-md 3xl:text-desktop-text-md text-base-weak mt-[10px]">Contact Us</a>
                    </div>
                </div>
                <div className="sm:pt-[60px] 3xl:pt-0">
                    <span className="sm:hidden 3xl:block 3xl:text-desktop-text-md text-base-weak">Get valuable strategy, culture, and brand insights <br />straight to your inbox</span>
                    <span className="sm:text-mobile-text-md sm:block 3xl:hidden text-base-weak">Get valuable strategy, culture, and brand insights straight to your inbox</span>
                    <div className="relative flex flex-row my-4 border-b-[1px] border-smoke-weak">
                        <input type="text" name="email" placeholder="Your email here"
                               className="h-[88px] sm:text-mobile-subtitle 3xl:text-desktop-subtitle block w-full bg-base-strong appearance-none focus:outline-none"/>
                        <button><Arrow/></button>
                    </div>
                    <span className="sm:hidden 3xl:block 3xl:text-desktop-text-sm text-smoke-weak">By signing up to receive emails from T&S, you agree to our Privacy Policy. We treat <br />your info responsibly. Unsubscribe anytime</span>
                    <span className="sm:text-mobile-text-sm sm:block 3xl:hidden text-smoke-weak">By signing up to receive emails from T&S, you agree to our Privacy Policy. We treat your info responsibly. Unsubscribe anytime</span>
                </div>
            </div>
            <div className="sm:pt-[40px] 3xl:grid 3xl:grid-cols-2 3xl:pt-[80px]">
                <div>
                    <p className="sm:text-mobile-text-sm 3xl:text-desktop-text-sm text-base-weak">+966 920017730</p>
                    <p className="sm:text-mobile-text-sm 3xl:text-desktop-text-sm text-base-weak">info@tools-solutions.com</p>
                    <span className="sm:text-mobile-text-sm 3xl:text-desktop-text-sm text-smoke-weak">Copyright © 2024 Tools & Solutions®<br/>
                            P.O. Box 92009, Riyadh 11653 | Kingdom of Saudi Arabia</span>
                </div>
                <div className="flex items-end justify-between sm:pt-[40px]">
                    <div className="sm:flex">
                        <div className="mr-[20px]">
                        <Facebook />
                        </div>
                        <div className="mr-[20px]">
                        <Linkedin />
                        </div>
                        <X />
                    </div>
                    <span className="sm:text-mobile-text-sm 3xl:text-desktop-text-sm text-base-weak">Back to top ↑</span>
                </div>
            </div>
        </div>
    )
}