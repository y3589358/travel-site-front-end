import React from 'react';
import './NavSetpList.scss';

const NavStepList: React.FC<NavStepListProps> = (props) => {
  const {activeKey, steps} = props;

  const activeIndex = steps.findIndex(d => d.key === activeKey);

  const getNavItemClass = (index: number) => {
    if (index < activeIndex) {
      return 'previous';
    } else if (index === activeIndex) {
      return 'current';
    } else {
      return 'next';
    }
  };

  return <div className="nav-step-list">
    {steps.map((d, i) => <div key={i} className={[
      'nav-step-item',
      getNavItemClass(i),
    ].filter(c => !!c).join(' ')}>
      <div className="nav-step-item-bullet">
        {i + 1}
      </div>
      <div className="nav-step-item-label">
        {d.label}
      </div>
      <div className="nav-step-item-line"/>
    </div>)}
  </div>;
};

export default NavStepList;
