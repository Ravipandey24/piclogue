"use client";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// import { useToast } from "../ui/use-toast";
import { z } from "zod";
// import axios, { AxiosError } from "axios";
import { useState } from "react";
// import { Icons } from "../icons";
import {
  SignUpFormType,
  signUpFormSchema,
} from "@/lib/validations/client-vals";
import { EyeCloseIcon, EyeIcon } from "../Icons";
import { Spinner } from "@nextui-org/spinner";
import { supabaseSignUp } from "@/utils/api/auth";
import { toast } from "sonner";

const SignUpForm = ({}) => {
  const [isSendingRequest, setSendingRequest] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  //   const { toast } = useToast();

  async function onSubmit(formData: SignUpFormType) {
    setSendingRequest(true);
    try {
      const { success, message } = await supabaseSignUp(formData);
      if (success) {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSendingRequest(false);
      reset({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        placeholder="username"
        isInvalid={!!errors.name?.message}
        errorMessage={errors.name?.message}
        {...register("name")}
      />
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
          type={showPass ? "text" : "password"}
          isInvalid={!!errors.password?.message}
          errorMessage={errors.password?.message}
          {...register("password")}
        />
        <div
          className="absolute right-9 text-gray-400 hover:cursor-pointer text-sm"
          onClick={() => setShowPass((prev) => !prev)}
        >
          {showPass ? <EyeCloseIcon></EyeCloseIcon> : <EyeIcon></EyeIcon>}
        </div>
      </div>
      <Input
        placeholder="confirm password"
        type="password"
        isInvalid={!!errors.confirmPassword?.message}
        errorMessage={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />
      <Button
        className="w-full gap-2"
        disabled={isSendingRequest}
        type="submit"
      >
        <span>Submit</span>
        {isSendingRequest && <Spinner size="sm" color="default"></Spinner>}
      </Button>
    </form>
  );
};

export default SignUpForm;
