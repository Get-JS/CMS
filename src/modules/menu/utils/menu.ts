import { MenuType } from '@/modules/menu/@types';
import { menuCheck } from '@/modules/menu/config';
import allEqual from '@/utils/allEqual';

export function getCurrentMenu(menuList: MenuType[], currentUrl: string): MenuType | undefined {
  const programType = currentUrl.split('/')[1];
  const programPattern = programType ? menuCheck[programType] : { exact: true };
  if (!programPattern) return undefined;

  const findCurrentMenuList = menuList.filter((menuItem) => {
    if (programPattern.exact) return currentUrl === menuItem.url;
    const compUrlList = [menuItem.url, currentUrl].map((url) =>
      url
        .split('/')
        .splice(1, programPattern.pathRange as number)
        .join('/'),
    );
    return allEqual(compUrlList);
  });

  return findCurrentMenuList[findCurrentMenuList.length - 1] || undefined;
}

export function getActiveMenuList(menuList: MenuType[], currentUrl: string) {
  const currentMenuFind = getCurrentMenu(menuList, currentUrl);
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
