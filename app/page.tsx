import MongoDB from "./components/mongo";

const blurStyle =
  "motion-opacity-in-[10%] motion-blur-in-[5px] motion-duration-[2s]";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6  text-stone-300 bg-stone-900">
      <div className="md:w-xl lg:w-3xl mt-30 space-y-10">
        <section className="text-stone-300">
          <h1
            className={`text-3xl font-bold motion-preset-fade motion-duration-2000 motion-delay-200 font-serif`}
          >
            Sahil Deshmukh
          </h1>
          <div className="mt-2 font-light">
            <span className={`${blurStyle} motion-delay-300`}>
              Software Engineer at
            </span>
            <span className={`${blurStyle} motion-delay-400`}>
              <MongoDB className={`size-6 inline-block `} />
              <span className="">MongoDB</span>
            </span>
          </div>
        </section>
        <section className="">
          <p className={`${blurStyle} motion-delay-500`}>
            I love solving problems and finding ways to make people&apos;s lives
            just a little easier. I have a large tank of creative ideas and a
            deep interest in many areas such as solution architecture, backend
            and frontend design, UI/UX, and security.
          </p>
        </section>
      </div>
    </main>
  );
}
