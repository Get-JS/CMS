import { FC, useMemo } from 'react';

import Navbar from '@/components/Navbar';
import { useActiveMenuList, useMenuList } from '@/modules/menu';

const BaseLayout: FC = ({ children }) => {
  const menuDepth1List = useMenuList(1);
  const activeMenuList = useActiveMenuList();
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
