import Image from 'next/image';
import { useState } from 'react';

const ProductImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt="Product"
                  className="w-full h-full object-cover"
                  width={500}
                    height={500}
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
              selectedImage === index ? 'border-blue-500' : 'border-gray-200'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
                    src={image}
                     width={500}
                    height={500}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;