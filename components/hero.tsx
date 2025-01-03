import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { anton, roboto } from "@/config/fonts";
import {
  DiscordIcon2,
  EventIcon,
  ListIcon,
  UserIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const router = useRouter();

  return (
    <div
      className="relative bg-cover bg-center w-screen h-full py-50 drop-shadow-xl"
      style={{ backgroundImage: "url('/splash.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20" />

      <div
        className={`${anton.className}relative z-10 flex flex-col items-center justify-center h-full text-center text-white`}
      >
        <p className="font-bold font-chonburi">
          <span className="text-inherit text-8xl">Welcome to </span>
          <span className="text-inherit text-8xl">Beam</span>
          <span className="text-indigo-700 text-8xl">Addicts</span>
          <span className="text-inherit text-8xl"> Gaming!</span>
        </p>
        <div className="flex justify-center gap-20 py-20">
          <Button
            className={`${roboto.className} size-80 h-14 text-2xl bg-indigo-700 text-white`}
            startContent={<ListIcon />}
            variant="solid"
            onPress={() => {
              router.push("/Whitelist");
            }}
          >
            Whitelist Information
          </Button>
          <Button
            className={`${roboto.className} size-80 h-14 text-2xl bg-indigo-700 text-white`}
            startContent={<DiscordIcon2 />}
            variant="solid"
          >
            <a href={siteConfig.links.discord} rel="noreferrer" target="_blank">
              Join The Discord
            </a>
          </Button>
          <Button
            className={`${roboto.className} size-80 h-14 text-2xl bg-indigo-700 text-white`}
            startContent={<EventIcon />}
            variant="solid"
          >
            Events
          </Button>
          <Button
            className={`${roboto.className} size-80 h-14 text-2xl bg-indigo-700 text-white`}
            startContent={<UserIcon />}
            variant="solid"
          >
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
}
