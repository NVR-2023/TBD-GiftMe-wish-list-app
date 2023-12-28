import Link
 from "next/link";
export default function Wishlists() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Wishlists tab successfully connected</div>
      <Link href="/">Home</Link>
    </main>
  );
}
