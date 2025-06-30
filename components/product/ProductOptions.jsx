import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductOptions = ({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  quantity,
  onColorChange,
  onSizeChange,
  onQuantityChange,
}) => {
  const colorMap = {
    'Navy Blue': 'bg-blue-900',
    'Maroon': 'bg-red-900',
    'Blue': 'bg-blue-500',
    'Black': 'bg-black',
  };

  return (
    <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
      {/* Color Selection */}
      <div>
        <h3 className="text-sm font-medium mb-2 sm:mb-3">Available Color: {selectedColor}</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 ${
                selectedColor === color ? 'border-gray-800' : 'border-gray-300'
              } ${colorMap[color]}`}
              onClick={() => onColorChange(color)}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="text-sm font-medium mb-2 sm:mb-3">Select Size: {selectedSize}</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`px-3 py-2 sm:px-4 sm:py-2 border rounded text-sm ${
                selectedSize === size
                  ? 'border-gray-800 bg-gray-800 text-white'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onClick={() => onSizeChange(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="text-sm font-medium mb-2 sm:mb-3">Quantity</h3>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 sm:h-10 sm:w-10"
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
          >
            <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <span className="text-base sm:text-lg font-medium w-8 sm:w-12 text-center">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 sm:h-10 sm:w-10"
            onClick={() => onQuantityChange(quantity + 1)}
          >
            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;