export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-24 bg-gradient-to-tr from-neutral-900 to-neutral-950 via-neutral-800 sm:via-65% via-60%">
      <section className="bg-neutral-900/50 rounded-lg sm:rounded-xl w-full sm:w-[500px] p-5 sm:p-8 dark:text-neutral-400 backdrop-blur-xl border dark:border-neutral-600/40">
        <h1 className="text-lg sm:text-2xl font-medium">Sahil Deshmukh</h1>
        <p className="italic text-sm sm:text-base mb-5">Software Engineer</p>
        <p className="text-sm"></p>
      </section>
      <footer className="text-neutral-400 text-xs text-center sm:text-sm border-t dark:border-neutral-600/40 w-full pt-2 flex justify-between">
        <div>Build beautifully and passionately</div>
        <div>{new Date().getFullYear()}</div>
      </footer>
    </main>
  );
}
