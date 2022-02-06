import { MenuType } from '@/modules/menu/@types';
import { getActiveMenuList } from '@/modules/menu/utils';
import flatten from '@/utils/flatten';

describe('getActiveMenuList', () => {
  const data = flatten(
    [
      {
        url: '/programA',
        menuId: 'A',
        parentMenuId: '',
        menuType: 'text',
        menuName: 'programA',
        depth: 1,
        pageDescription: '',
        target: true,
        show: true,
        ord: 1,
        subMenuList: [
          {
            url: '/programA',
            menuId: 'A_1',
            parentMenuId: 'A',
            menuType: 'text',
            menuName: 'programA_1',
            depth: 2,
            pageDescription: '',
            target: false,
            show: true,
            ord: 1,
            subMenuList: [],
          },
        ],
      },
      {
        url: '/programB',
        menuId: 'B',
        parentMenuId: '',
        menuType: 'text',
        menuName: 'programB',
        depth: 1,
        pageDescription: '',
        target: false,
        show: true,
        ord: 2,
        subMenuList: [],
      },
      {
        url: '/programB/23',
        menuId: 'B_R',
        parentMenuId: '',
        menuType: 'text',
        menuName: 'programB_R_23',
        depth: 1,
        pageDescription: '',
        target: false,
        show: true,
        ord: 3,
        subMenuList: [],
      },
      {
        url: '/static_a',
        menuId: 'STATIC_A',
        parentMenuId: '',
        menuType: 'text',
        menuName: 'STATIC_A',
        depth: 1,
        pageDescription: '',
        target: false,
        show: true,
        ord: 4,
        subMenuList: [],
      },
      {
        url: '/programC/A',
        menuId: 'C',
        parentMenuId: '',
        menuType: 'text',
        menuName: 'programC',
        depth: 1,
        pageDescription: '',
        target: true,
        show: true,
        ord: 5,
        subMenuList: [
          {
            url: '/programC/A',
            menuId: 'C_1',
            parentMenuId: 'C',
            menuType: 'text',
            menuName: 'programC_1',
            depth: 1,
            pageDescription: '',
            target: false,
            show: true,
            ord: 1,
            subMenuList: [],
          },
          {
            url: '/programC/B',
            menuId: 'C_2',
            parentMenuId: 'C',
            menuType: 'text',
            menuName: 'programC_2',
            depth: 1,
            pageDescription: '',
            target: false,
            show: true,
            ord: 2,
            subMenuList: [],
          },
          {
            url: '/programC/C',
            menuId: 'C_3',
            parentMenuId: 'C',
            menuType: 'text',
            menuName: 'programC_3',
            depth: 1,
            pageDescription: '',
            target: true,
            show: true,
            ord: 3,
            subMenuList: [
              {
                url: '/programC/C',
                menuId: 'C_3_1',
                parentMenuId: 'C_3',
                menuType: 'text',
                menuName: 'programC_3_1',
                depth: 1,
                pageDescription: '',
                target: false,
                show: true,
                ord: 1,
                subMenuList: [],
              },
            ],
          },
          {
            url: '/programC/D',
            menuId: 'C_4',
            parentMenuId: 'C',
            menuType: 'text',
            menuName: 'programC_4',
            depth: 1,
            pageDescription: '',
            target: false,
            show: true,
            ord: 4,
            subMenuList: [],
          },
        ],
      },
    ] as MenuType[],
    'subMenuList',
  );

  const programPatternCheck = {
    programA: {
      exact: false,
      pathRange: 1,
    },
    programB: {
      exact: false,
      pathRange: 1,
    },
    programC: {
      exact: false,
      pathRange: 2,
    },
  };

  it.each(['/programA/create', '/programA/1', '/programA/update/1'])(
    'pathname [%s] is [programA] Menu Select { pathRange: 1 }',
    (pathname) => {
      expect(getActiveMenuList(data, pathname, programPatternCheck)).toEqual([
        {
          url: '/programA',
          menuId: 'A_1',
          parentMenuId: 'A',
          menuType: 'text',
          menuName: 'programA_1',
          depth: 2,
          pageDescription: '',
          target: false,
          show: true,
          ord: 1,
          subMenuList: [],
        },
        {
          url: '/programA',
          menuId: 'A',
          parentMenuId: '',
          menuType: 'text',
          menuName: 'programA',
          depth: 1,
          pageDescription: '',
          target: true,
          show: true,
          ord: 1,
          subMenuList: [
            {
              url: '/programA',
              menuId: 'A_1',
              parentMenuId: 'A',
              menuType: 'text',
              menuName: 'programA_1',
              depth: 2,
              pageDescription: '',
              target: false,
              show: true,
              ord: 1,
              subMenuList: [],
            },
          ],
        },
      ]);
    },
  );

  it.each(['/programB/create', '/programB/1', '/programB/update/1'])(
    'If There are more two menus that have duplicate patterns, choose the last menu found: (programB pattern has two menus) { pathRange: 1 }',
    (pathname) => {
      expect(getActiveMenuList(data, pathname, programPatternCheck)).toEqual([
        {
          url: '/programB/23',
          menuId: 'B_R',
          parentMenuId: '',
          menuType: 'text',
          menuName: 'programB_R_23',
          depth: 1,
          pageDescription: '',
          target: false,
          show: true,
          ord: 3,
          subMenuList: [],
        },
      ]);
    },
  );

  it.each(['/static_a'])('If exist not program pattern, default value { exact: true }', (pathname) => {
    expect(getActiveMenuList(data, pathname, programPatternCheck)).toEqual([
      {
        url: '/static_a',
        menuId: 'STATIC_A',
        parentMenuId: '',
        menuType: 'text',
        menuName: 'STATIC_A',
        depth: 1,
        pageDescription: '',
        target: false,
        show: true,
        ord: 4,
        subMenuList: [],
      },
    ]);
  });

  it.each(['/programC/A', '/programC/A/create', '/programC/A/update'])(
    'pathname [%s] is [programA] Menu Select 2depth { pathRange: 2 }',
    (pathname) => {
      expect(getActiveMenuList(data, pathname, programPatternCheck)).toEqual([
        {
          url: '/programC/A',
          menuId: 'C_1',
          parentMenuId: 'C',
          menuType: 'text',
          menuName: 'programC_1',
          depth: 1,
          pageDescription: '',
          target: false,
          show: true,
          ord: 1,
          subMenuList: [],
        },
        {
          url: '/programC/A',
          menuId: 'C',
          parentMenuId: '',
          menuType: 'text',
          menuName: 'programC',
          depth: 1,
          pageDescription: '',
          target: true,
          show: true,
          ord: 5,
          subMenuList: [
            {
              url: '/programC/A',
              menuId: 'C_1',
              parentMenuId: 'C',
              menuType: 'text',
              menuName: 'programC_1',
              depth: 1,
              pageDescription: '',
              target: false,
              show: true,
              ord: 1,
              subMenuList: [],
            },
            {
              url: '/programC/B',
              menuId: 'C_2',
              parentMenuId: 'C',
              menuType: 'text',
              menuName: 'programC_2',
              depth: 1,
              pageDescription: '',
              target: false,
              show: true,
              ord: 2,
              subMenuList: [],
            },
            {
              url: '/programC/C',
              menuId: 'C_3',
              parentMenuId: 'C',
              menuType: 'text',
              menuName: 'programC_3',
              depth: 1,
              pageDescription: '',
              target: true,
              show: true,
              ord: 3,
              subMenuList: [
                {
                  url: '/programC/C',
                  menuId: 'C_3_1',
                  parentMenuId: 'C_3',
                  menuType: 'text',
                  menuName: 'programC_3_1',
                  depth: 1,
                  pageDescription: '',
                  target: false,
                  show: true,
                  ord: 1,
                  subMenuList: [],
                },
              ],
            },
            {
              url: '/programC/D',
              menuId: 'C_4',
              parentMenuId: 'C',
              menuType: 'text',
              menuName: 'programC_4',
              depth: 1,
              pageDescription: '',
              target: false,
              show: true,
              ord: 4,
              subMenuList: [],
            },
          ],
        },
      ]);
    },
  );

  it.each(['/programC/C', '/programC/C/create', '/programC/C/update'])(
    'pathname [%s] is [programA] Menu Select 3depth { pathRange: 2 }',
    (pathname) => {
      expect(getActiveMenuList(data, pathname, programPatternCheck)).toEqual([
        {
          url: '/programC/C',
          menuId: 'C_3_1',
          parentMenuId: 'C_3',
          menuType: 'text',
          menuName: 'programC_3_1',
          depth: 1,
          pageDescription: '',
          target: false,
          show: true,
          ord: 1,
          subMenuList: [],
        },
        {
          url: '/programC/C',
          menuId: 'C_3',
          parentMenuId: 'C',
          menuType: 'text',
          menuName: 'programC_3',
          depth: 1,
          pageDescription: '',
          target: true,
          show: true,
          ord: 3,
          subMenuList: [
            {
              url: '/programC/C',
              menuId: 'C_3_1',
              parentMenuId: 'C_3',
              menuType: 'text',
              menuName: 'programC_3_1',
              depth: 1,
              pageDescription: '',
              target: false,
              show: true,
              ord: 1,
              subMenuList: [],
            },
          ],
        },
        {
          url: '/programC/A',
          menuId: 'C',
          parentMenuId: '',
          menuType: 'text',
          menuName: 'programC',
          depth: 1,
          pageDescription: '',
          target: true,
          show: true,
          ord: 5,
          subMenuList: [
            {
              url: '/programC/A',
              menuId: 'C_1',
              parentMenuId: 'C',
              menuType: 'text',
              menuName: 'programC_1',
              depth: 1,
              pageDescription: '',
              target: false,
              show: true,
              ord: 1,
              subMenuList: [],
            },
            {
              url: '/programC/B',
              menuId: 'C_2',
              parentMenuId: 'C',
              menuType: 'text',
              menuName: 'programC_2',
              depth: 1,
              pageDescription: '',
              target: false,
              show: true,
              ord: 2,
              subMenuList: [],
            },
            {
              url: '/programC/C',
              menuId: 'C_3',
              parentMenuId: 'C',
              menuType: 'text',
              menuName: 'programC_3',
              depth: 1,
              pageDescription: '',
              target: true,
              show: true,
              ord: 3,
              subMenuList: [
                {
                  url: '/programC/C',
                  menuId: 'C_3_1',
                  parentMenuId: 'C_3',
                  menuType: 'text',
                  menuName: 'programC_3_1',
                  depth: 1,
                  pageDescription: '',
                  target: false,
                  show: true,
                  ord: 1,
                  subMenuList: [],
                },
              ],
            },
            {
              url: '/programC/D',
              menuId: 'C_4',
              parentMenuId: 'C',
              menuType: 'text',
              menuName: 'programC_4',
              depth: 1,
              pageDescription: '',
              target: false,
              show: true,
              ord: 4,
              subMenuList: [],
            },
          ],
        },
      ]);
    },
  );
});