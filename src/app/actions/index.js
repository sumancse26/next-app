"use server";

import { signIn, signOut } from "../auth";
export const doSocialLogin = async (formData) => {
  try {
    const actionValue = formData.get("action");
    await signIn(actionValue, { redirectTo: "/home" });
  } catch (error) {
    console.error("Error during social login:", error);
    throw error;
  }
};

export const doLogout = async () => {
  try {
    await signOut({ redirectTo: "/" });
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};

export const doCredentialsLogin = async (formData) => {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return response;
  } catch (error) {
    console.error("Error during credentials login:", error);
    throw error;
  }
};
