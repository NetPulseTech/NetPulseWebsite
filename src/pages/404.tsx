import Link from "next/link";

export default function Custom404() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center align-center text-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
