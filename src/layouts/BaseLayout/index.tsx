import { FC, useMemo } from 'react';

import { useLocation } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import { getActiveMenuList } from '@/utils/menu';

import { menuFlattenList } from '../config/menu';

const BaseLayout: FC = ({ children }) => {
  const location = useLocation();

  const menuList = menuFlattenList;
  const menuDepth1List = useMemo(() => menuList.filter((menu) => menu.show && menu.depth === 1), [menuList]);
  const activeMenuList = useMemo(() => getActiveMenuList(menuList, location.pathname), [location.pathname, menuList]);
  const activeId = useMemo(
    () => activeMenuList.find((activeMenu) => activeMenu.depth === 1)?.menuId || '',
    [activeMenuList],
  );

  return (
    <>
      <div tw="mb-72">{children}</div>
      <Navbar menuList={menuDepth1List} activeId={activeId} />
    </>
  );
};

export default BaseLayout;
