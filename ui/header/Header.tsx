"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NavLinksDesctop, NavLinksMobile, BurgerMenu } from "./NavLinks";

export function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`text-gray-800 sticky top-0 left-0 w-full px-5 z-[999] transition-colors duration-300 ${
                !isScrolled ? "" : "bg-[#0b0b0b80] shadow-lg backdrop-blur-md"
            }`}
        >
            <div className="max-w-screen-2xl lg:p-5 py-1 mx-auto flex items-center justify-between text-gray-400">
                <Logo title="Seovileo" />
                <BurgerMenu showMenu={showMenu} handleMenu={handleMenu} />
                <NavLinksDesctop pathname={pathname} />
                <NavLinksMobile
                    showMenu={showMenu}
                    pathname={pathname}
                    handleMenu={handleMenu}
                />
            </div>
        </header>
    );
}
