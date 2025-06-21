
import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

const metrics = [
  {
    title: 'Total Market Cap',
    value: 'NPR 3.2T',
    change: '+2.4%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    title: 'Active Stocks',
    value: '298',
    change: '+12',
    trend: 'up',
    icon: Activity,
  },
  {
    title: 'Volume Traded',
    value: '1.2M shares',
    change: '-5.6%',
    trend: 'down',
    icon: TrendingUp,
  },
  {
    title: 'AI Prediction Accuracy',
    value: '87.3%',
    change: '+0.8%',
    trend: 'up',
    icon: TrendingUp,
  },
];

export const StockOverview = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Market Overview</h2>
        <div className="text-sm text-gray-500">Last updated: 2 mins ago</div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <metric.icon className="h-5 w-5 text-blue-600" />
              <div className={`flex items-center text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-500'
              }`}>
                {metric.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {metric.change}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p className="text-sm text-gray-600">{metric.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
