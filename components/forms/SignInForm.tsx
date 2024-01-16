"use client";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
// import { useToast } from "../ui/use-toast";
import z from "zod";
import { useRouter } from "next/navigation";
import {
  SignInFormType,
  signInFormSchema,
} from "@/lib/validations/client-vals";
import { EyeCloseIcon, EyeIcon } from "../Icons";
import { Spinner } from "@nextui-org/spinner";
import { textContent } from "@/lib/utils";
import { supabaseSignIn } from "@/utils/api/auth";


const SignInForm = () => {
  const [isSendingRequest, setSendingRequest] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // const { toast } = useToast();
  const router = useRouter();

  async function onSubmit(formData: SignInFormType) {
    setSendingRequest(true);
    try {
      await supabaseSignIn(formData)
    } catch (error) {
      console.log(error)
    } finally {
      setSendingRequest(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        placeholder="email"
        type="email"
        isInvalid={!!errors.email?.message}
        errorMessage={errors.email?.message}
        {...register("email")}
      />
      <div className="flex items-center">
        <Input
          placeholder="password"
          isInvalid={!!errors.password?.message}
          type={showPass ? "text" : "password"}
          {...register('password')}
          errorMessage={errors.password?.message}
        />
        <div
          className="absolute right-9 text-gray-500 hover:cursor-pointer text-sm"
          onClick={() => setShowPass((prev) => !prev)}
        >
          {showPass ? <EyeCloseIcon></EyeCloseIcon> : <EyeIcon></EyeIcon>}
        </div>
      </div>
      <Button className="w-full gap-2" type="submit" disabled={isSendingRequest}>
        <span>Submit</span>
        {isSendingRequest && <Spinner size="sm" color="default"></Spinner>}
      </Button>
    </form>
  );
};

export default SignInForm;
