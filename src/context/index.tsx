"use client";
import { createContext, useState, useContext } from "react";

type Group = {
  type: string;
  members: number;
};

type AppContextProps = {
  userId?: number;
  userName?: string;
  userJWT?: string;
  currentPage?: string;
  darkMode?: boolean;
  groupsType?: Group[];
};

const defaultAppContext: AppContextProps = {
  userId: 333,
  userName: "John",
  userJWT: "- Default state -",
  currentPage: "wishlists",
  darkMode: true,
  groupsType: [
    {
      type: 'Family & Friends',
      members: 122
    },
    {
      type: 'Coleagues',
      members: 12
    },
    {
      type: 'Close Family',
      members: 5
    },
    {
      type: 'Steven Lomack',
      members: 1
    },
  ],
};

// revision: argument needs to be typed
const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState(defaultAppContext);
  return <AppContext.Provider value={{ userDetails, setUserDetails }}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
