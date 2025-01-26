"use client";
import React from "react";

function Page() {
  return (
    <div className="text-gray-800 min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 px-4">
      <form className="mt-10 max-w-2xl mx-auto p-8 border border-gray-300 rounded-lg bg-white shadow-md">
        <h2 className="text-gray-800 text-2xl font-semibold mb-6">
          Loan Request
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Loan Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter loan amount"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <label
              htmlFor="purpose"
              className="block text-sm font-medium text-gray-700"
            >
              Purpose
            </label>
            <textarea
              id="purpose"
              name="purpose"
              placeholder="Enter the purpose of the loan"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-2">
              Guarantor 1
            </h3>
            <label
              htmlFor="guarantor1Name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="guarantor1Name"
              name="guarantor1Name"
              placeholder="Enter guarantor's name"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
            <label
              htmlFor="guarantor1Email"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              Email
            </label>
            <input
              type="email"
              id="guarantor1Email"
              name="guarantor1Email"
              placeholder="Enter guarantor's email"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
            <label
              htmlFor="guarantor1Location"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              Location
            </label>
            <input
              type="text"
              id="guarantor1Location"
              name="guarantor1Location"
              placeholder="Enter guarantor's location"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
            <label
              htmlFor="guarantor1Cnic"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              CNIC
            </label>
            <input
              type="text"
              id="guarantor1Cnic"
              name="guarantor1Cnic"
              placeholder="Enter guarantor's CNIC"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <h3 className="text-gray-800 text-lg font-semibold mb-2">
              Guarantor 2
            </h3>
            <label
              htmlFor="guarantor2Name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="guarantor2Name"
              name="guarantor2Name"
              placeholder="Enter guarantor's name"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
            <label
              htmlFor="guarantor2Email"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              Email
            </label>
            <input
              type="email"
              id="guarantor2Email"
              name="guarantor2Email"
              placeholder="Enter guarantor's email"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
            <label
              htmlFor="guarantor2Location"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              Location
            </label>
            <input
              type="text"
              id="guarantor2Location"
              name="guarantor2Location"
              placeholder="Enter guarantor's location"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
            <label
              htmlFor="guarantor2Cnic"
              className="block text-sm font-medium text-gray-700 mt-2"
            >
              CNIC
            </label>
            <input
              type="text"
              id="guarantor2Cnic"
              name="guarantor2Cnic"
              placeholder="Enter guarantor's CNIC"
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <label
              htmlFor="statement"
              className="block text-sm font-medium text-gray-700"
            >
              Statement (optional)
            </label>
            <input
              type="file"
              id="statement"
              name="statement"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
          </div>
          <div>
            <label
              htmlFor="salarySheet"
              className="block text-sm font-medium text-gray-700"
            >
              Salary Sheet (optional)
            </label>
            <input
              type="file"
              id="salarySheet"
              name="salarySheet"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-white text-black"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 mt-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default Page;
