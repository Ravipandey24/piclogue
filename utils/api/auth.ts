"use server";

import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { SignInFormType, SignUpFormType } from "@/lib/validations/client-vals";
import { AuthReturnType } from "@/lib/validations/server-vals";
import { revalidatePath } from "next/cache";

// supabase auth functions
export const supabaseSignIn = async ({ email, password }: SignInFormType): Promise<AuthReturnType> => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    }
  }

  return {
    success: true,
    message: "Successfully Authenticated",
  }
};

export const supabaseSignUp = async ({ name, email, password }: SignUpFormType): Promise<AuthReturnType> => {
  const origin = headers().get("origin");
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    }
  }

  return {
    success: true,
    message: "Please check your email for the confirmation link.",
  }
};

export const supabaseSignOut = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  await supabase.auth.signOut();
  return revalidatePath('/');
};

export const getSessionUser = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { user };
};
