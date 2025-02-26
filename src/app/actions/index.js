"use server";

import { signIn, signOut } from "../auth";
export const doSocialLogin = async (formData) => {
  try {
    const actionValue = formData.get("action");
    console.log("Action value:", actionValue);
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
