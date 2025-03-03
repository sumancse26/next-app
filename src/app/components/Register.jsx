"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import SocialLoginForm from "./SocialLogin";

const Register = () => {
  const router = useRouter();
  const doRegister = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name")?.trim();
      const email = formData.get("email")?.trim();
      const password = formData.get("password")?.trim();

      // Ensure all fields are filled before making the request
      if (!name || !email || !password) {
        console.error("All fields are required!");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.status == 201) {
        router.push("/");
      } else {
        console.error("Registration failed:", await res.text());
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 items-center pt-3"
        onSubmit={doRegister}
      >
        <h5>Registration form</h5>
        <div className="p-2 border border-gray-500 border-2">
          <div className="mb-2">
            <label htmlFor="name">Name</label>
            <input
              className="border mx-2 border-gray-500 rounded"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
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
            Register
          </button>
        </div>
        <h4>Or</h4>
      </form>
      <SocialLoginForm />
      <div className="flex gap-1 justify-center mt-3">
        <p>Already have an account?</p>
        <Link href="/" className="mx-2 underline">
          Login
        </Link>
      </div>
    </>
  );
};

export default Register;
