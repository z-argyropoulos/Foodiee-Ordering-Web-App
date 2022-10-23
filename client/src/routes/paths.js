const combinePath = (root, subpath) => {
  return `${root}/${subpath}`;
};

const PATH_PAGE = {
  root: '/',
  stores: '/stores',
  checkout: '/checkout',
};

const PATH_STORES = {
  root: PATH_PAGE.stores,
  store: combinePath(PATH_PAGE.stores, 'store'),
};

export { PATH_PAGE, PATH_STORES };
