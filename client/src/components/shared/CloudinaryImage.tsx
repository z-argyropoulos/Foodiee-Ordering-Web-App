import { Cloudinary } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { blur } from '@cloudinary/url-gen/actions/effect';
import Image from 'next/image';
import useImageDimensions from '@hooks/images/useImageDimensions';

// Create a Cloudinary instance and set your cloud name.
const cloudinaryInstance = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
});

const CloudinaryImage = ({
  publicId = 'status/404',
  size = 'md',
  alt = 'Some image',
}) => {
  const imgDimensions = useImageDimensions(size);

  // Get image based on publicID
  const imgRaw = cloudinaryInstance.image(publicId);

  const imgSrc = {
    image: imgRaw
      .resize(
        fill().width(imgDimensions.width).height(imgDimensions.height)
      )
      .toURL(),
    bluredImage: imgRaw
      .resize(
        fill()
          .width(imgDimensions.width / 10)
          .height(imgDimensions.height / 10)
      )
      .effect(blur())
      .toURL(),
  };

  return (
    <Image
      src={imgSrc.image}
      width={imgDimensions.width}
      height={imgDimensions.height}
      objectFit="cover"
      placeholder="blur"
      blurDataURL={imgSrc.bluredImage}
      alt={alt}
    />
  );
};

export default CloudinaryImage;
