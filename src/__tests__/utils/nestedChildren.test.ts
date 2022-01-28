import nestedChildren from '@/utils/nestedChildren';

describe('nestedChildren', () => {
  it('flatten Array to Array has nested children', () => {
    const data = [
      {
        menuId: 'A',
        parentMenuId: '',
      },
      {
        menuId: 'A_1',
        parentMenuId: 'A',
      },
      {
        menuId: 'A_2',
        parentMenuId: 'A',
      },
      {
        menuId: 'A_3',
        parentMenuId: 'A',
      },
      {
        menuId: 'B',
        parentMenuId: '',
      },
      {
        menuId: 'C',
        parentMenuId: '',
      },
      {
        menuId: 'C_1',
        parentMenuId: 'C',
      },
      {
        menuId: 'C_2',
        parentMenuId: 'C',
      },
      {
        menuId: 'C_3',
        parentMenuId: 'C',
      },
      {
        menuId: 'C_3_1',
        parentMenuId: 'C_3',
      },
      {
        menuId: 'C_4',
        parentMenuId: 'C',
      },
    ];

    expect(nestedChildren(data, 'menuId', 'parentMenuId', 'subMenuList', '')).toEqual([
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
    ]);
  });
});
