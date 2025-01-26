"use client";

import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Admin() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/auth");
    }
  }, [user]);

  if (!user) return <span className="loading loading-ring loading-xs"></span>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the Admin Page
        </h1>
        <p className="text-gray-600 mb-6">
          This is a protected area. Only authorized users can access this page.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-teal-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-teal-800">
              User Management
            </h2>
            <p className="text-teal-700">
              Manage user accounts and permissions.
            </p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-blue-800">Analytics</h2>
            <p className="text-blue-700">View site analytics and reports.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-green-800">Settings</h2>
            <p className="text-green-700">
              Configure site settings and preferences.
            </p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-purple-800">Support</h2>
            <p className="text-purple-700">
              Access support and help resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
