
import React from 'react';
import { DashboardHeader } from '../components/DashboardHeader';
import { StockOverview } from '../components/StockOverview';
import { PredictionChart } from '../components/PredictionChart';
import { ModelMetrics } from '../components/ModelMetrics';
import { TopStocks } from '../components/TopStocks';
import { MarketNews } from '../components/MarketNews';
import { PortfolioSummary } from '../components/PortfolioSummary';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Market Overview Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StockOverview />
          </div>
          <div>
            <PortfolioSummary />
          </div>
        </section>

        {/* AI Prediction Charts */}
        <section>
          <PredictionChart />
        </section>

        {/* Analytics and Insights */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ModelMetrics />
          <TopStocks />
        </section>

        {/* Market News */}
        <section>
          <MarketNews />
        </section>
      </main>
    </div>
  );
};

export default Index;
