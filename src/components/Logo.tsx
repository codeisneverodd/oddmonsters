import Image from "next/image";
import DarkLogoImage from "/public/logo/transparent/odd-white.svg";
import LightLogoImage from "/public/logo/transparent/odd-black.svg";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Logo({
  className,
}: Omit<ComponentProps<typeof Image>, "src" | "alt">) {
  return (
    <picture>
      <source srcSet={DarkLogoImage.src} media="(prefers-color-scheme: dark)" />
      <Image
        src={LightLogoImage}
        className={twMerge("w-24", className)}
        alt="odd monsters' logo"
        width={160}
        height={40}
      />
    </picture>
  );
}
