import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import cls from "./SubMenu.module.css";


export default function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div onClick={item.subNav && showSubnav} className={cls.sidebarLabel}>
        <span>{item.title} </span>
      </div>

      <div className={subnav ? `${cls.subNav}  ${cls.active} ` : `${cls.subNav}`}>
        <div className={cls.wrapper}>
          <h4 className={cls.text}>Каталог Дверей</h4>
          <hr className={cls.horizontalRule} />
          <div className={cls.submenu}>
            {item.subNav.map((subItem, index) => (

              <Link key={index} href={subItem.path} passHref>
                <div className={cls.submenuImg}>
                  <Image src={subItem.url} alt="close_icon" width="216" height="250" />
                  <span className={cls.submenuTitle} >{subItem.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
