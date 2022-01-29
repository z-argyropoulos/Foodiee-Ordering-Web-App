import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage } from '@cloudinary/react';

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  },
});

const CloudinaryImage = ({
  publicId = 'stores/404',
  size = 'md',
  styles,
}) => {
  let imgDimensions;
  switch (size) {
    case 'sm':
      imgDimensions = { width: 700, height: 350 };
      break;
    case 'lg':
      imgDimensions = { width: 2000, height: 1000 };
      break;
    default:
      imgDimensions = { width: 800, height: 500 };
      break;
  }

  // Get image based on publicID
  const myImage = cld.image(publicId);

  myImage.resize(
    fill().width(imgDimensions.width).height(imgDimensions.height)
  );

  return (
    <AdvancedImage
      cldImg={myImage}
      style={{ ...styles, width: '100%' }}
    />
  );
};

export default CloudinaryImage;
