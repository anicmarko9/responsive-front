import React from 'react';
import { ISubscription } from '@Types/interfaces';

const Subscriptions = ({ price, plan, highlighted }: ISubscription): JSX.Element => {
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
        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-300">Unlimited updates</span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-300">Git repository</span>
        </li>

        <li className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>

          <span className="text-gray-300">Npm installation</span>
        </li>
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
