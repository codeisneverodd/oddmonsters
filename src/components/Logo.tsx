import OddBlackImage from "/public/logo/transparent/odd-black.svg";
import OddWhiteImage from "/public/logo/transparent/odd-white.svg";
import OddMonstersWBlackImage from "/public/logo/transparent/odd-monsters-black.svg";
import OddMonstersWWhiteImage from "/public/logo/transparent/odd-monsters-white.svg";

import Image, { StaticImageData } from "next/image";
import { ComponentProps, useMemo } from "react";
import { twMerge } from "tailwind-merge";

export default function Logo({
  className,
  type = "odd",
  isInverted = false,
}: {
  type: "odd" | "odd-monsters";
  isInverted?: boolean;
} & Omit<ComponentProps<typeof Image>, "src" | "alt">) {
  const targetImage: {
    dark: StaticImageData;
    light: StaticImageData;
  } = useMemo(() => {
    switch (type) {
      case "odd":
        return {
          dark: OddWhiteImage,
          light: OddBlackImage,
        };
      case "odd-monsters":
        return {
          dark: OddMonstersWWhiteImage,
          light: OddMonstersWBlackImage,
        };
    }
  }, [type]);
  return (
    <picture>
      <source
        srcSet={isInverted ? targetImage.light.src : targetImage.dark.src}
        media="(prefers-color-scheme: dark)"
      />
      <Image
        src={isInverted ? targetImage.dark : targetImage.light}
        className={twMerge("w-24", className)}
        alt="오드몬스터즈 로고"
        width={160}
        height={40}
      />
    </picture>
  );
}
