import React, { FC } from "react";
import { useAppContext } from "@/context";

import LightModeIcon from "./lightmodeicon";
import DarkModeIcon from "./darkmodeicon";

const ThemeToggle: FC = () => {
  const { globalContext, setGlobalContext } = useAppContext();

  const toggleDarkLightMode = () => {
    setGlobalContext((current: any) => ({
      ...current,
      theme: current.theme === "dark" ? "light" : "dark",
    }));
  };

  return (
    <label className="swap swap-rotate me-2">
      <input type="checkbox" />
      <span className="swap-on" onClick={toggleDarkLightMode}>
        <LightModeIcon color={"black"} />
      </span>
      <span className="swap-off" onClick={toggleDarkLightMode}>
        <DarkModeIcon color={"black"} />
      </span>
    </label>
  );
};

export default ThemeToggle;
