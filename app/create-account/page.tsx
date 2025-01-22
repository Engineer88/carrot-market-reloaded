"use client";

import FormButton from "@/components/button";
import Input from "@/components/input";
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
        <Input
          name="username"
          type="text"
          required
          placeholder="UserName"
          errors={state?.fieldErrors.username}
          minLength={3}
          maxLength={10}
        />
        <Input           
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email} />
        <Input
          name="password"
          type="password"
          required
          placeholder="Password"
          errors={state?.fieldErrors.password}
          minLength={4}
        />
        <Input
          name="confirm_password"
          type="password"
          required
          placeholder="Confirm Password"
          errors={state?.fieldErrors.confirm_password}
        />
        <FormButton text="Create Account" />
      </form>
      <SocialLogin />
    </div>
  );
}
