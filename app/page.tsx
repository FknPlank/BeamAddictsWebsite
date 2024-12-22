"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Image} from "@nextui-org/react";

export default function Home() {
  return (
    <div className="flex justify-center">
    <Image 
      isBlurred
      alt="NextUI Album Cover"
      className="m-5"
      src="https://nextui.org/images/album-cover.png"
      height={250}
      width={600}
    />
    </div>
  );
}
