const useImageDimensions = (size: string) => {
  let imgDimensions;
  switch (size) {
    case 'sm':
      imgDimensions = { width: 600, height: 400 };
      break;
    case 'lg':
      imgDimensions = { width: 2000, height: 1000 };
      break;
    default:
      imgDimensions = { width: 800, height: 500 };
      break;
  }

  return imgDimensions;
};

export default useImageDimensions;
