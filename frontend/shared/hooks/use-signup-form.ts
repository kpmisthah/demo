import { useState } from "react";
import { ErrorMessages, SignupForm,UseSignupProps } from "../types/auth.type";
import { signup } from "../services/auth.api";
import { useRouter } from "next/navigation";


export const useSignup = ({role='USER'}:UseSignupProps) => {
    const [signupData, setSignupData] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile:'',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState<ErrorMessages>({});
  const [isLoading, setIsLoading] = useState(false);
   const router = useRouter()

  const handleSignupSubmit = async () => {
    const newErrors: ErrorMessages = {};

    if (!signupData.name) newErrors.name = "name is required";
    if (!signupData.email) {
        newErrors.email = "Email is required";
    }else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
        newErrors.email = "Please enter a valid email address"
    }
    if (!signupData.password) newErrors.password = "Password is required";
    if (signupData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!signupData.agreeToTerms)
      newErrors.terms = "You must agree to the terms";
    if(role == 'AGENCY'){
      if(!signupData.mobile){
        newErrors.mobile = "Phone number is required"
      }
    }
    if (!/[A-Z]/.test(signupData.password))
      newErrors.password =
        "Password must include at least one uppercase letter";
    if (!/[a-z]/.test(signupData.password))
      newErrors.password =
        "Password must include at least one lowercase letter";
    if (!/\d/.test(signupData.password))
      newErrors.password = "Password must include at least one number";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsLoading(true);
    setErrors({});

    try {
      console.log("Signup submitted:", signupData);
      await signup({...signupData,role});
     
      router.push(`/otp?email=${encodeURIComponent(signupData.email)}&role=${role}`);

    } catch (error:any) {
   
      setErrors({general:error?.response?.data?.message});
    } finally {
      setIsLoading(false);
    }
  };
  return {
    signupData,
    setSignupData,
    errors,
    setErrors,
    isLoading,
    handleSignupSubmit
  }
};
