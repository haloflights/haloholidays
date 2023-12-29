import Link from "next/link";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  holidayItems,
  destinationItems,
} from "../../data/mainMenuData";
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
          </a>
          
        </li>
        {/* End home page menu */}

        <li
          className={`${
            isActiveParentChaild(holidayItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="#">
            <span className="mr-10">Holidays</span>
            <i className="icon icon-chevron-sm-down" />
          </Link>
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
        className={`menu-item ${
       isActiveParentChaild(destinationItems, pathname) ? "current" : ""
  } menu-item-has-children`}
>
  <Link href="/destinations">
    <span className="mr-11">Destinations</span>
    <i className="icon icon-chevron-sm-down" />
  </Link>
  <ul className="subnav">
  {destinationItems.map((dest, l) => (
        <li
          key={l}
          className={`${
            isActiveLink(dest.routePath, pathname) ? "current" : ""
          } menu-item-has-children`}
          onMouseEnter={() => handleMouseEnter(dest.name)}
          onMouseLeave={handleMouseLeave}
        >
          <a>
            <span className="mr-10">{dest.name}</span>
            <i className="icon-chevron-right icon-black" style={{ fontSize: '14px' }} />
          </a>
          {hoveredItem === dest.name && dest.subItems && dest.subItems.length > 0 && (
            <ul className="subnav-right">
              {dest.subItems.map((subItem, j) => (
                <li
                  key={j}
                  className={
                    isActiveLink(subItem.routePath, pathname) ? "" : ""
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

        <li
          className={`${
            isActiveParentChaild(blogItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <li className={pathname === "/blog-list-v1" ? "current" : ""}>
          <Link href="/blog-list-v1">Blogs</Link>
        </li>
        </li>
        {/* End blogIems */}

        <li
          className={`${
            isActiveParentChaild(pageItems, pathname) ? "current" : ""
          } menu-item-has-children`}
        >
          <a>
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

      </ul>
    </nav>
  );
};

export default MainMenu;
