"use client";
import React from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Alert, AlertDescription } from "@/shared/components/ui/alert";
import { useForgotPassword } from "../../hooks/use-forgot-password";

interface ForgotPasswordDialogProps {
  children: React.ReactNode;
}

export const ForgotPasswordDialog: React.FC<ForgotPasswordDialogProps> = ({
  children,
}) => {
  const {
    showForgotPassword,
    setShowForgotPassword,
    forgotEmail,
    setForgotEmail,
    forgotPasswordLoading,
    forgotPasswordSuccess,
    forgotPasswordError,
    handleForgotPassword,
    resetForgotPasswordModal,
  } = useForgotPassword();

  return (
    <>
      <Dialog
        open={showForgotPassword}
        onOpenChange={(open) => {
          setShowForgotPassword(open);
          if (!open) resetForgotPasswordModal();
        }}
      >
        <DialogTrigger asChild>
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Forgot password?
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              Reset Password
            </DialogTitle>
            <DialogDescription>
              {forgotPasswordSuccess
                ? "We've sent you a otp to your Email!"
                : "Enter your email address and we'll send you a otp to reset your password."}
            </DialogDescription>
          </DialogHeader>

          {forgotPasswordSuccess ? (
            <div className="space-y-4">
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-800 mb-2">
                  Check your email
                </h3>
                <p className="text-sm text-green-700">
                  We've sent a otp to password <strong>{forgotEmail}</strong>
                </p>
              </div>
              <Button
                onClick={() => setShowForgotPassword(false)}
                className="w-full"
                variant="outline"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {forgotPasswordError && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-600">
                    {forgotPasswordError}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="forgot-email">Email address</Label>
                <Input
                  id="forgot-email"
                  type="email"
                  placeholder="john@example.com"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className={forgotPasswordError ? "border-red-500" : ""}
                  disabled={forgotPasswordLoading}
                />
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => setShowForgotPassword(false)}
                  variant="outline"
                  className="flex-1"
                  disabled={forgotPasswordLoading}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleForgotPassword}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  disabled={forgotPasswordLoading}
                >
                  {forgotPasswordLoading ? "Sending..." : "Send"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
