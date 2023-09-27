import React, { useState } from 'react';

import { ILocation } from '@Types/interfaces';
import Modal from '@/components/content/locations/Modal';

const Location = ({
  name,
  imgSrc,
  schedule,
  address,
}: ILocation): JSX.Element => {
  const notFound = '/images/NotFound.svg';

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article className="group flex flex-col items-center rounded-lg border border-gray-200 bg-gray-900 px-3 py-2 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row xl:h-1/4">
      {modalOpen && (
        <Modal isOpen={modalOpen} handleClose={() => setModalOpen(!modalOpen)}>
          <div className="flex flex-col justify-between ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              className="m-5 h-60 w-auto"
            />
            <iframe
              src={`https://www.google.com/maps/search/?api=1&query=${address}`}
              className="h-60 w-auto"
            />
          </div>
        </Modal>
      )}
      <img
        className="h-96 w-full rounded-l-md object-cover md:h-auto md:w-48 md:rounded-l-md"
        src={imgSrc || notFound}
        alt={name}
      ></img>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white group-hover:text-gray-800 ">
          Opening hours: {schedule}
        </h5>

        <p className="mb-3 font-normal text-white group-hover:text-gray-800">
          {address}
        </p>

        <div className="flex gap-x-4">
          <button
            className="mb-1 mr-1 w-14 rounded-full bg-green-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-opacity-50 hover:shadow-md focus:outline-none active:bg-green-600"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              setModalOpen(!modalOpen);
            }}
            className="mb-1 mr-1 w-14 rounded-full bg-amber-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-opacity-50 hover:shadow-md focus:outline-none active:bg-amber-600"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Location;
