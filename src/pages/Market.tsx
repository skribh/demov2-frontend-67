import React from 'react';
import { Layout } from '@/components/Layout';
import { MarketSection } from '@/components/investor/sections/MarketSection';

const Market: React.FC = () => {
  return (
    <Layout>
      <MarketSection />
    </Layout>
  );
};

export default Market;