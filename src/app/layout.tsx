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
  title: "ODD MONSTERS",
  description: "ODD MONSTERS's official website",
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
        <div className="min-h-screen pt-16">{children}</div>
        <Footer />
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
    <div className="navbar fixed z-50 bg-base-100 px-6 md:px-8">
      <div className="navbar-start">
        <Link href="/">
          <Logo type="odd" />
        </Link>
      </div>

      <div className="navbar-end">
        <HStack className="hidden md:flex">
          {links.map((l) => (
            <Button key={l.href} className="btn-ghost">
              <Link href={l.href} className="text-lg">
                {l.title}
              </Link>
            </Button>
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

function Footer() {
  return (
    <footer className="footer bg-neutral p-10 text-neutral-content">
      <div>
        <span className="footer-title">회사 정보</span>
        <p className="mb-2 font-bold">주식회사 오드몬스터즈</p>
        <p className="font-light">
          사업자 등록번호: 578-86-02903 | 대표: 김경현
        </p>
        <address className="font-light not-italic">
          16977 경기도 용인시 기흥구 강남서로 9, 703호
        </address>
      </div>
      <div>
        <span className="footer-title">고객센터</span>

        <address className="font-light not-italic">
          이메일:{" "}
          <a href="mailto:oddmonsters.tech@gmail.com">
            oddmonsters.tech@gmail.com
          </a>
        </address>
      </div>
      <div>
        <span className="footer-title">소셜</span>

        <Button className="btn-circle">
          <Link
            href="https://www.youtube.com/results?search_query=%EC%9D%8C%EC%95%85"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </Link>
        </Button>
      </div>
    </footer>
  );
}
