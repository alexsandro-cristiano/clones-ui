import {
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Laptop2,
  LayoutList,
  Library,
  Maximize2,
  Mic2,
  Play,
  Repeat,
  Search,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className={`h-screen flex flex-col    `}>
      <div className={`flex flex-1      `}>
        <aside className={`w-72 bg-zinc-950 p-6`}>
          <div className="flex items-center gap-2">
            <div className={` w-3 h-3 bg-red-500 rounded-full`}></div>
            <div className={`w-3 h-3 bg-yellow-500 rounded-full`}></div>
            <div className={`w-3 h-3 bg-green-500 rounded-full`}></div>
          </div>
          <nav className={`space-y-5 mt-10`}>
            <a
              href=""
              className={`flex items-center gap-3 text-md font-semibold text-zinc-200`}
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className={`flex items-center gap-3 text-md font-semibold text-zinc-200`}
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className={`flex items-center gap-3 text-md font-semibold text-zinc-200`}
            >
              <Library />
              Your Libary
            </a>
          </nav>
          <div className={`border border-zinc-800 mt-6 mb-6`}></div>
          <nav className={`flex flex-col gap-4 `}>
            <a
              className={`cursor-pointer text-sm text-zinc-400 hover:text-zinc-100 ease-in-out duration-300`}
            >
              Brazuca
            </a>
            <a
              className={`cursor-pointer text-sm text-zinc-400 hover:text-zinc-100 ease-in-out duration-300`}
            >
              Melodia e Porrada
            </a>
          </nav>
        </aside>
        <main className={`flex-1 p-6`}>
          <div className={`flex items-center gap-3 `}>
            <button className={`rounded-full bg-black/40 p-1`}>
              <ChevronLeft size={24} />
            </button>
            <button className={`rounded-full bg-black/40 p-1`}>
              <ChevronRight />
            </button>
          </div>

          <h1 className={`font-semibold text-3xl mt-10`}>Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className={`group bg-white/5 rounded object-cover overflow-hidden flex items-center gap-4
              hover:bg-white/10 transition-colors`}
            >
              <Image src={""} alt="" width={104} height={104} />
              <strong>titulo</strong>
              <button
                className={`w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8
              invisible group-hover:visible
              `}
              >
                <Play />
              </button>
            </a>
          </div>

          <h2 className={`font-semibold text-xl mt-10`}>Segunda seção</h2>
          <div className={`grid grid-cols-5 gap-4 mt-4`}>
            <a className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
              <Image
                src={""}
                alt=""
                className="w-full"
                width={120}
                height={120}
              />
              <strong className={` font-semibold `}>titulo</strong>
              <span className={`text-zinc-500 text-sm`}>nome do artista</span>
            </a>
          </div>
        </main>
      </div>

      <footer
        className={`flex justify-between items-center
      bg-zinc-800 border-t border-x-zinc-700 p-6     `}
      >
        <div className={`flex items-center gap-2`}>
          <Image src={""} alt="" />
          <div className={`flex flex-col`}>
            <strong className="font-normal">title</strong>
            <span className="text-xs text-zinc-400">banda</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-6 items-center">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button
              className={`w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black`}
            >
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 rounded-full "></div>
            </div>
            <span className="text-xs text-zinc-400">4:31</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-36 rounded-full "></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
