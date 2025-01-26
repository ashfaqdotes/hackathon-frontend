"use client";
import React, { useState } from "react";

const LoanCalc = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [loanBreakdown, setLoanBreakdown] = useState(null);

  const conversionRate = 280; // Example conversion rate from USD to PKR

  const categories = [
    {
      name: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      period: 3,
    },
    {
      name: "Home Construction Loans",
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000,
      period: 5,
    },
    {
      name: "Business Startup Loans",
      subcategories: [
        "Buy Stall",
        "Advance Rent for Shop",
        "Shop Assets",
        "Shop Machinery",
      ],
      maxLoan: 1000000,
      period: 5,
    },
    {
      name: "Education Loans",
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: "Based on requirement",
      period: 4,
    },
  ];

  const calculateLoanBreakdown = () => {
    const principal = parseFloat(initialDeposit);
    const totalAmount = principal;

    const principalPKR = principal * conversionRate;
    const totalAmountPKR = totalAmount * conversionRate;

    setLoanBreakdown({
      principal,
      totalAmount,
      principalPKR,
      totalAmountPKR,
    });
  };

  const selectedCategory = categories.find((cat) => cat.name === category);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 ">
      <div className="border border-black rounded-lg p-5 shadow-lg max-w-md w-full bg-white">
        <h2 className="text-center text-2xl text-gray-800 font-bold">
          Loan Calculator
        </h2>
        <div className="mb-4">
          <label className="text-gray-800">
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 mt-1 text-black bg-white border border-gray-300 rounded"
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="text-gray-800">
            Subcategory:
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              disabled={!category}
              className="w-full p-2 mt-1 text-black bg-white border border-gray-300 rounded"
            >
              <option value="">Select Subcategory</option>
              {selectedCategory &&
                selectedCategory.subcategories.map((subCat) => (
                  <option key={subCat} value={subCat}>
                    {subCat}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="text-gray-800">
            Initial Deposit:
            <input
              type="number"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(e.target.value)}
              className="w-full p-2 mt-1 text-black bg-white border border-gray-300 rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="text-gray-800">
            Loan Period (years):
            <input
              type="number"
              value={loanPeriod}
              onChange={(e) => setLoanPeriod(e.target.value)}
              className="w-full p-2 mt-1 text-black bg-white border border-gray-300 rounded"
            />
          </label>
        </div>
        <button
          onClick={calculateLoanBreakdown}
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Calculate
        </button>
        {loanBreakdown && (
          <div className="mt-5">
            <h3 className="text-center text-xl text-gray-800">
              Loan Breakdown
            </h3>
            <p className="text-gray-800">
              Principal (USD): ${loanBreakdown.principal.toFixed(2)}
            </p>
            <p className="text-gray-800">
              Total Amount (USD): ${loanBreakdown.totalAmount.toFixed(2)}
            </p>
            <p className="text-gray-800 mt-5">
              Principal (PKR): Rs. {loanBreakdown.principalPKR.toFixed(2)}
            </p>
            <p className="text-gray-800">
              Total Amount (PKR): Rs. {loanBreakdown.totalAmountPKR.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalc;
