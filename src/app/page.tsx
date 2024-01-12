import GiftMeLogo from "./_components/Common/GiftMeLogo";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>GiftMe next,js App in development</div>
      <div>
        <GiftMeLogo height="200px" width="200px" />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="/wishlists">Wishlists</Link>
        <Link href="/groups">Groups</Link>
        <Link href="/notifications">Notifications</Link>
      </div>
    </main>
  );
}
