
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Newspaper, Clock, ExternalLink } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'NEPSE Index Reaches New Monthly High Amid Banking Sector Rally',
    summary: 'The Nepal Stock Exchange index surged 2.4% today, driven by strong performance in banking stocks. AI models predict continued growth.',
    category: 'Market Update',
    time: '2 hours ago',
    sentiment: 'positive',
    aiImpact: 'High',
  },
  {
    id: 2,
    title: 'Hydropower Stocks Show Mixed Performance Despite Monsoon Season',
    summary: 'While some hydropower companies reported strong quarterly results, others faced challenges due to maintenance issues.',
    category: 'Sector Analysis',
    time: '4 hours ago',
    sentiment: 'neutral',
    aiImpact: 'Medium',
  },
  {
    id: 3,
    title: 'New AI Trading Algorithm Shows 89% Success Rate in NEPSE Predictions',
    summary: 'Recent backtesting results demonstrate improved accuracy in predicting daily stock movements using advanced machine learning.',
    category: 'Technology',
    time: '6 hours ago',
    sentiment: 'positive',
    aiImpact: 'Very High',
  },
  {
    id: 4,
    title: 'Foreign Investment in Nepalese Market Increases by 15% This Quarter',
    summary: 'International investors show growing confidence in Nepal\'s stock market, particularly in financial and energy sectors.',
    category: 'Investment',
    time: '1 day ago',
    sentiment: 'positive',
    aiImpact: 'High',
  },
];

export const MarketNews = () => {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-50 border-green-200';
      case 'negative': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Very High': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
            <Newspaper className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Market News & Analysis</h2>
            <p className="text-sm text-gray-500">AI-curated financial news</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {newsItems.map((news) => (
          <div 
            key={news.id}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {news.category}
                </Badge>
                <Badge className={`text-xs ${getImpactColor(news.aiImpact)}`}>
                  AI Impact: {news.aiImpact}
                </Badge>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {news.time}
              </div>
            </div>
            
            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {news.title}
            </h3>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {news.summary}
            </p>
            
            <div className="flex items-center justify-between">
              <div className={`text-xs px-2 py-1 rounded-full border ${getSentimentColor(news.sentiment)}`}>
                {news.sentiment.charAt(0).toUpperCase() + news.sentiment.slice(1)} Sentiment
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                Read More
                <ExternalLink className="h-3 w-3 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
