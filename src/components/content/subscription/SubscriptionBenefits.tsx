import React from 'react';

const SubscriptionsBenefits = ({
  benefits,
}: {
  benefits: string;
}): JSX.Element => {
  return (
    <div className="flex items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 text-green-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      <p className="text-gray-300">{benefits}</p>
    </div>
  );
};

export default SubscriptionsBenefits;
