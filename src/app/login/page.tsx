import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="flex flex-col items-center mb-">
        <Image
          src="/logo.jpg"
          alt="Placeholder Image"
          className="rounded-lg mb-7"
          width={70}
          height={60}
        />
        <p className="text-4xl mt-2">LawChat</p>
        <p className="font-medium text-xs text-red-600 mt-2">Login Error</p>
        <p className="font-medium text-xs text-red-600 mt-1">
          An unexpected error occurred. Please try logging in again.
        </p>
      </div>
      <div className="flex flex-col items-center mb-6 space-y-4 mt-6">
        <input
          className="placeholder-gray-200 rounded-full p-3 border-solid text-gray-800 mt-6 border-gray-200 w-64"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="placeholder-gray-200 rounded-full p-3 border-solid text-slate-800 mt-2 border-gray-200 w-64"
          type="password"
          placeholder="Password"
        />
        <Link className="no-underline text-white font-medium" href="/chats">
          <button className="w-64 bg-red-600 text-white rounded-full mt-2 p-3 border-none">
            Continue
          </button>
        </Link>
      </div>
      <div className="flex items-center mt-12">
        <input type="checkbox" id="KeepSigned" className="mr-2 w-5 h-5" />
        <label
          className="font-medium text-xs text-gray-500"
          htmlFor="KeepSigned"
        >
          Keep me signed in
        </label>
      </div>
    </div>
  );
}
