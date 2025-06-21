
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Brain, Zap, Target, TrendingUp } from 'lucide-react';

const modelStats = [
  {
    name: 'LSTM Neural Network',
    accuracy: 87,
    status: 'Active',
    lastTrained: '2 hours ago',
    predictions: '1,240',
  },
  {
    name: 'Random Forest',
    accuracy: 82,
    status: 'Active',
    lastTrained: '1 day ago',  
    predictions: '856',
  },
  {
    name: 'XGBoost',
    accuracy: 79,
    status: 'Training',
    lastTrained: '3 hours ago',
    predictions: '673',
  },
];

const metrics = [
  { label: 'Prediction Accuracy', value: 87.3, icon: Target },
  { label: 'Model Confidence', value: 82.1, icon: Brain },
  { label: 'Processing Speed', value: 94.5, icon: Zap },
  { label: 'Success Rate', value: 89.7, icon: TrendingUp },
];

export const ModelMetrics = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-2 rounded-lg">
          <Brain className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">ML Model Performance</h2>
          <p className="text-sm text-gray-500">Real-time AI model analytics</p>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="space-y-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <metric.icon className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">{metric.label}</span>
            </div>
            <div className="flex items-center space-x-3 w-32">
              <Progress value={metric.value} className="flex-1 h-2" />
              <span className="text-sm font-semibold text-gray-900 w-12">{metric.value}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Active Models */}
      <div className="border-t pt-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Active Models</h3>
        <div className="space-y-3">
          {modelStats.map((model, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">{model.name}</span>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    model.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {model.status}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Accuracy: {model.accuracy}%</span>
                  <span>{model.predictions} predictions</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
