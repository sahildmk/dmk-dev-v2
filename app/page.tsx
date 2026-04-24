import Link from "next/link";
import MongoDBIcon from "./components/icons/mongodb-icon";
import TesslIcon from "./components/icons/tessl-icon";
import XIcon from "./components/icons/x-icon";
import LinkedInIcon from "./components/icons/linkedin-icon";

const blurStyle =
  "motion-opacity-in-[5%] motion-blur-in-[5px] motion-duration-[2s] motion-ease";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-between p-8 text-stone-400 bg-stone-900 relative">
      <div className="md:w-xl lg:w-3xl mt-16 sm:mt-40 sm:space-y-10 space-y-10">
        <section className="text-stone-300">
          <h1
            className={`text-3xl font-bold ${blurStyle} motion-delay-200 font-serif`}
          >
            Sahil Deshmukh
          </h1>
        </section>
        <section className="space-y-4">
          <div className="flex space-x-2">
            <p className={`${blurStyle} motion-delay-500`}>Hi</p>
            <p
              className={`${blurStyle} text-xl motion-delay-500 motion-preset-seesaw-lg`}
            >
              👋
            </p>
          </div>
          <p className={`${blurStyle} motion-delay-600`}>
            My name is{" "}
            <span className="text-stone-300 font-semibold">Sahil</span>.
          </p>
          <div className={`${blurStyle} motion-delay-700`}>
            <span>I&apos;m currently </span>
            <p className="inline-block motion-opacity-loop-40 motion-duration-[4s] motion-ease-out">
              <a
                href="https://www.tessl.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 transition-all duration-300 group"
              >
                baby sitting coding agents
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-stone-200"></span>
              </a>
            </p>
            <span> at </span>
            <p className="inline-block">
              <a
                className={`inline-block group hover:cursor-pointer`}
                href="https://www.tessl.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TesslIcon
                  className={`h-6 mr-1 inline-block group-hover:mr-1 motion-preset-spin  motion-duration-[3s] motion-ease-out group-hover:scale-120 transition-all duration-300`}
                />
                <span className="group-hover:scale-105 text-stone-300 font-semibold inline-block transition-all duration-300 ">
                  Tessl.
                </span>
              </a>
            </p>
          </div>
          <div className={`${blurStyle} motion-delay-700`}>
            <span>I was previously building things </span>
            <p className="inline-block ">
              <a
                href="https://www.mongodb.com/products/tools/relational-migrator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 transition-all duration-300 group"
              >
                to move a bunch of data around
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-stone-200"></span>
              </a>
            </p>
            <span> at </span>
            <p className="inline-block">
              <a
                className={`inline-block group hover:cursor-pointer`}
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MongoDBIcon
                  className={`h-6 mr-0.5 inline-block group-hover:mr-1 motion-rotate-loop-12/mirror motion-duration-[3s] motion-ease-out group-hover:scale-120 transition-all duration-300`}
                />
                <span className="group-hover:scale-105 text-stone-300 font-semibold inline-block transition-all duration-300 ">
                  MongoDB.
                </span>
              </a>
            </p>
          </div>
          <p className={`${blurStyle} motion-delay-800`}>
            I love solving{" "}
            <span className="text-stone-300">meaningful problems</span>. I also
            love <span className="text-stone-300">software</span>. Naturally, I
            keep myself busy by
            <span className="text-stone-300">
              {" "}
              solving meaningful problems with software
            </span>
            .
          </p>
          <p className={`${blurStyle} motion-delay-900`}>
            I also love learning from all the wonderfully smart and talented
            people around me, and finding ways to share all the cool things
            I&apos;ve learnt (I&apos;m working on being better at this).
          </p>
        </section>
        <section className={`space-y-2 ${blurStyle} motion-delay-1000`}>
          <h2 className="text-stone-300 font-semibold">Talks</h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/talks/stopped-hand-writing-code"
                className="text-stone-200 underline decoration-1 transition-all duration-300 hover:text-stone-300"
              >
                I&apos;ve stopped hand writing code
              </Link>
              <span className="text-stone-500"> — London JS, 25 Feb 2026</span>
            </li>
          </ul>
        </section>
        <div className={`flex gap-4 ${blurStyle} motion-delay-[1100ms]`}>
          <a
            href="https://x.com/sahildmk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-200 transition-colors duration-300"
          >
            <XIcon className="size-4" />
          </a>
          <a
            href="https://linkedin.com/in/sahildmk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-200 transition-colors duration-300"
          >
            <LinkedInIcon className="size-4" />
          </a>
        </div>
      </div>
    </main>
  );
}

const Timeline = () => {
  return (
    <div>
      <section>
        <div className="flex items-center space-x-2">
          <MongoDBIcon
            className={`h-8 inline-block ${blurStyle} motion-delay-800`}
          />
          <h2
            className={`text-2xl font-medium font-serif ${blurStyle} motion-delay-800`}
          >
            MongoDB
          </h2>
        </div>
      </section>
    </div>
  );
};
