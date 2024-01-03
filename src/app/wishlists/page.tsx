"use client";

import Link from "next/link";
import { useAppContext } from "@/context";
import AddButton from "../_components/addbutton";

export default function Wishlists() {
  const { userDetails, setUserDetails } = useAppContext();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Wishlists tab successfully connected</div>
      <div>{userDetails.userJWT}</div>
      <Link href="/">Home</Link>
      <button
        onClick={() => {
          // revision: argument needs to be typed
          setUserDetails((currentUserDetails : any) => ({ ...currentUserDetails, userJWT: "Wishlists" }));
        }}>
        Set JWT to Wishlists
      </button>
      <AddButton />
    </main>
  );
}
