import Image from "next/image";
import Link from "next/link";
import ClaudeIcon from "../components/icons/claude-icon";
import ConductorIcon from "../components/icons/conductor.png";
import SlackIcon from "../components/icons/slack-icon";
import TesslIcon from "../components/icons/tessl-icon";
import XIcon from "../components/icons/x-icon";
import LinkedInIcon from "../components/icons/linkedin-icon";

export const metadata = {
  title: "London JS 2026-02-25",
};

const blurStyle =
  "motion-opacity-in-[5%] motion-blur-in-[5px] motion-duration-[2s] motion-ease-in-out";

export default function LondonJS() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-between p-8 text-stone-400 bg-stone-900 relative">
      <div className="md:w-xl lg:w-3xl mt-40 sm:space-y-10 space-y-10">
        <Link
          href="/"
          className={`text-sm text-stone-500 hover:text-stone-300 transition-colors duration-300 mb-6 block underline decoration-1 ${blurStyle} motion-delay-100`}
        >
          ← Back
        </Link>
        <section className="text-stone-300">
          <h1
            className={`text-3xl font-bold ${blurStyle} motion-delay-200 font-serif`}
          >
            London JS
          </h1>
          <p className={`text-stone-400 mt-2 ${blurStyle} motion-delay-300`}>
            25 February 2026
          </p>
        </section>
        <section className="space-y-4">
          <p className={`${blurStyle} motion-delay-500`}>
            Hope you enjoyed the talk!
          </p>
        </section>
        <section className="space-y-4">
          <h2
            className={`text-xl font-semibold text-stone-300 font-serif ${blurStyle} motion-delay-600`}
          >
            🔗 Links
          </h2>
          <ul className="flex flex-col items-start space-y-3">
            <li className={`${blurStyle} motion-delay-700`}>
              <a
                href="https://tessl.io/registry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 transition-all duration-300 inline-flex items-center gap-2 underline decoration-1"
              >
                <TesslIcon className="size-4 shrink-0" />
                Tessl Registry
              </a>
            </li>
            <li className={`${blurStyle} motion-delay-800`}>
              <a
                href="https://www.conductor.build/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 transition-all duration-300 inline-flex items-center gap-2 underline decoration-1"
              >
                <Image
                  src={ConductorIcon}
                  alt=""
                  className="size-4 shrink-0 object-contain"
                  width={16}
                  height={16}
                />
                Conductor
              </a>
            </li>
            <li className={`${blurStyle} motion-delay-900`}>
              <a
                href="https://code.claude.com/docs/en/claude-code-on-the-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 transition-all duration-300 inline-flex items-center gap-2 underline decoration-1"
              >
                <ClaudeIcon className="size-4 shrink-0" />
                Claude Code Web Agents
              </a>
            </li>
            <li className={`${blurStyle} motion-delay-[950ms]`}>
              <a
                href="https://code.claude.com/docs/en/slack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 transition-all duration-300 inline-flex items-center gap-2 underline decoration-1"
              >
                <SlackIcon className="size-4 shrink-0" />
                Claude Code in Slack
              </a>
            </li>
          </ul>
        </section>
        <div className={`flex gap-4 ${blurStyle} motion-delay-1000`}>
          <a
            href="https://x.com/sahildmk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-200 transition-colors duration-300 underline decoration-1"
          >
            <XIcon className="size-4" />
          </a>
          <a
            href="https://linkedin.com/in/sahildmk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-stone-200 transition-colors duration-300 underline decoration-1"
          >
            <LinkedInIcon className="size-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
