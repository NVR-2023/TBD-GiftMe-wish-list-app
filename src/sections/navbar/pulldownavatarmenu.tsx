import React, { FC } from "react";
import { useAppContext } from "@/context";
import Link from "next/link";
import ButtonUserAVatar from "./buttonuseravatar";
const PullDownAvatarMenu: FC = () => {
  const { globalContext, setGlobalContext } = useAppContext();

  const logOut = () => {
    console.log("Logging out");
  };

  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <ButtonUserAVatar />
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content border-0 mx-0 mt-3 z-[1] px-1 bg-base-100 rounded-sm w-52">
          <li className="hover:bg-red-500 rounded-sm ">
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
          <hr className="my-1 border-t border-blue-500" />
          <li>
            <button onClick={logOut}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PullDownAvatarMenu;
