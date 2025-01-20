"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { createAccount } from "./action";
import { useFormState } from "react-dom";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput
          name="username"
          type="text"
          required
          placeholder="UserName"
        />
        <FormInput name="email" type="email" required placeholder="Email" />
        <FormInput
          name="password"
          type="password"
          required
          placeholder="Password"
        />
        <FormInput
          name="confirm_password"
          type="password"
          required
          placeholder="Confirm Password"
        />
        <FormButton text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
