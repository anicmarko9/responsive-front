import React from 'react';

import MainButton from '@Components/features/MainButton';

const BookOnline = (): JSX.Element => {
  return (
    <form className="baseContainerX baseContainerY flex flex-col">
      <label className="labelStyle">Full Name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Full Name"
        className="inputStyle"
      />
      <label className="labelStyle">Phone Number</label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Enter your phone number"
        className="inputStyle"
      />
      <label className="labelStyle">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="inputStyle"
      />
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <label className="labelStyle">Date</label>
          <input type="date" name="date" id="date" className="inputStyle" />
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <label className="labelStyle">Time</label>
          <input type="time" name="time" id="time" className="inputStyle" />
        </div>
      </div>
      <div className="my-3 py-3">
        <label className="my-3 block text-base font-semibold sm:text-xl">
          Address Details
        </label>
        <div className="-mx-3 flex flex-wrap">
          <div className="my-3 w-full px-3 sm:w-1/2">
            <input
              type="text"
              name="area"
              id="area"
              placeholder="Enter area"
              className="inputStyle"
            />
          </div>
          <div className="my-3 w-full px-3 sm:w-1/2">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter city"
              className="inputStyle"
            />
          </div>
          <div className="my-3 w-full px-3 sm:w-1/2">
            <input
              type="text"
              name="state"
              id="state"
              placeholder="Enter state"
              className="inputStyle"
            />
          </div>
          <div className="my-3 w-full px-3 sm:w-1/2">
            <input
              type="text"
              name="post-code"
              id="post-code"
              placeholder="Post Code"
              className="inputStyle"
            />
          </div>
        </div>
      </div>
      <MainButton overwrite="self-center" />
    </form>
  );
};

export default BookOnline;
