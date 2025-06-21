
import React from 'react';
import { Bell, Settings, User, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DashboardHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">NEPSE AI Predictor</h1>
              <p className="text-sm text-gray-500">Intelligent Stock Market Analysis</p>
            </div>
          </div>

          {/* Market Status */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">Market Status</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Open</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">NEPSE Index</p>
              <p className="text-lg font-bold text-blue-600">2,234.56</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Change</p>
              <p className="text-lg font-bold text-green-500">+1.24%</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
