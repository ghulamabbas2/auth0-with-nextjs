import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <Link
        href="/api/auth/login"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
      >
        Login
      </Link>
    </div>
  );
}
