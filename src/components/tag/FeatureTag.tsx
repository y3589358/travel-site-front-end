import React from 'react';
import './FeatureTag.scss';

const FeatureTag: React.FC<FeatureTagProps> = (props) => {
  const {icon, label, border, color, backgroundColor, onClick} = props;
  return <div
    className="feature-tag"
    style={{
      border,
      color,
      backgroundColor,
    }}
    onClick={() => onClick?.()}
  >
    <div className="feature-tag-content">
      <span className="feature-tag-icon">{icon}</span>
      <span className="feature-tag-label">{label}</span>
    </div>
  </div>;
};

export default FeatureTag;
