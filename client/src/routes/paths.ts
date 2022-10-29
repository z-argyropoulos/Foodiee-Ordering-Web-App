const combinePath = (root: string, subpath: string) => {
  return `${root}/${subpath}`;
};

const PATH_PAGE = {
  root: '/',
  restaurants: '/restaurants',
  restaurant: '/restaurant',
  checkout: '/checkout',
};

const PATH_RESTAURANTS = {
  root: PATH_PAGE.restaurants,
  restaurants: combinePath(PATH_PAGE.restaurants, 'restaurants'),
};

export { PATH_PAGE, PATH_RESTAURANTS };
