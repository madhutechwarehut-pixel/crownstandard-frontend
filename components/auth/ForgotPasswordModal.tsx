"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ForgotPasswordModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-[#E5E7EB]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute text-gray-400 top-4 right-4 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <header className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-[#1F2937]">Reset Password</h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </header>

        {/* Form */}
        <form className="space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            aria-label="Email Address"
          />

          <div className="flex items-center gap-3 pt-2">
            <Button type="submit" full variant="dark" className="rounded-full">
              Send Reset Link
            </Button>
            <Button
              type="button"
              full
              variant="dark"
              className="text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
