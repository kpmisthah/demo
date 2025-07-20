// import { fetchUser, resetPassword } from "../services/auth.api";
// import { ErrorMessages } from "../types/auth.type";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useAuthStore } from "@/store/Auth";

// export const useResetPassword = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showNewPassword, setShowNewPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState<ErrorMessages>({});

//   const { setAuthUser } = useAuthStore();
//   const router = useRouter();

//   const handleSubmit = async () => {
//     const newErrors: ErrorMessages = {};
//     if (!newPassword) newErrors.password = "Password is required";
//     if (newPassword != confirmPassword)
//     newErrors.confirmPassword = "password is not matching";
//     if (newPassword.length < 6)
//         newErrors.password = "Password must be at least 6 characters";
//     if (!/[A-Z]/.test(newPassword))
//       newErrors.password =
//         "Password must include at least one uppercase letter";
//     if (!/[a-z]/.test(newPassword))
//       newErrors.password =
//         "Password must include at least one lowercase letter";
//     if (!/\d/.test(newPassword))
//       newErrors.password = "Password must include at least one number";
//     setIsLoading(true);
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//     setIsLoading(true);
//     try {
//       const user = await fetchUser();
//       console.log(user,'user fetch from reset password')
//       if (!user?.email) throw new Error("Email not found");
//       await resetPassword(user.email, newPassword);
//       setAuthUser(user);
//       router.push("/");
//     } catch (error: any) {
//       console.error(error);
//       setErrors({ general: error.message || "Something went wrong" });
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return {
//     setNewPassword,
//     setConfirmPassword,
//     showNewPassword,
//     setShowNewPassword,
//     showConfirmPassword,
//     setShowConfirmPassword,
//     isLoading,
//     errors,
//     handleSubmit,
//     confirmPassword,
//     newPassword,
//   };
// };
