import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";
import LightBulbManImage from "/public/picture/light-bulb-ink.gif";

export default function Home() {
  return (
    <main>
      <Thumbnail />

      <div className="m-auto w-full gap-20  px-6 pb-24 pt-10 md:max-w-6xl">
        <div>
          <h2 className="mb-4 opacity-50">인기글</h2>
          <div className="flex w-full flex-wrap gap-8">
            <ArticleCard />
          </div>
        </div>
        <span className="divider" />
        <div>
          <h2 className="mb-4 opacity-50">최신글</h2>
          <div className="flex w-full flex-wrap gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
      </div>
    </main>
  );
}

function ArticleCard({ className }: ComponentProps<"div">) {
  return (
    <div className="group flex w-full cursor-pointer flex-col gap-5">
      <div className="aspect-video w-full rounded-md bg-gray-700 transition-all group-hover:-translate-y-2" />
      <h4 className="font-light">제품</h4>
      <h3 className="text-3xl font-bold group-hover:text-blue-500">
        티켓팅에 완벽하게 성공하는 법
      </h3>
      <p className="font-light">완벽한 타이밍을 위한 고성능 시계</p>
      <time className="font-light opacity-80">2023.06.29</time>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="relative h-[50vh] w-full">
      <Image
        priority
        src={LightBulbManImage}
        width={400}
        height={400}
        className="absolute h-[50vh] w-full bg-white object-contain"
        alt="머리가 전구인 정장을 입은 사람"
      />
      <div className="absolute  h-[50vh] w-full  bg-black/70 ">
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] break-keep text-center text-4xl font-bold leading-normal text-white md:text-5xl">
          <p>세상 모든 아이디어가</p>
          <p className="md:pt-4">제품이 될 수 있도록</p>
        </div>
        <p className="absolute bottom-4 right-2 text-sm font-light text-gray-400 hover:text-gray-300 md:text-lg">
          <Link href="https://giphy.com/sociality2" target="_blank">
            @sociality2
          </Link>
        </p>
      </div>
    </div>
  );
}
