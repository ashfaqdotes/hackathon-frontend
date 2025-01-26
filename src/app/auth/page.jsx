"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";

export default function Auth() {
  const [isSignedUp, setIsSignedUp] = useState(true);
  const { auth, user, error: authError } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/admin");
    } else if (authError) {
      console.error(authError);
    }
  }, [user, authError, router]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center px-4">
      {isSignedUp ? (
        <Login setIsSignedUp={setIsSignedUp} />
      ) : (
        <Signup setIsSignedUp={setIsSignedUp} />
      )}
    </div>
  );

  // LOGIN COMPONENT

  function Login({ setIsSignedUp }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(""); // Clear any previous errors

      try {
        await auth("https://hackathon-backend-eosin.vercel.app/auth/login", {
          email,
          password,
        });
      } catch (err) {
        setError(err.message || "An error occurred during login");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="card w-full max-w-md shadow-2xl bg-base-100 text-white">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold mb-6 text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-error mb-6">
                <span>{error}</span>
              </div>
            )}
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-ghost btn-sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-primary ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          <p className="text-center mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => setIsSignedUp(false)}
              className="link link-primary"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    );
  }

  // SIGNUP COMPONENT

  function Signup({ setIsSignedUp }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cnic, setCnic] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(""); // Clear any previous errors

      try {
        const response = await fetch(
          "https://hackathon-backend-eosin.vercel.app/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              cnic,
              password,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to sign up");
        }

        alert("User registered successfully!");
        setIsSignedUp(true);
      } catch (err) {
        setError(err.message || "An error occurred during signup");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="card w-full max-w-md shadow-2xl bg-base-100 text-white">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold mb-6 text-center">
            Signup
          </h2>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-error mb-6">
                <span>{error}</span>
              </div>
            )}
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Full Name"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label" htmlFor="email">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                className="input input-bordered w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label" htmlFor="cnic">
                <span className="label-text">CNIC:</span>
              </label>
              <input
                type="text"
                id="cnic"
                placeholder="Enter your CNIC"
                className="input input-bordered w-full"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label" htmlFor="password">
                <span className="label-text">Password:</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-ghost btn-sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-primary ${loading ? "loading" : ""}`}
                disabled={loading}
              >
                {loading ? "Creating an account..." : "Create an account"}
              </button>
            </div>
          </form>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <button
              onClick={() => setIsSignedUp(true)}
              className="link link-primary"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    );
  }
}
