import React, { useState, useRef } from "react";
import cls from "./SidebarNav.module.css";

import Image from 'next/image';
import Link from "next/link";
import { NavData, Sidebar } from "../SidebarData";
import useOutsideClick from "@hooks/useOutsideClick";


export function SubMenu({ item, showSidebar }) {
  const [subnav, setSubnav] = useState(false);

  function showSubnav() {
    setSubnav(false);
    setSubnav(true);
  }

  function hideSubnav() {
    setSubnav(false);
    showSidebar();
  }

  return (
    <>
      <div
        onMouseEnter={item.subNav && showSubnav}
        onMouseLeave={() => setSubnav(false)}
        className={cls.productLink_label}
      >
        <p>{item.title} <span>&rsaquo;</span></p>
      </div>

      <div
        onMouseEnter={item.subNav && showSubnav}
        onMouseLeave={() => setSubnav(false)}
      >
        <div className={subnav ? `${cls.subNav}  ${cls.active} ` : `${cls.subNav}`}>
          <div className={cls.subNavContainer}>
            <h4 className={cls.subNav_title}>Каталог Дверей</h4>
            <hr className={cls.subNav_hr} />
            <div className={cls.subNav_grid}>
              {item.subNav.map((subItem, index) => (

                <Link key={index} href={subItem.path} passHref>
                  <div className={cls.subNav_card} onClick={hideSubnav}>
                    <Image src={subItem.url} alt="close_icon" width="200" height="230" />
                    <span className={cls.card_title} >{subItem.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default function SidebarNav({ sidebar, showSidebar }) {

  return (
    <>
      <nav className={sidebar ? `${cls.sidebarNav}  ${cls.active} ` : `${cls.sidebarNav}`}>
        <div className={cls.sidebarContainer}>

          <button className={`${cls.btn} ${cls.crossBtn}`} onClick={showSidebar}>
            <Image src="/cross_icon.svg" alt="close_icon" width="25" height="25" />
          </button>
          <input
            className={cls.searchInput}
            type="text"
            placeholder="Поиск по сайту"
          />
          <hr className={cls.horizontalRule} />
          <div className={cls.productLinks}>
            {NavData.map((item, index) => {
              return <SubMenu item={item} key={index} showSidebar={showSidebar} />;
            })}
          </div>
          <hr className={cls.horizontalRule} />
          <div className={cls.siteLinks}>
            {Sidebar.map((item, index) => (
              <Link key={index} href={item.path} passHref >
                <span onClick={showSidebar} className={`${cls.siteLink_label} ${cls.hoverEffect}`} >{item.title}</span>
              </Link>
            ))}
          </div>
          <div className={cls.phoneNum}>
            <p>Call - Центр</p>
            <span><Image src="/phone_icon.svg" width="17" height="17" /> +998 97 344 24 17</span>
            <span><Image src="/phone_icon.svg" width="17" height="17" /> +998 97 344 25 18</span>
          </div>

        </div>
      </nav>

    </>
  );
}


