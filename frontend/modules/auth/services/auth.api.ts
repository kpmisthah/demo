// import api from "@/lib/api";

// export const login = async (data: { email: string; password: string }) => {
//   try {
//     const { data: user } = await api.post("/signin", data);
//     return user;
//   } catch (error) {
//     throw error
//   }
// };

// export const fetchUser = async () => {
//   try {
//     const response = await api.get("/me");
//     console.log(response, "response");
//     return response.data;
//   } catch (error) {
//     throw error
//   }
// };

// export const signup = async (data: {
//   name: string;
//   email: string;
//   password: string;
// }) => {
//   try {
//     const response = await api.post("/signup", data);
//     console.log(response,'user already present?')
//     return response.data;
//   } catch (error) {
//     throw error
//   }
// };

// export const verifyOtp = async (otp: string) => {
//   try {
//     const response = await api.post("/verify-otp", { otp });
//     console.log(response, "response from otp");
//     return response.data;
//   } catch (error) {
//     throw error
//   }
// };

// export const resendOtp = async (email: string) => {
//   try {
//     const response = await api.post("/resend-otp", { email });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// export const googleLogin = (): void => {
//   window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/google`;
// };

// export const forgotPassword = async (email: string) => {
//   try {
//     const response = await api.post("/forgot-password", { email });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw Error;
//   }
// };

// export const verifyForgotPassword = async (otp: string) => {
//   try {
//     const response = await api.post("/verify-forgotPassword", { otp });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw Error;
//   }
// };

// export const resetPassword = async (email: string, password: string) => {
//   try {
//     const response = await api.post("/reset-password", { email, password });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw Error;
//   }
// };
// //page refresh access token checking
// export const checkAuth = async() =>{
//   try {
//   const res = await api.get('/me')
//   return res.data
//   } catch (error) {
//     throw error
//   }

// }