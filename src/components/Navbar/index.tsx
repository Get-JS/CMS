import { FC, Fragment } from 'react';

import { NavLink } from 'react-router-dom';
import tw from 'twin.macro';

export interface Props {
  className?: string;
  menuList: {
    url: string;
    menuId: string;
    parentMenuId: string;
    menuType: 'text' | 'icon' | 'button';
    menuName: string;
    menuIcon?: string;
    target: boolean;
  }[];
  activeId: string;
}

const Navbar: FC<Props> = ({ className = '', menuList, activeId }) => {
  return (
    <nav
      className={className}
      tw="fixed bottom-0 left-0 w-full h-[72px] bg-secondary box-shadow[inset 1px 0 0 rgba(0, 0, 0, 0.08)] flex justify-between"
    >
      {menuList.map((menu) => (
        <Fragment key={menu.menuId}>
          <NavLink
            to={menu.url}
            tw="w-full h-full flex justify-center align-items[center] opacity-30"
            css={menu.menuId === activeId ? tw`opacity-100` : ''}
            aria-current={menu.menuId === activeId ? 'page' : undefined}
            target={menu.target ? '_blank' : undefined}
            title={menu.target ? '새창' : undefined}
          >
            {menu.menuType === 'text' && menu.menuName}
            {menu.menuType === 'icon' && <img src={menu.menuIcon} alt={menu.menuName} />}
            {menu.menuType === 'button' && <button type="button">{menu.menuName}</button>}
          </NavLink>
        </Fragment>
      ))}
    </nav>
  );
};

export default Navbar;
