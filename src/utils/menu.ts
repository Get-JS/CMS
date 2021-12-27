import { menuCheck, MenuType } from '@/layouts/config/menu';

export function getCurrentMenu(menuList: MenuType[], pathname: string): MenuType | undefined {
  const programType = pathname.split('/')[1];
  const programPattern = programType ? menuCheck[programType] : { exact: true };
  if (!programPattern) return undefined;

  const findCurrentMenuList = menuList.filter((menuItem) => {
    if (programPattern.exact) return pathname === menuItem.url;
    return [menuItem.url, pathname]
      .map((url) =>
        url
          .split('/')
          .splice(1, programPattern.pathRange as number)
          .join('/'),
      )
      .every((pathRange, _i, pathRangeList) => pathRange === pathRangeList[0]);
  });

  return findCurrentMenuList[findCurrentMenuList.length - 1] || undefined;
}

export function getActiveMenuList(menuList: MenuType[], pathname: string) {
  const currentMenuFind = getCurrentMenu(menuList, pathname);
  if (!currentMenuFind) return [];
  const activeMenuList = [];
  let findMenu: MenuType | undefined = currentMenuFind;
  while (findMenu) {
    activeMenuList.push(findMenu);
    // eslint-disable-next-line no-loop-func
    findMenu = menuList.find((menuItem) => menuItem.menuId === findMenu?.parentMenuId);
  }

  return activeMenuList;
}
