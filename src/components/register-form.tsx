"use client";

import { signUpCredentials } from "../../lib/actions";
import { useActionState } from "react";

const RegisterForm = () => {
  const [state, formAction] = useActionState(signUpCredentials, null);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700">
          name
        </label>
        <input
          id="name"
          type="name"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
          name="name"
        />
        <p className="text-red-500 text-sm">{state?.error?.name}</p>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
          name="email"
        />
        <p className="text-red-500 text-sm">{state?.error?.email}</p>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
          name="password"
        />
        <p className="text-red-500 text-sm">{state?.error?.password}</p>
      </div>

      <div>
        <label
          htmlFor="confirm-password"
          className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          id="confirm-password"
          type="password"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
          name="confirm-password"
        />
        <p className="text-red-500 text-sm">{state?.error?.confirmPassword}</p>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
