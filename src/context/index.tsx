"use client";
import { createContext, useState, useContext } from "react";

type AppContextProps = {
  userId?: number;
  userName?: string;
  userJWT?: string;
  darkMode?: boolean;
};

const defaultAppContext: AppContextProps = {
  userId: 333,
  userName: "John",
  userJWT: "- Default state -",
  darkMode: true,
};

// revision: argument needs to be typed
const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState(defaultAppContext);
  return <AppContext.Provider value={{userDetails , setUserDetails}}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
