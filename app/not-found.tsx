import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-mocha flex flex-col items-center justify-center px-6 text-center">
      <p className="label text-terra mb-6">404</p>
      <h1 className="font-serif font-light text-sand text-7xl mb-6 italic">Lost?</h1>
      <p className="font-sans font-light text-sand/50 text-sm mb-10">This page doesn't exist — but your next session at Century 360 does.</p>
      <Link href="/" className="btn-primary">Return Home</Link>
    </div>
  );
}
