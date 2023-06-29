import Image, { StaticImageData } from "next/image";
import CloseBlackIcon from "/public/icons/close-black.svg";
import CloseWhiteIcon from "/public/icons/close-white.svg";
import MenuBlackIcon from "/public/icons/menu-black.svg";
import MenuWhiteIcon from "/public/icons/menu-white.svg";
import { ComponentProps, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type IconImage = "menu" | "close";

export default function Icon({
  className,
  type,
}: { type: IconImage } & Omit<ComponentProps<typeof Image>, "src" | "alt">) {
  const targetImage: {
    dark: StaticImageData;
    light: StaticImageData;
  } = useMemo(() => {
    switch (type) {
      case "close":
        return {
          dark: CloseWhiteIcon,
          light: CloseBlackIcon,
        };
      case "menu":
        return {
          dark: MenuWhiteIcon,
          light: MenuBlackIcon,
        };
    }
  }, [type]);

  return (
    <picture>
      <source
        srcSet={targetImage.dark.src}
        media="(prefers-color-scheme: dark)"
      />
      <Image
        src={targetImage.light}
        className={twMerge("w-4", className)}
        alt={`${type} icon`}
        width={20}
        height={20}
      />
    </picture>
  );
}
