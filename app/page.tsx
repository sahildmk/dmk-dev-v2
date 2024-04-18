import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:pt-12 text-neutral-400">
      <div className=" transition-all duration-300">
        <CardBox className="md:w-[700px] lg:w-[800px] mb-2">
          <h1 className="text-lg sm:text-2xl font-medium">Sahil Deshmukh</h1>
          <p className="italic text-sm sm:text-base mb-5">Software Engineer</p>
          <p className="text-sm">
            I love solving problems and finding ways to make people&apos;s lives
            just a little easier. I have a large tank of creative ideas and a
            deep interest in many areas such as solution architecture, backend
            and frontend design, UI/UX, and security.
          </p>
        </CardBox>
        {/* <section className="flex space-x-2">
          <CardBox>Test section</CardBox>
          <CardBox>Test 2 section</CardBox>
        </section> */}
      </div>
      <footer className="text-neutral-400 text-xs text-center sm:text-sm border-t dark:border-neutral-600/40 w-full pt-2 px-1 flex justify-between">
        <div>Build beautifully and passionately</div>
        <div>{new Date().getFullYear()}</div>
      </footer>
    </main>
  );
}

const CardBox = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "animate-slide-in bg-neutral-900/30 rounded-lg sm:rounded-xl w-full  p-5 sm:p-8  backdrop-blur-xl border dark:border-neutral-600/40",
        className
      )}
    >
      {children}
    </section>
  );
};
