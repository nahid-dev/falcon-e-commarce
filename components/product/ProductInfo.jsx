import { Star, Heart, Share2 } from 'lucide-react';

const ProductInfo = ({ name, price, originalPrice, rating, reviewCount }) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 leading-tight">{name}</h1>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-sm font-medium">{rating}</span>
            <div className="flex ml-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-xs sm:text-sm text-gray-600">({reviewCount.toLocaleString()})</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-xl sm:text-2xl font-bold text-emerald-600">৳{price.toFixed(2)}</span>
        <span className="text-base sm:text-lg text-gray-500 line-through">৳{originalPrice}</span>
      </div>

      <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs sm:text-sm inline-block">
        Promotion: Min. spend ৳550
      </div>
    </div>
  );
};

export default ProductInfo;