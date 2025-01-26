import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700">Some overview content goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Loan Apply </h2>
            <p className="text-gray-700">Some statistics content goes here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Loan Request</h2>
            <p className="text-gray-700">Some reports content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
