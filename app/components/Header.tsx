"use client";

import { useSidebar } from "@/components/ui/sidebar";
import {
  MessageCircleMore,
  Search,
  UserRound,
  WalletMinimal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    toggleSidebar();
    setActive(!active);
  };
  return (
    <div className="px-4 bg-white fixed w-full flex items-center justify-between border-b border-b-gray-200 h-12 z-50">
      <div className="flex-center gap-4">
        <div
          className="flex flex-col items-center gap-1 rounded-full bg-secondary size-8 cursor-pointer relative"
          onClick={handleClick}
        >
          <div className="absolute top-1/2 -translate-y-1/2 overflow-x-hidden">
            <div className="w-3.5 h-0.5 bg-gray-600 transition-all duration-300"></div>
            <div
              className={`w-2.5 h-0.5  bg-gray-600 my-0.5 transition-all duration-300 ${
                active ? "w-3.5 translate-x-1" : "w-2.5"
              }`}
            ></div>
            <div className="w-3.5 h-0.5 bg-gray-600 transition-all duration-300"></div>
          </div>
        </div>
        <Link href={"/"} className="md:flex hidden">
          <Image
            src={"/images/logo.png"}
            width={150}
            height={150}
            alt="Logo Tap hoa MMO"
          />
        </Link>
        <div className="relative min-w-[430px] hidden xl:block">
          <input
            className="bg-secondary text-gray-700 outline-none px-4 py-2 rounded-lg text-sm w-full"
            placeholder="Tìm gian hàng hoặc người bán"
          />
          <Search className="text-gray-400 absolute top-1/2 -translate-y-1/2 right-4 size-6 cursor-pointer" />
        </div>
      </div>
      <div className="text-xs flex gap-2 lg:gap-2.5 *:rounded-sm *:px-3 *:py-1.5">
        <button className="flex-center gap-1 text-gradient bg-white border border-[#2c4dff] font-semibold  cursor-pointer">
          <WalletMinimal className="size-4 text-[#197dff]" />
          <span>0 VND</span>
        </button>
        <button className="flex-center gap-1 text-gray-700 bg-secondary font-semibold  cursor-pointer">
          <MessageCircleMore className="size-4" />
          <span className="hidden md:block">Thông báo</span>
        </button>
        <button className="flex-center gap-1 text-gray-700 bg-secondary font-semibold  cursor-pointer">
          <UserRound className="size-4" />
          <span className="hidden md:block">Người dùng</span>
        </button>
        <Link
          href="/login"
          className="text-white bg-gradient font-semibold cursor-pointer hidden md:block px-4"
        >
          Login/Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
