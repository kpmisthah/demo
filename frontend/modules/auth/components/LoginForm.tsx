// "use client";
// import React from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { Button } from "@/shared/components/ui/button";
// import { Input } from "@/shared/components/ui/input";
// import { Label } from "@/shared/components/ui/label";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/shared/components/ui/card";

// import { Alert, AlertDescription } from "@/shared/components/ui/alert";
// import { AuthLayout } from "./AuthLayout";
// import { useRouter } from "next/navigation";
// import { useLoginForm } from "../hooks/useLoginForm";
// import { ForgotPasswordDialog } from "./ForgotPasswordDialog";
// import { useEffect } from "react";
// export const Login = () => {
//   const router = useRouter()

//    const {
//     loginData,
//     setLoginData,
//     errors,
//     isLoading,
//     showPassword,
//     setShowPassword,
//     handleLoginSubmit,
//     handleSocialSignup,

//   } = useLoginForm();
  
//   return (
//     <AuthLayout>
//       <Card className="border-0 shadow-lg">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl font-semibold">Welcome Back</CardTitle>
//           <CardDescription>
//             Sign in to your account to continue your travel journey
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {errors.general && (
//               <Alert className="border-red-200 bg-red-50">
//                 <AlertDescription className="text-red-600">
//                   {errors.general}
//                 </AlertDescription>
//               </Alert>
//             )}

//             <div className="space-y-2">
//               <Label htmlFor="login-email">Email</Label>
//               <Input
//                 id="login-email"
//                 type="email"
//                 placeholder="john@example.com"
//                 value={loginData.email}
//                 onChange={(e) =>
//                   setLoginData({ ...loginData, email: e.target.value })
//                 }
//                 className={errors.email ? "border-red-500" : ""}
//                 disabled={isLoading}
//               />
//               {errors.email && (
//                 <p className="text-sm text-red-500">{errors.email}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="login-password">Password</Label>
//                 <ForgotPasswordDialog>
//                   <button type="button"
//                     className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
//                   >
//                     Forgot password?
//                   </button>
//                 </ForgotPasswordDialog>
//               </div>
//               <div className="relative">
//                 <Input
//                   id="login-password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   value={loginData.password}
//                   onChange={(e) =>
//                     setLoginData({ ...loginData, password: e.target.value })
//                   }
//                   className={errors.password ? "border-red-500 pr-10" : "pr-10"}
//                   disabled={isLoading}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//                   disabled={isLoading}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-4 h-4" />
//                   ) : (
//                     <Eye className="w-4 h-4" />
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-sm text-red-500">{errors.password}</p>
//               )}
//             </div>

//             {/* Password Requirements */}
//             <div className="bg-gray-50 rounded-xl p-4">
//               <h4 className="text-sm font-medium text-gray-700 mb-2">
//                 Password Requirements:
//               </h4>
//               <ul className="text-xs text-gray-600 space-y-1">
//                 <li className="flex items-center gap-2">
//                   <div
//                     className={`w-2 h-2 rounded-full ${
//                       loginData.password.length >= 6 ? "bg-green-500" : "bg-gray-300"
//                     }`}
//                   ></div>
//                   At least 6 characters
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <div
//                     className={`w-2 h-2 rounded-full ${
//                       /[A-Z]/.test(loginData.password) ? "bg-green-500" : "bg-gray-300"
//                     }`}
//                   ></div>
//                   One uppercase letter
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <div
//                     className={`w-2 h-2 rounded-full ${
//                       /[a-z]/.test(loginData.password) ? "bg-green-500" : "bg-gray-300"
//                     }`}
//                   ></div>
//                   One lowercase letter
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <div
//                     className={`w-2 h-2 rounded-full ${
//                       /\d/.test(loginData.password) ? "bg-green-500" : "bg-gray-300"
//                     }`}
//                   ></div>
//                   One number
//                 </li>
//               </ul>
//             </div>
//             <Button
//               onClick={handleLoginSubmit}
//               className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-200"
//               disabled={isLoading}
//             >
//               {isLoading ? "Signing In..." : "Sign In"}
//             </Button>
//           </div>
//         </CardContent>
//         <CardFooter className="flex flex-col space-y-4">
//           <div className="relative w-full">
//             <div className="absolute inset-0 flex items-center">
//               <span className="w-full border-t" />
//             </div>
//             <div className="relative flex justify-center text-xs uppercase">
//               <span className="bg-white px-2 text-muted-foreground">
//                 Or continue with
//               </span>
//             </div>
//           </div>
//           <div className="grid grid-cols-1 gap-4 w-full">
//             <Button
//               variant="outline"
//               className="w-full hover:bg-gray-50 transition-colors"
//               onClick={() => handleSocialSignup()}
//               disabled={isLoading}
//             >
//               <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
//                 <path
//                   fill="currentColor"
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                 />
//                 <path
//                   fill="currentColor"
//                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                 />
//               </svg>
//               Continue with Google
//             </Button>
//           </div>
//           <p className="text-center text-sm text-gray-600">
//             Don't have an account?{" "}
//             <button
//               className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
//               onClick={() => router.push("/signup")}
//             >
//               Sign up here
//             </button>
//           </p>
//         </CardFooter>
//       </Card>
//     </AuthLayout>
//   );
// };
