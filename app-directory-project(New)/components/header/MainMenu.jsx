import Link from "next/link";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  holidayItems,
  destinationItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { usePathname } from "next/navigation";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false)

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="/">
            <span className="mr-10">Home</span>
            {/* <i className="icon icon-chevron-sm-down" /> */}
          </a>
          {/* <ul className="subnav">
            {homeItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul> */}
        </li>
        {/* End home page menu */}

        <li
          className={`${
            isActiveParentChaild(holidayItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Holidays</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {holidayItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End pages items */}

        <li
  className={`${
    isActiveParentChaild(destinationItems, pathname) ? "current" : ""
  } menu-item-has-children`}
>
  <a href="/destinations">
    <span className="mr-10">Destinations</span>
    <i className="icon icon-chevron-sm-down" />
  </a>
  <ul className="subnav">
  {destinationItems.map((menu, i) => (
        <li
          key={i}
          className={`menu-item ${
            isActiveParentChaild(destinationItems, pathname) ? "current" : ""
          }`}
          onMouseEnter={() => handleMouseEnter(menu.name)}
          onMouseLeave={handleMouseLeave}
        >
          <a>
            <span className="mr-10">{menu.name}</span>
            <i className="icon-chevron-right icon-black" style={{ fontSize: '14px' }} />
          </a>
          {hoveredItem === menu.name && menu.subItems && menu.subItems.length > 0 && (
            <ul className="subnav-right">
              {menu.subItems.map((subItem, j) => (
                <li
                  key={j}
                  className={
                    isActiveLink(subItem.routePath, pathname) ? "current" : ""
                  }
                >
                  <Link href={subItem.routePath}>{subItem.name}</Link>
                </li>
              ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
</li>

        {/* End pages items */}

        {/* <li className={isActiveParent ? "menu-item-has-children -has-mega-menu ":'menu-item-has-children -has-mega-menu'}>
          <a href="#">
            <span className="mr-10">Destinations</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega ">
            <CategoriesMegaMenu setIsActiveParent={setIsActiveParent} />
          </div>
        </li> */}
        {/* End categories menu items */}

        {/* <li className={pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li> */}
        {/* End Destinatinos single menu */}

        <li
          className={`${
            isActiveParentChaild(blogItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <li className={pathname === "/blog-list-v1" ? "current" : ""}>
          <Link href="/blog-list-v1">Blogs</Link>
        </li>

      
          
            {/* <i className="icon icon-chevron-sm-down" /> */}
          
          {/* <ul className="subnav">
            {blogItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul> */}
        </li>
        {/* End blogIems */}

        <li
          className={`${
            isActiveParentChaild(pageItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">More</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End pages items */}

        {/* <li
          className={`${
            pathname.split('/')[1] == 'dashboard'  || pathname.split('/')[1] == 'vendor-dashboard' ? "current" : ""
          } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}

        {/* <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainMenu;
