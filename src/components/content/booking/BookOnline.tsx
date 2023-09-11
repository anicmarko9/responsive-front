import React from 'react';

const BookOnline = () => {
  return (
    <div className="flex items-center justify-center border border-gray-200 bg-gray-900 p-12">
      <div className="mx-auto w-full  bg-gray-700 ">
        <form>
          <div className="mb-5">
            <label className="labelStyle">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="inputStyle"
            />
          </div>
          <div className="mb-5">
            <label className="labelStyle">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="inputStyle"
            />
          </div>
          <div className="mb-5">
            <label className="labelStyle">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="inputStyle"
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="labelStyle">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="inputStyle"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="labelStyle">Time</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="inputStyle"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-white sm:text-xl">
              Address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Enter area"
                    className="inputStyle"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    className="inputStyle"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter state"
                    className="inputStyle"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
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
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] px-8 py-3 text-center text-base font-semibold text-white outline-none">
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookOnline;
