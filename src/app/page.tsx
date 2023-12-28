import { Home as HomeIcon, Search, LibraryBig, ChevronLeft, ChevronRight, Play, Heart, Shuffle, SkipBack, SkipForward, Repeat, Laptop2, Mic2, LayoutList, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-80 bg-black p-6">

          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-xs font-semibold text-zinc-200'>
              <LibraryBig />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Favoritas</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Divas Pop</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Anos 90</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Top Hit</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Curtir</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Antigas</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100' >Rock Brasil</a>
          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='flex items-center justify-center w-8 h-8 rounded-full bg-black/20 hover:bg-black/80'> <ChevronLeft className='w-6 h-6' /></button>
            <button className='flex items-center justify-center w-8 h-8 rounded-full bg-black/20 hover:bg-black/80'> <ChevronRight className='w-6 h-6' /></button>
          </div>

          <h1 className='font-bold text-2xl mt-6'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/bili.jpg" width={74} height={74} alt="capa album" />
              <strong>Happier Than Ever</strong>
              <button className='pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-10 flex justify-center items-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/elvis.png" width={74} height={74} alt="capa album" />
              <strong>Love Collection</strong>
              <button className='pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-10 flex justify-center items-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/hil.jpg" width={74} height={74} alt="capa album" />
              <strong>There is More</strong>
              <button className='pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-10 flex justify-center items-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/jessie.jpg" width={74} height={74} alt="capa album" />
              <strong>Rose Sex</strong>
              <button className='pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-10 flex justify-center items-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/lady.jpg" width={74} height={74} alt="capa album" />
              <strong>Joanne</strong>
              <button className='pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-10 flex justify-center items-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'>
              <Image src="/raul.jpg" width={74} height={74} alt="capa album" />
              <strong>Maluco Beleza</strong>
              <button className='pl-1 w-12 h-12 rounded-full bg-green-400 text-black ml-auto mr-10 flex justify-center items-center invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>


          <h2 className='font-bold text-1xl mt-8'>Made For Daiana Russi</h2>
          <div className='grid grid-cols-6 gap-8 mt-4'>
            <a href='#' className='p-2 flex flex-col gap-1 bg-white/5 rounded hover:bg-white/10'>
              <Image className='w-full rounded' src="/1.jpg" width={800} height={800} alt="capa album" />
              <strong className='font-semibold'>Nostalgia</strong>
              <span className='text-sm text-zinc-500'>Ben B King</span>
            </a>
            <a href='#' className='p-2 flex flex-col gap-1 bg-white/5 rounded hover:bg-white/10'>
              <Image className='w-full rounded' src="/2.jpeg" width={800} height={800} alt="capa album" />
              <strong className='font-semibold'>Old Church</strong>
              <span className='text-sm text-zinc-500'>Elevation Worship</span>
            </a>
            <a href='#' className='p-2 flex flex-col gap-1 bg-white/5 rounded hover:bg-white/10'>
              <Image className='w-full rounded' src="/3.jpg" width={800} height={800} alt="capa album" />
              <strong className='font-semibold'>Yeshua</strong>
              <span className='text-sm text-zinc-500'>Julliany Souza</span>
            </a>
            <a href='#' className='p-2 flex flex-col gap-1 bg-white/5 rounded hover:bg-white/10'>
              <Image className='w-full rounded' src="/4.png" width={800} height={800} alt="capa album" />
              <strong className='font-semibold'>Joanne</strong>
              <span className='text-sm text-zinc-500'>Lady Gaga</span>
            </a>
            <a href='#' className='p-2 flex flex-col gap-1 bg-white/5 rounded hover:bg-white/10'>
              <Image className='w-full rounded' src="/5.png" width={800} height={800} alt="capa album" />
              <strong className='font-semibold'>If I Were a Boy</strong>
              <span className='text-sm text-zinc-500'>Beyonce</span>
            </a>
            <a href='#' className='p-2 flex flex-col gap-1 bg-white/5 rounded hover:bg-white/10'>
              <Image className='w-full rounded' src="/6.png" width={800} height={800} alt="capa album" />
              <strong className='font-semibold'>Top Hit</strong>
              <span className='text-sm text-zinc-500'>Lady Gaga</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-4 flex items-center justify-between">
        <div className='flex items-center gap-6'>
          <Image className='rounded' src="/2.jpeg" width={56} height={56} alt="capa album" />
          <div className='flex flex-col'>
            <strong className='font-semibold'>Nome Album</strong>
            <span className='text-xs text-zinc-500'>nome dos arti</span>
          </div>
          <div> <Heart /></div>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-green-400' />
            <SkipBack size={20} className='text-zinc-200' />
            <button className='pl-1 w-10 h-10 rounded-full bg-white text-black flex justify-center items-center'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='h-1 rounded-full w-40 bg-zinc-200'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>

        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={20} />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='h-1 rounded-full w- bg-zinc-200'></div>
            </div>
          </div>
          <Maximize2 size={20} />

        </div>
      </footer>
    </div>
  )
}
