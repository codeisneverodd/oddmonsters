import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import Button, { HStack } from "@/components/base";
import localFont from "next/font/local";
import Link from "next/link";
import { useMemo } from "react";
import "./globals.css";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
});

export const metadata = {
  title: "ODD MONSTERS Inc.",
  description: "ODD MONSTERS Inc. official website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        suppressHydrationWarning={true}
        className={`${pretendard.variable}`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}

function Nav() {
  const links: {
    href: `/${string}`;
    title: string;
  }[] = useMemo(() => [{ href: "/posts", title: "게시글" }], []);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="navbar-end">
        <HStack className="hidden md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <Button className="btn-ghost">{l.title}</Button>
            </Link>
          ))}
        </HStack>
        <details className="dropdown-end dropdown md:hidden">
          <summary tabIndex={0} className="btn-ghost btn ">
            <Icon type="menu" />
          </summary>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.title}</Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  );
}
