import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ProductDescription = ({ description, specifications }) => {
  const [showMoreDescription, setShowMoreDescription] = useState(false);
  const [showMoreSpecs, setShowMoreSpecs] = useState(false);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Description */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Description</h2>
        <div className="text-gray-700 leading-relaxed text-sm sm:text-base">
          <p>{description}</p>
          {!showMoreDescription && (
            <button
              className="flex items-center space-x-1 text-blue-600 mt-2 text-sm"
              onClick={() => setShowMoreDescription(true)}
            >
              <span>See More</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Specifications */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Specification</h2>
        <div className="text-gray-700">
          <h3 className="font-medium mb-3 text-sm sm:text-base">Sharp FP-J30E-B Air Purifier</h3>
          <ul className="space-y-2">
            {specifications.slice(0, showMoreSpecs ? specifications.length : 3).map((spec, index) => (
              <li key={index} className="flex items-start text-sm sm:text-base">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
          {!showMoreSpecs && specifications.length > 3 && (
            <button
              className="flex items-center space-x-1 text-blue-600 mt-3 text-sm"
              onClick={() => setShowMoreSpecs(true)}
            >
              <span>See More</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;