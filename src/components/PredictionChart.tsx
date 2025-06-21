
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Brain, TrendingUp, Calendar } from 'lucide-react';

const predictionData = [
  { date: '2024-01-01', actual: 2100, predicted: 2105, confidence: 85 },
  { date: '2024-01-02', actual: 2120, predicted: 2115, confidence: 82 },
  { date: '2024-01-03', actual: 2110, predicted: 2108, confidence: 88 },
  { date: '2024-01-04', actual: 2135, predicted: 2142, confidence: 79 },
  { date: '2024-01-05', actual: 2150, predicted: 2156, confidence: 85 },
  { date: '2024-01-06', actual: null, predicted: 2170, confidence: 76 },
  { date: '2024-01-07', actual: null, predicted: 2185, confidence: 73 },
  { date: '2024-01-08', actual: null, predicted: 2195, confidence: 71 },
];

export const PredictionChart = () => {
  const [timeframe, setTimeframe] = useState('1W');

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">AI Stock Predictions</h2>
            <p className="text-sm text-gray-500">NEPSE Index Forecast using Machine Learning</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {['1D', '1W', '1M', '3M'].map((period) => (
            <Button
              key={period}
              variant={timeframe === period ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeframe(period)}
              className="h-8"
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={predictionData}>
            <defs>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              className="text-xs"
            />
            <YAxis className="text-xs" />
            <Tooltip 
              labelFormatter={(value) => new Date(value).toLocaleDateString()}
              formatter={(value, name) => [value, name === 'actual' ? 'Actual' : 'Predicted']}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#actualGradient)"
              connectNulls={false}
            />
            <Area
              type="monotone"
              dataKey="predicted"
              stroke="#8B5CF6"
              strokeWidth={2}
              strokeDasharray="5,5"
              fill="url(#predictedGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">Actual Price</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600">AI Prediction</span>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Next prediction in 4 hours
        </div>
      </div>
    </Card>
  );
};
