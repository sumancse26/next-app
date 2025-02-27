"use client";

import { useRouter } from "next/navigation";
import { doCredentialsLogin } from "../actions/index";
import SocialLoginForm from "./SocialLogin";

const LoginForm = () => {
  const router = useRouter();
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      const res = await doCredentialsLogin(formData);
      if (!!res.error) {
        throw new Error(res.error);
      } else {
        router.push("/home");
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };
  return (
    <>
      <form
        className="flex flex-col gap-4 items-center pt-3 "
        onSubmit={formSubmitHandler}
      >
        <h5>Authentication with social networks or credentials</h5>
        <div className="p-2 border border-gray-500 border-2">
          <div className="mb-2">
            <label htmlFor="email">Email Address</label>
            <input
              className="border mx-2 border-gray-500 rounded"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              className="border mx-2 border-gray-500 rounded"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            className=" bg-blue-500 text-white px-4 py-2 rounded-md"
            type="submit"
          >
            Credentials Login
          </button>
        </div>
        <h4>Or</h4>
      </form>

      <SocialLoginForm />
    </>
  );
};

export default LoginForm;
