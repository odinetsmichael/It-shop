export const orders = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return products }
  },
  {
    id: 2,
    title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return products }
  },
  {
    id: 3,
    title: 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products () { return products },
  }
]

export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    status: 'in repair',
    photo: 'https://antesports.com/wp-content/uploads/2023/07/Ant-Esports-H81-5.png',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 0,
    status: 'free',
    photo: 'https://antesports.com/wp-content/uploads/2023/07/Ant-Esports-H81-5.png',
    title: 'Product 1',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  }
]