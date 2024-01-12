"use client";

import React from "react";
import { useAppContext } from "@/context";

const SideBar: React.FC = () => {
  const { userDetails , setUserDetails } = useAppContext();
  return (
  <p>Sidebar connected</p>
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
