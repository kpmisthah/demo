// "use client"
// import { useOtp } from '../hooks/useOtp';
// import { AlertCircle, ArrowLeft, Plane, RotateCcw } from 'lucide-react';
// import { useSearchParams } from 'next/navigation';


// interface OTPPageProps {
//   userEmail?: string;
// }

// const OTPPage: React.FC<OTPPageProps> = () => {
//   const searchParams = useSearchParams();
//   const userEmail = searchParams.get('email')
//   if(!userEmail){
//     throw new Error('email is not found')
//   }
//   const {
//   otp,
//   timeLeft,
//   canResend,
//   isLoading,
//   isResending,
//   error,
//   inputRefs,
//   setOtp,
//   handleChange,
//   handleKeyDown,
//   handlePaste,
//   handleVerify,
//   handleResend
// } = useOtp(userEmail);


//   const handleBack = (): void => {
//     // Navigate back to login page
//     console.log('Going back to login...');
//     // You can use Next.js router here:
//     // router.back();
//   };

//   const isComplete = otp.every((digit: string) => digit !== '');

//   // Mask email for display
//   const maskedEmail = userEmail.replace(/(.{2})(.*)(@.*)/, '$1***$3');

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       {/* Background decorations */}
//       <div className="absolute top-8 left-8 text-blue-200 opacity-30">
//         <Plane size={32} className="transform rotate-45" />
//       </div>
//       <div className="absolute top-20 right-12 text-green-200 opacity-30">
//         <div className="w-6 h-6 rounded-full bg-current"></div>
//       </div>
//       <div className="absolute bottom-20 left-16 text-purple-200 opacity-30">
//         <div className="w-4 h-4 rounded-full bg-current"></div>
//       </div>
//       <div className="absolute bottom-32 right-8 text-orange-200 opacity-30">
//         <div className="w-8 h-8 rounded-full bg-current"></div>
//       </div>

//       {/* Navigation */}
//       <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
//         <button
//           onClick={handleBack}
//           className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
//         >
//           <ArrowLeft size={16} />
//           <span className="text-sm font-medium text-gray-700">Back</span>
//         </button>
//       </div>

//       {/* Main content */}
//       <div className="w-full max-w-md">
//         <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
//               <Plane size={28} className="text-white transform rotate-45" />
//             </div>
//             <h1 className="text-2xl font-bold text-gray-800 mb-2">
//               TravelCompanion
//             </h1>
//             <p className="text-gray-600 text-sm">
//               Your journey begins here
//             </p>
//           </div>

//           {/* OTP Form */}
//           <div className="space-y-6">
//             <div className="text-center">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                 Verify your email
//               </h2>
//               <p className="text-gray-600 text-sm mb-1">
//                 Enter the 6-digit code sent to
//               </p>
//               <p className="text-blue-600 text-sm font-medium">
//                 {maskedEmail}
//               </p>
//             </div>

//             {/* Error Message */}
//             {error && (
//               <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
//                 <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
//                 <p className="text-red-700 text-sm">{error}</p>
//               </div>
//             )}

//             {/* OTP Input */}
//             <div className="flex justify-center gap-3">
//               {otp.map((digit,index) => (
//                 <input
//                   key={index}
//                   ref={el =>{
//                     inputRefs.current[index] = el
//                   }}
//                   type="text"
//                   inputMode="numeric"
//                   maxLength={1}
//                   value={digit}
//                   onChange={(e) => handleChange(index, e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(index, e)}
//                   onPaste={handlePaste}
//                   disabled={isLoading}
//                   className={`w-12 h-12 text-center text-lg font-semibold border-2 rounded-xl focus:outline-none transition-colors ${
//                     error 
//                       ? 'border-red-300 focus:border-red-500' 
//                       : 'border-gray-200 focus:border-blue-500'
//                   } ${isLoading ? 'bg-gray-50 cursor-not-allowed' : ''}`}
//                 />
//               ))}
//             </div>

//             {/* Timer and Resend */}
//             <div className="text-center">
//               {!canResend ? (
//                 <p className="text-gray-500 text-sm">
//                   Resend code in {timeLeft}s
//                 </p>
//               ) : (
//                 <button
//                   onClick={handleResend}
//                   disabled={isResending}
//                   className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium mx-auto transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <RotateCcw size={16} className={isResending ? 'animate-spin' : ''} />
//                   {isResending ? 'Sending...' : 'Resend Code'}
//                 </button>
//               )}
//             </div>

//             {/* Verify Button */}
//             <button
//               onClick={handleVerify}
//               disabled={!isComplete || isLoading}
//               className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
//                 isComplete && !isLoading
//                   ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl'
//                   : 'bg-gray-300 cursor-not-allowed'
//               }`}
//             >
//               {isLoading ? (
//                 <>
//                   <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                   Verifying...
//                 </>
//               ) : (
//                 'Verify Code'
//               )}
//             </button>

//             {/* Help text */}
//             <div className="text-center">
//               <p className="text-gray-500 text-xs">
//                 Didn't receive the code? Check your spam folder or try resending
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OTPPage;