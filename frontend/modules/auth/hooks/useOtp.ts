// // hooks/useOtp.ts
// import { useEffect, useRef, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { fetchUser,resendOtp,verifyOtp } from '../services/auth.api';
// import { useAuthStore } from '@/store/Auth';

// interface ResendOTPRequest {
//   email: string;
// }

// interface APIResponse {
//   success: boolean;
//   message: string;
//   data?: any;
// }

// export function useOtp(userEmail:string) {
//   const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
//   const [timeLeft, setTimeLeft] = useState<number>(60);
//   const [canResend, setCanResend] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>('');
//   const [isResending, setIsResending] = useState<boolean>(false);
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
//   const router = useRouter();
//   const { setAuthUser } = useAuthStore();

//   useEffect(() => {
//     if (timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
//       return () => clearTimeout(timer);
//     } else {
//       setCanResend(true);
//     }
//   }, [timeLeft]);

//   const handleChange = (index: number, value: string) => {
//     if (value.length > 1) return;
//     setError('');
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData('text').slice(0, 6);
//     const newOtp = [...otp];
//     for (let i = 0; i < pastedData.length; i++) {
//       if (i < 6) {
//         newOtp[i] = pastedData[i];
//       }
//     }
//     setOtp(newOtp);
//   };

//   const handleVerify = async () => {
//     const otpCode = otp.join('');
//     if (otpCode.length === 6) {
//       setIsLoading(true);
//       setError('');
//       try {
//         const result = await verifyOtp(otpCode);
//         const user = await fetchUser();
//         setAuthUser(user);
//         router.push('/');
//       } catch (err) {
//         setError('Something went wrong. Please try again.');
//         console.error('OTP verification error:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleResend = async () => {
//     setIsResending(true);
//     setError('');
//     try {
//       let result = await resendOtp(userEmail)
//       console.log(result,'result from backend')
//       if (result.message == 'otp send successfully') {
//         setTimeLeft(60);
//         setCanResend(false);
//         setOtp(['', '', '', '', '', '']);
//         inputRefs.current[0]?.focus();
//       } else {
//         setError(result.message|| 'Failed to resend OTP. Please try again.');
//       }
//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//       console.error('OTP resend error:', err);
//     } finally {
//       setIsResending(false);
//     }
//   };

//   return {
//     otp,
//     timeLeft,
//     canResend,
//     isLoading,
//     isResending,
//     error,
//     inputRefs,
//     setOtp,
//     handleChange,
//     handleKeyDown,
//     handlePaste,
//     handleVerify,
//     handleResend,
//   };
// }
