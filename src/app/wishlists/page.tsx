"use client";

import Link from "next/link";
import { useAppContext } from "@/context";
import AddButton from "../_components/Unique/addbutton";

export default function Wishlists() {
  const { userDetails, setUserDetails } = useAppContext();
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-900 text-white p-4">Navbar: fixed , fill-width, top</div>
      <div className="flex flex-1">
        <div className="m-1 w-1/5 h-full bg-gray-800 p-4 overflow-y-auto">
          Sidebar: section-width, scrollable vertically
          <p>Content area</p>
          <p>Content area</p>
          <p>Content area</p>
          <p>Content area</p>
          <p>Content area</p>
          <p>Content area</p>
          <p>Content area</p>
          <p>Content area</p>
          <p>Content area</p>
          <p>Content area</p>
          <p>Content area</p>
        </div>
        <div className="flex flex-col flex-1">
          <div className="m-1 bg-gray-700 text-white p-4">
            Section Navbar: fixed, section-width, top
          </div>
          <div className="m-1 flex-1 bg-green-700 p-4 h-full overflow-y-auto">
            Content area: scrollable vertically
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
            <p>Content Area</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/*     <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
    </main> */
