"use client";

import Link from "next/link";
import { useAppContext } from "@/context";
import TestButton from "../../../components/common/TestButton";

export default function Wishlists() {
  const { globalContext, setGlobalContext } = useAppContext();

  const changeGlobalContext = (newVariableValue: string): void => {
    if (globalContext && globalContext.globalVariables) {
      globalContext.globalVariables.variable1 = newVariableValue;
    }
  };

  const addGlobalContext = (newVariableValue: string): void => {
    if (globalContext && globalContext.globalVariables) {
      globalContext.globalVariables.variable9 = newVariableValue;
    }
  };

const changeTheme = (): void =>
  setGlobalContext((current: any) => ({ ...current, theme: "light" }));


  changeGlobalContext("abcdef");
  addGlobalContext("Variable 9");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Wishlists tab successfully connected</div>
      <Link href="/">Home</Link>
      <div>
        <span className="me-3">{globalContext?.userDetails?.userName}</span>
        <span className="me-3">{globalContext?.userDetails?.userId}</span>
        <span className="me-3">{globalContext?.userDetails?.userJWT}</span>
        <span className="me-3">{globalContext?.globalVariables?.variable1}</span>
        <span className="me-3">{globalContext?.theme}</span>
      </div>
      <button onClick={changeTheme} className="btn-success">(Click me)</button>
      <div>
        <TestButton
          text={"Wishlists"}
          onClick={() => {
            alert("Wishlists");
            console.log("Wishlists");
          }}
        />
      </div>
    </main>
  );
}
