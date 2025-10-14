import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";
import { toast } from "sonner";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { userSignin, verifyWithOtp } from "@/http/services/auth";


export default function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpPage, setOtpPage] = useState(false);
  const navigate = useNavigate();

  const emailVerificationMutation = useMutation({
    mutationKey: ["email-verification"],
    mutationFn: async (payload: { email: string }) => {
      const response = await userSignin(payload);
      return response 
    },
    onSuccess: () => {
      toast.success("OTP sent successfully");
      setOtpPage(true);
    },
  });

  const otpVerificationMutation = useMutation({
    mutationKey: ["otp-verification"],
    mutationFn: async (payload: { email: string; otp: string }) => {
      const response = await verifyWithOtp(payload);
      return response.data;
    },
    onSuccess: (data) => {
      Cookies.set("token", data.data.access_token);
      Cookies.set("refreshToken", data.data.refresh_token);
      toast.success("Login successful!");
      navigate({ to: "/dashboard" });
    },
  });

  const handleEmailMutation = (e: any) => {
    e.preventDefault();
    emailVerificationMutation.mutateAsync({ email });
  };

  const handleOtpVerificationMutation = async(e: any) => {
    e.preventDefault();
    const res = await otpVerificationMutation.mutateAsync({ email, otp });
    console.log(res);
  };

  const loading =
    emailVerificationMutation.isPending || otpVerificationMutation.isPending;

    

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md transition-all duration-300 border border-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          {otpPage ? "Verify OTP" : "Login with Email"}
        </h2>

        {/* Email Page */}
        {!otpPage && !loading && (
          <form
            onSubmit={handleEmailMutation}
            className="flex flex-col gap-5 animate-fadeIn"
          >
            <div className="flex flex-col gap-2">
              <Label className="text-gray-700 font-medium">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-10 px-3 border-gray-300 focus:ring-2 focus:ring-black/80 rounded-md"
              />
            </div>
            <Button
              type="submit"
              className="bg-black hover:bg-gray-900 text-white w-full py-2 rounded-md transition-all duration-300"
            >
              Send OTP
            </Button>
          </form>
        )}

        {/* OTP Page */}
        {otpPage && !loading && (
          <form
            onSubmit={handleOtpVerificationMutation}
            className="flex flex-col items-center gap-6 animate-fadeIn"
          >
            <div className="flex flex-col gap-2 w-full items-center">
              <Label className="text-gray-700 font-medium">Enter OTP</Label>
              <InputOTP
                maxLength={4}
                value={otp}
                onChange={setOtp}
                className="mx-auto"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSeparator />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button
              type="submit"
              className="bg-black hover:bg-gray-900 text-white w-full py-2 rounded-md transition-all duration-300"
            >
              Verify OTP
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
