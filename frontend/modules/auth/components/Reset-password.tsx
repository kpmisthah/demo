"use client";
import React from "react";
import { Eye, EyeOff, ArrowLeft, Plane } from "lucide-react";
import { useResetPassword } from "../hooks/useResetPassword";
const ResetPasswordPage = () => {

  const {
    setNewPassword,
    setConfirmPassword,
    showNewPassword,
    setShowNewPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isLoading,
    errors,
    handleSubmit,
    confirmPassword,
    newPassword
  } = useResetPassword()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-indigo-300 rounded-full opacity-10"></div>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
            <Plane className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">WayFare</h1>
          <p className="text-gray-500 text-sm">Your journey continues here</p>
        </div>

        {/* Reset Password Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Reset Your Password
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Create a new password to secure your account
            </p>
          </div>

          <div className="space-y-4">
            {/* New Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="newPassword"
                className="text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="relative">
                <input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter your new password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-12"
                  required
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your new password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-12"
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Password Requirements:
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                <li className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      newPassword.length >= 6 ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                  At least 6 characters
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      /[A-Z]/.test(newPassword) ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                  One uppercase letter
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      /[a-z]/.test(newPassword) ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                  One lowercase letter
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      /\d/.test(newPassword) ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                  One number
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={
                isLoading ||
                !newPassword ||
                !confirmPassword ||
                newPassword !== confirmPassword
              }
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-xl font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Resetting Password...
                </div>
              ) : (
                "Reset Password"
              )}
            </button>
          </div>

          {/* Password Mismatch Warning */}
          {newPassword &&
            confirmPassword &&
            newPassword !== confirmPassword && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                <p className="text-red-600 text-sm">Passwords do not match</p>
              </div>
            )}

          {/* Back to Login */}
          <div className="text-center pt-4">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .rounded-3xl {
            border-radius: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ResetPasswordPage;
