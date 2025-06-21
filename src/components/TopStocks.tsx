
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Star } from 'lucide-react';

const topStocks = [
  { 
    symbol: 'NABIL', 
    name: 'Nabil Bank Ltd.', 
    price: 1245.00, 
    change: 2.3, 
    prediction: 'BUY', 
    confidence: 85,
    volume: '12.5K'
  },
  { 
    symbol: 'NIC', 
    name: 'NIC Asia Bank Ltd.', 
    price: 892.50, 
    change: -1.2, 
    prediction: 'HOLD', 
    confidence: 78,
    volume: '8.9K'
  },
  { 
    symbol: 'EBL', 
    name: 'Everest Bank Ltd.', 
    price: 675.25, 
    change: 3.1, 
    prediction: 'BUY', 
    confidence: 92,
    volume: '15.2K'
  },
  { 
    symbol: 'UPPER', 
    name: 'Upper Tamakoshi Hydropower', 
    price: 456.75, 
    change: -0.8, 
    prediction: 'SELL', 
    confidence: 71,
    volume: '6.3K'
  },
  { 
    symbol: 'CHDC', 
    name: 'Chilime Hydropower Company', 
    price: 523.40, 
    change: 1.9, 
    prediction: 'BUY', 
    confidence: 83,
    volume: '9.7K'
  },
];

export const TopStocks = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
            <Star className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Top AI Picks</h2>
            <p className="text-sm text-gray-500">AI-recommended stocks</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {topStocks.map((stock, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between p-4 bg-gradient-to-r from-white to-gray-50 rounded-lg border hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">{stock.symbol}</span>
                  <Badge 
                    variant={
                      stock.prediction === 'BUY' ? 'default' : 
                      stock.prediction === 'SELL' ? 'destructive' : 
                      'secondary'
                    }
                    className="text-xs"
                  >
                    {stock.prediction}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gray-900">NPR {stock.price.toFixed(2)}</div>
                  <div className={`flex items-center text-sm ${
                    stock.change >= 0 ? 'text-green-600' : 'text-red-500'
                  }`}>
                    {stock.change >= 0 ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(1)}%
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className="truncate pr-2">{stock.name}</span>
                <div className="flex items-center space-x-4 flex-shrink-0">
                  <span>Vol: {stock.volume}</span>
                  <span className="text-blue-600 font-medium">{stock.confidence}% confident</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
