import React, { useRef, useState } from "react";
import cls from "./Header.module.css";

import Image from 'next/image';
import SidebarNav from "./SidebarNav/SidebarNav";
import Search from "./Search/Search";
import { ArrowDown_icon, HumburgerMenu, Search_icon, WishList_icon } from "@constants/icons";
import useOutsideClick from "@hooks/useOutsideClick";
import Link from "next/link";
import { useTranslation } from 'react-i18next';


const Header = () => {
    const langRef = useRef();
    const sidebarRef = useRef();
    const searchRef = useRef();
    const [isOpen, setIsOpen] = useState()
    const [sidebar, setSidebar] = useState(false);
    const [searchbar, setSearchbar] = useState(false);
    const { t, i18n } = useTranslation();

    function showSidebar() {
        setSearchbar(false);
        setSidebar(!sidebar);
    }

    function setSearchOpen() {
        setSidebar(false);
        setSearchbar(!searchbar);
    }
    useOutsideClick(langRef, () => setIsOpen(false), isOpen);

    useOutsideClick(sidebarRef, () => setSidebar(false), sidebar)

    useOutsideClick(searchRef, () => setSearchbar(false), searchbar)

    return (
        <>
            <header className={cls.header}>
                <div className={cls.headerContainer}>
                    <div className={cls.headerLeft}>
                        <button ref={sidebarRef} className={cls.btn} onClick={showSidebar}>
                            <HumburgerMenu />
                        </button>
                        <div ref={langRef} className={cls.langContainer}>
                            <button className={`${cls.btn} ${cls.translateBtn}`} onClick={() => setIsOpen(!isOpen)}>
                                Rus
                                <ArrowDown_icon />
                            </button>
                            <div className={isOpen ? `${cls.langMenu}` : `${cls.langMenuInActive}`}>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={`${cls.btn} ${cls.langBtn}`}
                                >
                                    En
                                </button>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={`${cls.btn} ${cls.langBtn}`}
                                >
                                    Ru
                                </button>
                            </div>
                        </div>
                    </div>
                    <Link href={"/"} >
                        <Image src="/akbarRich_logo.svg" alt="AkbarRich" width="125" height="63" />
                    </Link>
                    <div className={cls.headerRight}>
                        <button ref={searchRef} className={`${cls.btn} ${cls.searchBtn}`} onClick={setSearchOpen} >
                            <Search_icon />
                        </button>
                        <button className={cls.btn}>
                            <WishList_icon />
                        </button>
                        <Link href="/contact">
                            <button className={`${cls.btn} ${cls.contactBtn}`}>{t('Связаться с нами')}</button>
                        </Link>
                    </div>
                </div>
            </header>
            <SidebarNav sidebar={sidebar} showSidebar={showSidebar} />
            <Search searchbar={searchbar} />
        </>
    );
};

export default Header;