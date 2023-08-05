import React from 'react';
import './TwoColumnLayout.css';

interface TwoColumnLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ leftContent, rightContent }) => {
  return (
    <div className="two-column-layout">
      <div className="left-content">
        {leftContent}
      </div>
      <div className="right-content">
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
