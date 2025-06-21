
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Wallet, TrendingUp, Eye } from 'lucide-react';

const portfolioData = [
  { name: 'Banking', value: 45, color: '#3B82F6' },
  { name: 'Hydropower', value: 25, color: '#10B981' },
  { name: 'Insurance', value: 15, color: '#F59E0B' },
  { name: 'Hotels', value: 10, color: '#EF4444' },
  { name: 'Others', value: 5, color: '#8B5CF6' },
];

const portfolioStats = [
  { label: 'Total Value', value: 'NPR 2,45,678', change: '+12.4%' },
  { label: 'Today\'s Gain', value: 'NPR 5,432', change: '+2.3%' },
  { label: 'Total Stocks', value: '8 companies', change: '+1' },
];

export const PortfolioSummary = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
            <Wallet className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Portfolio</h2>
            <p className="text-sm text-gray-500">Your investment summary</p>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Eye className="h-4 w-4 mr-1" />
          View All
        </Button>
      </div>

      {/* Portfolio Stats */}
      <div className="space-y-4 mb-6">
        {portfolioStats.map((stat, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{stat.label}</span>
            <div className="text-right">
              <div className="font-semibold text-gray-900">{stat.value}</div>
              <div className="text-sm text-green-600">{stat.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Distribution */}
      <div className="border-t pt-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Sector Distribution</h3>
        <div className="h-32 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolioData}
                cx="50%"
                cy="50%"
                innerRadius={25}
                outerRadius={50}
                paddingAngle={2}
                dataKey="value"
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="grid grid-cols-2 gap-2">
          {portfolioData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-xs text-gray-600">{item.name} ({item.value}%)</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
