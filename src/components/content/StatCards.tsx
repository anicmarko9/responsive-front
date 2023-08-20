import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { RiSuitcaseLine } from 'react-icons/ri';
import { VscSmiley } from 'react-icons/vsc';
import { TbActivityHeartbeat } from 'react-icons/tb';

import MainButton from '@Components/features/MainButton';

const StatCards = (): JSX.Element => {
  return (
    <section>
      <div className="relative flex h-full flex-col bg-primary px-8 text-lg sm:px-16 xl:px-36">
        <div className="mb-6 mt-8 flex flex-wrap justify-between space-x-0 sm:mb-0 xl:mb-8 xl:mt-16">
          <div className="statCard popUpAnimation">
            <div className="statIconAndTitleContainer ">
              <div>
                <RiSuitcaseLine className="statIconSize text-secondary" />
              </div>
              <p className="statNumber">
                10
                <span className="statPlusIcon">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="statDescriptionText">years in business</p>
          </div>
          <div className="statCard popUpAnimation">
            <div className="statIconAndTitleContainer">
              <div>
                <VscSmiley className="statIconSize text-tertiary" />
              </div>
              <p className="statNumber">
                2000
                <span className="statPlusIcon">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="statDescriptionText">positive reviews</p>
          </div>
          <div className="statCard popUpAnimation">
            <div className="statIconAndTitleContainer">
              <div>
                <FiMessageCircle className="statIconSize text-primary" />
              </div>
              <p className="statNumber">
                15.000
                <span className="statPlusIcon">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="statDescriptionText">satisfied clients</p>
          </div>
          <div className="statCard popUpAnimation max-[820px]:pt-2 max-[740px]:pt-4 max-[680px]:pt-3 xl:pt-6">
            <div className="statIconAndTitleContainer">
              <div>
                <TbActivityHeartbeat className="statIconSize text-green-600" />
              </div>
              <p className="statNumber">
                Many
                <span className="statPlusIcon">
                  <FaPlus className="plusIcon" />
                </span>
              </p>
            </div>
            <p className="statDescriptionText">
              nurses and physician assistants on staff
            </p>
          </div>
        </div>
        <MainButton overwrite="bg-tertiary xl:self-center mb-8 xl:mb-8 xl:mt-0 border-tertiary hover:text-tertiary hover:bg-white" />
      </div>
    </section>
  );
};

export default StatCards;
