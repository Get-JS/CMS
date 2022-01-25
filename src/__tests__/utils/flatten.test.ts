import flatten from '@/utils/flatten';

describe('flatten', () => {
  it('has nested children Array to flatten Array ', () => {
    const data = [
      {
        menuId: 'A',
        parentMenuId: '',
        subMenuList: [
          {
            menuId: 'A_1',
            parentMenuId: 'A',
            subMenuList: [],
          },
          {
            menuId: 'A_2',
            parentMenuId: 'A',
            subMenuList: [],
          },
          {
            menuId: 'A_3',
            parentMenuId: 'A',
            subMenuList: [],
          },
        ],
      },
      {
        menuId: 'B',
        parentMenuId: '',
        subMenuList: [],
      },
      {
        menuId: 'C',
        parentMenuId: '',
        subMenuList: [
          {
            menuId: 'C_1',
            parentMenuId: 'C',
            subMenuList: [],
          },
          {
            menuId: 'C_2',
            parentMenuId: 'C',
            subMenuList: [],
          },
          {
            menuId: 'C_3',
            parentMenuId: 'C',
            subMenuList: [
              {
                menuId: 'C_3_1',
                parentMenuId: 'C_3',
                subMenuList: [],
              },
            ],
          },
          {
            menuId: 'C_4',
            parentMenuId: 'C',
            subMenuList: [],
          },
        ],
      },
    ];

    expect(flatten(data, 'subMenuList')).toEqual([
      {
        menuId: 'A',
        parentMenuId: '',
        subMenuList: [
          {
            menuId: 'A_1',
            parentMenuId: 'A',
            subMenuList: [],
          },
          {
            menuId: 'A_2',
            parentMenuId: 'A',
            subMenuList: [],
          },
          {
            menuId: 'A_3',
            parentMenuId: 'A',
            subMenuList: [],
          },
        ],
      },
      {
        menuId: 'A_1',
        parentMenuId: 'A',
        subMenuList: [],
      },
      {
        menuId: 'A_2',
        parentMenuId: 'A',
        subMenuList: [],
      },
      {
        menuId: 'A_3',
        parentMenuId: 'A',
        subMenuList: [],
      },
      {
        menuId: 'B',
        parentMenuId: '',
        subMenuList: [],
      },
      {
        menuId: 'C',
        parentMenuId: '',
        subMenuList: [
          {
            menuId: 'C_1',
            parentMenuId: 'C',
            subMenuList: [],
          },
          {
            menuId: 'C_2',
            parentMenuId: 'C',
            subMenuList: [],
          },
          {
            menuId: 'C_3',
            parentMenuId: 'C',
            subMenuList: [
              {
                menuId: 'C_3_1',
                parentMenuId: 'C_3',
                subMenuList: [],
              },
            ],
          },
          {
            menuId: 'C_4',
            parentMenuId: 'C',
            subMenuList: [],
          },
        ],
      },
      {
        menuId: 'C_1',
        parentMenuId: 'C',
        subMenuList: [],
      },
      {
        menuId: 'C_2',
        parentMenuId: 'C',
        subMenuList: [],
      },
      {
        menuId: 'C_3',
        parentMenuId: 'C',
        subMenuList: [
          {
            menuId: 'C_3_1',
            parentMenuId: 'C_3',
            subMenuList: [],
          },
        ],
      },
      {
        menuId: 'C_3_1',
        parentMenuId: 'C_3',
        subMenuList: [],
      },
      {
        menuId: 'C_4',
        parentMenuId: 'C',
        subMenuList: [],
      },
    ]);
  });
});
