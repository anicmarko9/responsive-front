import React from 'react';
import { ISubscription } from '@Types/interfaces';
import SubscriptionsBenefits from './SubscriptionBenefits';

const Subscriptions = ({
  price,
  plan,
  highlighted,
}: ISubscription): JSX.Element => {
  const benefits = [
    { id: 1, benefit: 'Unlimited updates' },
    { id: 2, benefit: 'Git repository' },
    { id: 3, benefit: 'Npm installation' },
  ];

  return (
    <div
      className={`my-5 rounded-2xl bg-neutral-900 p-6 shadow-md transition-all duration-300 hover:ring-4 hover:ring-primary sm:order-last sm:p-10 md:my-12 ${
        highlighted && 'ring-4 ring-primary md:scale-105'
      }`}
    >
      <div className="text-center">
        <h2 className="text-xl font-medium text-white md:text-2xl">
          {plan}
          <span className="sr-only">Plan</span>
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-4xl font-bold text-white sm:text-5xl">
            {price}
          </strong>

          <span className="text-base font-medium text-neutral-500 dark:text-neutral-300">
            /month
          </span>
        </p>
      </div>

      <ul className="mt-6 space-y-3">
        {benefits.map(({ id, benefit }) => (
          <li key={id}>
            <SubscriptionsBenefits benefits={benefit} />
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="mt-5 block w-full rounded-xl bg-primary px-12 py-3 text-center text-base font-bold text-white duration-300 ease-in-out hover:bg-gray-200 hover:text-primary focus:outline-none"
      >
        Get Started
      </button>
    </div>
  );
};

export default Subscriptions;
