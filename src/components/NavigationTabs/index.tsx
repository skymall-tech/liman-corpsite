/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';

const TabsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  border: none;
  background-color: ${({ isActive }) => (isActive ? '#d4af37' : '#f0f0f0')};
  color: ${({ isActive }) => (isActive ? 'white' : 'black')};
  cursor: pointer;
`;

const NavigationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <TabsContainer>
      <TabButton
        isActive={activeTab === 'home'}
        onClick={() => setActiveTab('home')}
      >
        Home
      </TabButton>
      <TabButton
        isActive={activeTab === 'businessMap'}
        onClick={() => setActiveTab('businessMap')}
      >
        Business Map
      </TabButton>
    </TabsContainer>
  );
};

export default NavigationTabs;
