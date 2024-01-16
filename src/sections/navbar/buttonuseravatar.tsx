import React, { FC } from "react";
import Image from "next/image";
import { useAppContext } from "@/context";
import getColorFromFirstChar from "@/utils/getcolorfromfirstchar";

const ButtonUserAVatar: FC = () => {
  const { globalContext, setGlobalContext } = useAppContext();

  return (
    <div>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        {globalContext?.userDetails?.userAvatar && globalContext.userDetails.userAvatar !== "" ? (
          <div className="avatar online relative">
            <div className="rounded-full">
              <Image
                height={32}
                width={32}
                alt={"Avatar image"}
                src={globalContext?.userDetails?.userAvatar}
              />
            </div>
          </div>
        ) : (
          <div className="avatar online placeholder">
            <div
              className="bg-neutral text-neutral-content rounded-full w-8"
              style={{
                background: getColorFromFirstChar(globalContext?.userDetails?.userName),
              }}>
              <span className="text-base">
                {globalContext?.userDetails?.userName[0].toUpperCase()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ButtonUserAVatar;
