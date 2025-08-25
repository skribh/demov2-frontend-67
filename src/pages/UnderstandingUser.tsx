import React from 'react';
import { Layout } from '@/components/Layout';
import { UnderstandingUserSection } from '@/components/investor/sections/UnderstandingUserSection';

const UnderstandingUser: React.FC = () => {
  return (
    <Layout>
      <UnderstandingUserSection />
    </Layout>
  );
};

export default UnderstandingUser;