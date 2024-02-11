import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="">
        <div className="relative">
          <h1 className="font-bold text-xl text-center">Play games</h1>
        </div>

        <div className="mt-10">
          <div className="flex gap-5">
            <div className="card">
              <Link href="https://subham-tandukar-games.netlify.app/" className="app-title" target="_blank">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/sliding-puzzle.png"
                  alt="Sliding Puzzle Logo"
                  width={180}
                  height={37}
                  priority
                />
                Sliding puzzle
              </Link>
            </div>
            <div className="card">
            <Link href="https://subham-tandukar-games.netlify.app/" className="app-title" target="_blank">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/tic-tac-toe.png"
                  alt="Tic Tac Toe Logo"
                  width={180}
                  height={37}
                  priority
                />
                Tic Tac Toe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
