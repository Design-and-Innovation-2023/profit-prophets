import React from 'react';

interface TwoColumnLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ leftContent, rightContent }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        {leftContent}
      </div>
      <div style={{ flex: 1 }}>
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
