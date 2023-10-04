import React from 'react';
import { ISubscription } from '@Types/interfaces';
import SubscriptionsBenefits from './SubscriptionBenefits';

const Subscriptions = ({ price, plan, highlighted }: ISubscription): JSX.Element => {
  const benefits = [
    { id: 1, benefit: 'Unlimited updates' },
    { id: 2, benefit: 'Git repository' },
    { id: 3, benefit: 'Npm installation' },
  ]

  return (
    <div
      className={`p-6 my-5 transition-all duration-300 shadow-md md:my-12 rounded-2xl hover:ring-4 hover:ring-primary sm:order-last sm:p-10 bg-neutral-900 ${highlighted && 'md:scale-105 ring-4 ring-primary'}`}
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

          <span className="text-base font-medium text-neutral-500 dark:text-neutral-300">/month</span>
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
        type='button'
        className="block w-full px-12 py-3 mt-5 text-base font-bold text-center text-white duration-300 ease-in-out rounded-xl bg-primary focus:outline-none hover:bg-gray-200 hover:text-primary"
      >
        Get Started
      </button>
    </div>
  );
};

export default Subscriptions;
