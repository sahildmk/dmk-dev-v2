import Image from "next/image";
import Link from "next/link";
import ClaudeIcon from "../../components/icons/claude-icon";
import ConductorIcon from "../../components/icons/conductor.png";
import SlackIcon from "../../components/icons/slack-icon";
import TesslIcon from "../../components/icons/tessl-icon";
import XIcon from "../../components/icons/x-icon";
import LinkedInIcon from "../../components/icons/linkedin-icon";
import YouTubeIcon from "../../components/icons/youtube-icon";

export const metadata = {
  title: "I've stopped hand writing code (and I'm not the only one)",
};

const blurStyle =
  "motion-opacity-in-[5%] motion-blur-in-[5px] motion-duration-[2s] motion-ease";

export default function StoppedHandWritingCode() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-between p-8 text-stone-400 bg-stone-900 relative">
      <div className="w-full md:w-xl lg:w-3xl sm:mt-40 sm:space-y-10 space-y-10">
        <Link
          href="/"
          className={`text-sm text-stone-500 hover:text-stone-300 transition-colors duration-300 mb-6 block no-underline ${blurStyle} motion-delay-100`}
        >
          ← Back
        </Link>
        <section className="text-stone-300">
          <h1
            className={`text-3xl font-semibold ${blurStyle} motion-delay-200 font-serif`}
          >
            I&apos;ve stopped hand writing code
          </h1>
          <p
            className={`text-xl font-serif text-stone-500 mt-1 ${blurStyle} motion-delay-250`}
          >
            And I&apos;m not the only one
          </p>
        </section>
        <section className={`space-y-4 ${blurStyle} motion-delay-400`}>
          <p>
            This talk is about how I&apos;ve basically{" "}
            <span className="text-stone-200">stopped hand writing code</span>,
            gone all‑in on{" "}
            <span className="text-stone-200">AI‑native workflows</span>, and
            what that&apos;s done to our{" "}
            <span className="text-stone-200">velocity</span> and{" "}
            <span className="text-stone-200">quality</span>.
          </p>
          <p>I explain:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              How we measure developer velocity (commits, change failure rate,
              PR/Linear lead times) and how we{" "}
              <span className="text-stone-200">
                shipped more in three weeks of February than almost all of
                September and October
              </span>{" "}
              while quality improved.
            </li>
            <li>
              The workflow shift: agents handle planning and execution, I focus
              on review, using tight{" "}
              <span className="text-stone-200">feedback loops</span> (tests,
              lint, type checks, logs, browser, MCP).
            </li>
            <li>
              How{" "}
              <span className="text-stone-200">agent docs and skills</span>{" "}
              encode step‑by‑step playbooks so agents can debug, simplify code,
              and verify their own work.
            </li>
            <li>
              <span className="text-stone-200">Parallelization</span> with git
              worktrees,{" "}
              <span className="text-stone-200">Conductor</span>, and cloud
              agents so multiple branches and tasks run in parallel while I just
              review and make decisions.
            </li>
          </ul>
          <p>
            Core message: offload the mechanical coding to agents, keep humans
            on direction, constraints, and review, and you can ship much faster
            without sacrificing quality.
          </p>
        </section>
        <section className="space-y-4">
          <h2
            className={`text-xl font-semibold text-stone-300 font-serif ${blurStyle} motion-delay-550`}
          >
            Links
          </h2>
          <ul className="flex flex-col items-start space-y-3">
            <li className={`${blurStyle} motion-delay-600`}>
              <a
                href="https://www.youtube.com/watch?v=NM0LCfjISfY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-200 transition-all duration-300 inline-flex items-center gap-2 underline decoration-1"
              >
                <YouTubeIcon className="size-4 shrink-0" />
                Watch on YouTube
              </a>
            </li>
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
              <ul className="flex flex-col items-start space-y-2 mt-2 ml-6">
                <li>
                  <a
                    href="https://tessl.io/registry/skills/github/getsentry/skills/code-simplifier"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-stone-200 transition-all duration-300 inline-flex items-center gap-2 underline decoration-1 text-sm"
                  >
                    code-simplifier
                  </a>
                </li>
                <li>
                  <a
                    href="https://tessl.io/registry/skills/github/getsentry/skills/code-review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-stone-200 transition-all duration-300 inline-flex items-center gap-2 underline decoration-1 text-sm"
                  >
                    code-review
                  </a>
                </li>
                <li>
                  <a
                    href="https://tessl.io/registry/sahildmk/pr-comment-resolver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-stone-200 transition-all duration-300 inline-flex items-center gap-2 underline decoration-1 text-sm"
                  >
                    pr-comment-resolver
                  </a>
                </li>
              </ul>
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
