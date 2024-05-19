import React from "react";
import { SIconStore } from "../_icon";
import { IRIconWithMessage } from "@src/types/root/s-icon-with-message";
import Link from "next/link";

export const SIconWithMessage = ({ icon, message }: IRIconWithMessage) => {
  return (
    <div className={`h-[60vh] flex justify-center items-center space-x-2`}>
      <div>
        <SIconStore iconName={icon} fill={"#7F4D4F"} />
      </div>
      <div>
        <p className={`font-bold`}>{message}</p>
      </div>
      <div className="!ml-8 ">
        <a className="text-[#7F4D4F] hover:text-black duration-[0.2s] font-bold">
          <Link href="/">Click Me</Link>
        </a>
      </div>
    </div>
  );
};
