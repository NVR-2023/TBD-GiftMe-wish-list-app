"use client";

import React from "react";
import { useAppContext } from "@/context";

const SideBar: React.FC = () => {
  const { userDetails, setUserDetails } = useAppContext();
  return (
    <div>
      <p>Sidebar connected</p>
      <ul>
        {userDetails.myWishlistsArray &&
          userDetails.myWishlistsArray.map((wishlist: any, index: number) => (
            <p key={index}>{wishlist.name}</p>
          ))}
      </ul>
      <ul>
        {userDetails.externalWishlistsArray &&
          userDetails.externalWishlistsArray.map((wishlist: any, index: number) => (
            <p key={index}>{wishlist.name}</p>
          ))}
      </ul>
    </div>
  );
};

export default SideBar;

/*   <div>
    <p>{userDetails.myWIshListsArray[0].name}</p>
    <ul>
      {userDetails.myWIshListsArray &&
        userDetails.myWIshListsArray.map((wishlist: any, index: any) => {
          <li key={index}>{wishlist.name};</li>;
        })}
    </ul>
  </div>; */
