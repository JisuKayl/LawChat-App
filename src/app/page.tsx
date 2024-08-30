import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between items-center m-0 p-5 px-14 shadow">
        <Image
          src="/logo.jpg"
          alt="Placeholder Image"
          className="rounded-lg"
          width={70}
          height={60}
        />
        <ul className="list-none flex justify-around">
          <li>
            <Link
              className="no-underline text-black m-3 font-semibold"
              href="/features"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-black m-3 font-semibold"
              href="desktopapp"
            >
              Desktop App
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-black m-3 font-semibold"
              href="privacy"
            >
              Privacy & Safety
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="flex flex-col w-1/3 p-20">
          <div>
            <p className="text-6xl font-bold mr-6">LawChat on your pocket.</p>
            <p className="mt-10 mr-12">
              It makes it easy to communicate and ask for help
            </p>
          </div>
          <div className="flex flex-col cursor-default">
            <Link
              className="no-underline text-white font-medium p-3 cursor-default"
              href="/login"
            >
              <button
                type="button"
                className="text-base w-fit border-none focus:outline-none text-white bg-red-600 rounded-full px-5 py-2.5 me-2 mb-2 mt-10 cursor-pointer"
              >
                Continue as Admin
              </button>
            </Link>
            <button className="text-base w-fit border-none rounded-full bg-transparent px-5 pb-2 mb-2">
              <Link
                className="no-underline text-blue-400 font-medium p-6"
                href="/switchacc"
              >
                Switch Account
              </Link>
            </button>
          </div>
          <div className="flex mt-5 justify-between">
            <Link href="https://www.apple.com/ph/app-store/">
              <Image
                src="/appstore.png"
                alt="Placeholder Image"
                className="rounded-lg "
                width={165}
                height={45}
              />
            </Link>
            <Link href="https://play.google.com/store/games?hl=en">
              <Image
                src="/googlestore.png"
                alt="Placeholder Image"
                className="rounded-lg "
                width={165}
                height={45}
              />
            </Link>
          </div>
        </div>
        <div className="p-10">
          <Image
            src="/map.png"
            alt="Placeholder Image"
            className="rounded-xl absolute"
            width={450}
            height={450}
          />
          <Image
            src="/sampleconvo.png"
            alt="Placeholder Image"
            className="rounded-xl relative top-10 left-96 border-solid border-b-gray-400 border-gray-100"
            width={400}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
