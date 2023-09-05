import React from 'react';

interface StatCardProps {
  bgColor: 'primary' | 'secondary' | 'tertiary' | 'green-500';
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

  const StatContainer = `statCard popUpAnimation hover:bg-${bgColor}`;

  return (
    <div className={StatContainer}>
      <div className="statIconAndTitleContainer ">
        <div>{icon}</div>
        <p className="statNumber">{children}</p>
      </div>
      <p className="statDescriptionText">{description}</p>
    </div>
  );
};

export default StatCard;
