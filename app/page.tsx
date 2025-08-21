import MongoDB from "./components/mongo";

const blurStyle =
  "motion-opacity-in-[5%] motion-blur-in-[5px] motion-duration-[2s] motion-ease-in-out";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-between p-8 text-stone-300 bg-stone-900">
      <div className="md:w-xl lg:w-3xl mt-40 sm:space-y-10 space-y-10">
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
            My name is <span className=" font-semibold">Sahil</span>.
          </p>
          <div className={`${blurStyle} motion-delay-700`}>
            <span>I&apos;m currently building </span>
            <p className="inline-block motion-opacity-loop-60 motion-duration-[3s] motion-ease-in-out">
              <a
                href="https://www.mongodb.com/products/tools/relational-migrator"
                target="_blank"
                rel="noopener noreferrer"
              >
                some cool things
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
                <MongoDB
                  className={`h-6 mr-0.5 inline-block group-hover:mr-1 motion-rotate-loop-12/mirror motion-duration-[3s] motion-ease-in-out group-hover:scale-120 transition-all duration-300`}
                />
                <span className="group-hover:scale-105 font-semibold inline-block transition-all duration-300 ">
                  MongoDB.
                </span>
              </a>
            </p>
          </div>
          <p className={`${blurStyle} motion-delay-800`}>
            I love solving meaningful problems. I also love software. Naturally,
            I keep myself busy by solving meaningful problems with software.
          </p>
          <p className={`${blurStyle} motion-delay-900`}>
            I also love learning from all the wonderfully smart and talented
            people around me, and finding ways to share all the cool things
            I&apos;ve learnt (I&apos;m working on being better at this).
          </p>
        </section>
      </div>
    </main>
  );
}

const Timeline = () => {
  return (
    <div>
      <section>
        <div className="flex items-center space-x-2">
          <MongoDB
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
