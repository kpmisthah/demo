import { useState } from "react";
import { forgotPassword } from "../services/auth.api";
import { useRouter } from "next/navigation";

export const useForgotPassword = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false);
  const [forgotPasswordError, setForgotPasswordError] = useState("");
  const router = useRouter();

  const handleForgotPassword = async () => {
    if (!forgotEmail) {
      setForgotPasswordError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(forgotEmail)) {
      setForgotPasswordError("Please enter a valid email address");
      return;
    }

    setForgotPasswordLoading(true);
    setForgotPasswordError("");

    try {
      await forgotPassword(forgotEmail);
      router.push("/forgot-password-otp");
      setForgotPasswordSuccess(true);
    } catch (error: any) {
      const message =
        error?.response?.data.message ||
        error?.response?.message ||
        error?.message ||
        "Failed to send reset email. Please try again";

      setForgotPasswordError(message);
    } finally {
      setForgotPasswordLoading(false);
    }
  };

  const resetForgotPasswordModal = () => {
    setForgotEmail("");
    setForgotPasswordError("");
    setForgotPasswordSuccess(false);
    setForgotPasswordLoading(false);
  };
  return {
    showForgotPassword,
    setShowForgotPassword,
    forgotEmail,
    setForgotEmail,
    forgotPasswordLoading,
    forgotPasswordSuccess,
    forgotPasswordError,
    handleForgotPassword,
    resetForgotPasswordModal,
  };
};
