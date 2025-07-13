import React from 'react'

const RegisterPage = () => {
  return (
    <form className="space-y-4">
      <h2 className="text-2xl font-bold text-center">Register</h2>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          required
        />
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
          className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="confirm-password"
          className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="confirm-password"
          type="password"
          className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Register
      </button>
    </form>
  );
}

export default RegisterPage