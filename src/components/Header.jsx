"use client";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-gray-200 shadow-md flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
      <div className="flex justify-between items-center w-full md:w-auto">
        <button className="text-xl text-white font-bold">
          Saylani Microfinance App
        </button>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          {isOpen ? "X" : "☰"}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transform fixed md:static top-0 left-0 w-3/4 md:w-auto h-full md:h-auto bg-white md:bg-transparent transition-transform duration-300 ease-in-out md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 p-4 md:p-0 z-50`}
      >
        <Link href="/">
          <button className="text-gray-800 bg-gray-300 px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-green-400 transition duration-300">
            Home
          </button>
        </Link>
        <Link href="/loancalc">
          <button className="text-gray-800 bg-gray-300 px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-green-400 transition duration-300">
            Loan Calculator
          </button>
        </Link>
        <Link href="/loanreq">
          <button className="text-gray-800 bg-gray-300 px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-green-400 transition duration-300">
            Loan Request Form
          </button>
        </Link>
        {user && (
          <>
            <Link href="/admin">
              <button className="text-gray-800 bg-gray-300 px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-green-400 transition duration-300">
                Admin Portal
              </button>
            </Link>
            <Link href="/dashboard">
              <button className="text-gray-800 bg-gray-300 px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-green-400 transition duration-300">
                Dashboard
              </button>
            </Link>
          </>
        )}
      </div>
      <div className="mt-2 md:mt-0">
        {user ? (
          <button
            onClick={handleLogout}
            className="text-gray-800 bg-gray-300 px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-red-400 hover:text-white transition duration-300"
          >
            Logout
          </button>
        ) : (
          <Link
            href={"/auth"}
            className="text-gray-800 bg-gray-300 px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-green-400 transition duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
