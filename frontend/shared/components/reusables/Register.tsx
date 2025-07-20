"use client";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Alert, AlertDescription } from "@/shared/components/ui/alert";
import { AuthLayout } from "./AuthLayout";
import { useRouter } from "next/navigation";
import { useSignup } from "../../hooks/use-signup-form";
import { UseSignupProps } from "@/shared/types/auth.type";
import { useAuthStore } from "@/store/Auth";

export const Signup = ({ role = "USER" }: UseSignupProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {setAuthUser} = useAuthStore()
  const router = useRouter();

  const {
    signupData,
    setSignupData,
    errors,
    setErrors,
    isLoading,
    handleSignupSubmit,
  } = useSignup({ role });
   const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  if (isAuthenticated) return null;

  return (
    <AuthLayout>
      <Card className="border-0 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-semibold">
            Create account
          </CardTitle>
          {role == "USER" ? (
            <CardDescription>
              Enter your details to get started with your travel journey
            </CardDescription>
          ) : (
            ""
          )}
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {errors.general && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-600">
                  {errors.general}
                </AlertDescription>
              </Alert>
            )}

            {/* <div className="grid grid-cols-2 gap-4"> */}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="John"
                value={signupData.name}
                onChange={(e) =>
                  setSignupData({ ...signupData, name: e.target.value })
                }
                className={errors.name ? "border-red-500" : ""}
                disabled={isLoading}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            {/* </div> */}

            <div className="space-y-2">
              <Label htmlFor="signup-email">Email</Label>
              <Input
                id="signup-email"
                type="email"
                placeholder="john@example.com"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                className={errors.email ? "border-red-500" : ""}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {role == "AGENCY" ? (
              <div className="space-y-2">
                <Label htmlFor="signup-email">Phone</Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  placeholder="123454670"
                  value={signupData.mobile}
                  onChange={(e) =>
                    setSignupData({ ...signupData, mobile: e.target.value })
                  }
                  className={errors.mobile ? "border-red-500" : ""}
                  disabled={isLoading}
                />
                {errors.mobile && (
                  <p className="text-sm text-red-500">{errors.mobile}</p>
                )}
              </div>
            ) : (
              ""
            )}

            <div className="space-y-2">
              <Label htmlFor="signup-password">Password</Label>
              <div className="relative">
                <Input
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                  className={errors.password ? "border-red-500 pr-10" : "pr-10"}
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className={
                    errors.confirmPassword ? "border-red-500 pr-10" : "pr-10"
                  }
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  disabled={isLoading}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-500">{errors.confirmPassword}</p>
              )}
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
                      signupData.password.length >= 6
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  At least 6 characters
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      /[A-Z]/.test(signupData.password)
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  One uppercase letter
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      /[a-z]/.test(signupData.password)
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  One lowercase letter
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      /\d/.test(signupData.password)
                        ? "bg-green-500"
                        : "bg-gray-300"
                    }`}
                  ></div>
                  One number
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={signupData.agreeToTerms}
                onCheckedChange={(checked: boolean) =>
                  setSignupData({
                    ...signupData,
                    agreeToTerms: checked === true,
                  })
                }
                disabled={isLoading}
              />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Terms of Service
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Privacy Policy
                </button>
              </Label>
            </div>
            {errors.terms && (
              <p className="text-sm text-red-500">{errors.terms}</p>
            )}

            <Button
              onClick={handleSignupSubmit}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              className="text-blue-600 hover:text-blue-800 font-medium"
              onClick={() => router.push("/login")}
            >
              Sign in here
            </button>
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
};
