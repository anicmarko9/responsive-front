import React from 'react';

interface StatCardProps {
  bgColor: string;
  icon: JSX.Element;
  children: JSX.Element;
  description: string;
}

const StatCard = ({
  bgColor,
  icon,
  children,
  description,
}: StatCardProps): JSX.Element => {
  return (
    <div className={`statCard popUpAnimation ${bgColor}`}>
      <div className="statIconAndTitleContainer">
        <div>{icon}</div>
        <p className="statNumber">{children}</p>
      </div>
      <p className="statDescriptionText">{description}</p>
    </div>
  );
};

export default StatCard;
