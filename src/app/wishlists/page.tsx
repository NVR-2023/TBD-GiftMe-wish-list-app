"use client";

import Link from "next/link";
import { useAppContext } from "@/context";
import NavBar from "../_components/Layout/navbar/navbar";

export default function Wishlists() {
  const { userDetails, setUserDetails } = useAppContext();

  const SideBar = () => {
    return (
      <div>
        SideBAr
      </div>
    )

  };

  const FilterBar = () => {
    return <div className="">Filterbar</div>;
  };

  return (
    <div>
      <NavBar />
      <div className="relative top-16 lg:flex">
        <SideBar />
        <div className="w-full h-full p-1 m-1">
          <FilterBar />
          <div className="items-center justify-center max-h-[calc(100vh-120px)] overflow-y-auto p-8 mr-5 border-4 lg:p-10">
            123
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
