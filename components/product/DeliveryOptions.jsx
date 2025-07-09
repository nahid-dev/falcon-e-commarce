import { MessageCircle, Eye, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DeliveryOptions = ({ product }) => {
  return (
    <Card className="mt-4 lg:mt-0">
      <CardHeader className="pb-3 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">Delivery Options</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 pt-0">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm font-medium">Regular</span>
        </div>
        <p className="text-xs sm:text-sm text-gray-600">
          Delivery within 2-3 days
        </p>

        <div className="text-xs sm:text-sm text-red-600">
          Express - Not Available
        </div>

        <div className="border-t pt-3 sm:pt-4">
          <div className="text-sm font-medium mb-2">Sold by</div>
          <div className="flex items-start space-x-2 sm:space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {product?.merchant?.shop_name?.charAt(0).toUpperCase() || "H"}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium">
                {product?.merchant?.shop_name}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs text-gray-600 mt-1">
                <span>Ship on Time: 100%</span>
                <span>Chat Response: 90%</span>
                <span>Shop Rating: 99.8%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-3">
            <button className="flex items-center justify-center space-x-1 px-3 py-1 text-xs border rounded-full hover:bg-gray-50">
              <MessageCircle className="h-3 w-3" />
              <span>Chat Now</span>
            </button>
            <button className="flex items-center justify-center space-x-1 px-3 py-1 text-xs border rounded-full hover:bg-gray-50">
              <Eye className="h-3 w-3" />
              <span>View Shop</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeliveryOptions;