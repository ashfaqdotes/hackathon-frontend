"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ CNIC: "", email: "", name: "" });
  const router = useRouter();

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

  const handleProceed = () => {
    setShowPopup(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("User signed up:", result);
        setShowPopup(false);
        router.push("/signup");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="p-4 grid gap-4">
      <h1 className="text-2xl font-bold text-white mb-4">Loan Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="card bg-white shadow-md p-4 rounded-lg flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl text-gray-800 font-semibold mb-2">
                {cat.name}
              </h2>
              <p className="text-gray-800">
                <strong className="text-gray-800">Subcategories:</strong>{" "}
                {cat.subcategories.join(", ")}
              </p>
              <p className="text-gray-800">
                <strong className="text-gray-800">Maximum Loan:</strong>{" "}
                {cat.maxLoan}
              </p>
              <p className="text-gray-800">
                <strong className="text-gray-800">Loan Period:</strong>{" "}
                {cat.period} years
              </p>
            </div>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded self-end"
              onClick={handleProceed}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 w-6 h-6 flex items-center justify-center"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h3 className="text-lg text-gray-800 font-semibold mb-4">
              Fill Your Details
            </h3>
            <input
              type="number"
              name="CNIC"
              className="input input-bordered w-full mb-4 text-black bg-white"
              placeholder="CNIC"
              value={formData.CNIC}
              onChange={handleFormChange}
              maxLength="13"
              pattern="\d{13}"
              title="CNIC must be 13 digits"
            />
            <input
              type="email"
              name="email"
              className="input input-bordered w-full mb-4 text-black bg-white"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormChange}
            />
            <input
              type="text"
              name="name"
              className="input input-bordered w-full mb-4 text-black bg-white"
              placeholder="Name"
              value={formData.name}
              onChange={handleFormChange}
            />
            <button
              className="btn btn-primary w-full"
              onClick={handleSubmitForm}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
