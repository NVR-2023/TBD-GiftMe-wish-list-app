"use client";
import { createContext, useState, useEffect, useContext } from "react";
import { AppContextPropsType } from "@/types/global_context_type";

const defaultAppContext: AppContextPropsType = {};

// revision: argument needs to be typed
const AppContext = createContext<AppContextPropsType>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [globalContext, setGlobalContext] = useState(defaultAppContext);

  useEffect(() => {
    const loadMockContext = async () => {
      try {
        const response = await fetch("/mockcontext/mockcontext.json");
        const data = await response.json();
        setGlobalContext(data);
        console.log("mock context successfully loaded");
      } catch (error) {
        console.error("Error loading mock context:", error);
      }
    };
    loadMockContext();
  }, []);

  return (
    <AppContext.Provider
      value={{ globalContext: globalContext, setGlobalContext: setGlobalContext }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
