"use client";
import HeroSection from "@/components/hero";
import { Roboto } from "next/font/google";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { UserIcon, DiscordIcon, DiscordIcon2, ListIcon, EventIcon } from "@/components/icons";
import { roboto } from "@/config/fonts";

export default function Home() {
  return (
    <>
      <>
        <div className="h-[20rem] sm:h-[25rem] md:h-[30rem] bg-gray-200">
          <HeroSection />
        </div>
      </>
      <>
        <div className="flex justify-center gap-20 py-20">
          <Button startContent={<ListIcon />} variant="bordered" className={`${roboto.className} size-80 h-20 text-2xl text-black-600 border-indigo-700 shadow-lg shadow-indigo-700/60`}>
            Whitelist Information
          </Button>
          <Button startContent={<DiscordIcon2 />} variant="bordered" className={`${roboto.className} size-80 h-20 text-2xl text-black-600 border-indigo-700 shadow-lg shadow-indigo-700/60`}>
            Join The Discord
          </Button>
          <Button startContent={<EventIcon />}  variant="bordered" className={`${roboto.className} size-80 h-20 text-2xl text-black-600 border-indigo-700 shadow-lg shadow-indigo-700/60`}>
            Events
          </Button>
          <Button startContent={<UserIcon />} variant="bordered" className={`${roboto.className} size-80 h-20 text-2xl text-black-600 border-indigo-700 shadow-lg shadow-indigo-700/60`}>
            About Us
          </Button>

        </div>
      </>
    </>
  );
}
