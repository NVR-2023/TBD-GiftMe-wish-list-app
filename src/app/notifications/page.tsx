"use client";

import Link from "next/link";
import { useAppContext } from "@/context";

export default function Notifications() {
  const { userDetails, setUserDetails } = useAppContext();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Notifications tab successfully connected</div>
      <Link href="/">Home</Link>
    </main>
  );
}
