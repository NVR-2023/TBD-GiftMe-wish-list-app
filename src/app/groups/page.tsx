"use client";

import Link from "next/link";
import { useAppContext } from "@/context";

export default function Groups() {
  const { userDetails, setUserDetails } = useAppContext();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Groups tab successfully connected</div>
      <div>{userDetails.userJWT}</div>
      <Link href="/">Home</Link>
      <button
        onClick={() => {
          // revision: argument needs to be typed
          setUserDetails((currentUserDetails : any) => ({ ...currentUserDetails, userJWT: "Groups" }));
        }}>
        Set JWT to Groups
      </button>
    </main>
  );
}
