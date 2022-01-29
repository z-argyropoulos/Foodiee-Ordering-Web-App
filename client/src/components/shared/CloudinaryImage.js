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
  width = 400,
  height = 400,
  styles,
}) => {
  // Get image based on publicID
  const myImage = cld.image(publicId);

  myImage.resize(fill().width(width).height(height));

  return (
    <AdvancedImage
      cldImg={myImage}
      style={{ ...styles, width: '100%' }}
    />
  );
};

export default CloudinaryImage;
