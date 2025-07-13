"use client";

import { useActionState } from "react";
import { signUpCredentials } from "../lib/actions";

const RegisterForm = () => {
  const [state, formAction, isLoading] = useActionState(
    signUpCredentials,
    null
  );

  return (
    <form action={formAction} className="space-y-4">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700">
          Nama
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">{state?.error?.name}</p>
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">{state?.error?.email}</p>
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">{state?.error?.password}</p>
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700">
          Konfirmasi Password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">{state?.error?.confirmPassword}</p>
      </div>

      {/* No HP */}
      <div>
        <label
          htmlFor="no_hp"
          className="block text-sm font-medium text-gray-700">
          Nomor HP
        </label>
        <input
          id="no_hp"
          name="no_hp"
          type="text"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">{state?.error?.no_hp}</p>
      </div>

      {/* Alamat */}
      <div>
        <label
          htmlFor="alamat"
          className="block text-sm font-medium text-gray-700">
          Alamat
        </label>
        <input
          id="alamat"
          name="alamat"
          type="text"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">{state?.error?.alamat}</p>
      </div>

      {/* No KTP */}
      <div>
        <label
          htmlFor="no_ktp"
          className="block text-sm font-medium text-gray-700">
          Nomor KTP
        </label>
        <input
          id="no_ktp"
          name="no_ktp"
          type="text"
          className="mt-1 block w-full px-4 py-2 border rounded-lg border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">{state?.error?.no_ktp}</p>
      </div>

     
      <button
        disabled={isLoading}
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        {isLoading ? "Loading..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
