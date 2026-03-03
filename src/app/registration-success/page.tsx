export default function RegistrationSuccessPage() {
  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex flex-col dark:bg-background-dark dark:text-slate-100">
      <header className="w-full border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-[#1a2332]">
        <div className="h-1.5 w-full bg-red-600" />
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="size-8 text-primary dark:text-blue-400">
              <svg className="h-full w-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h1 className="hidden text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:block">
              Mongolia Economic Olympiad
            </h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-blue-400" href="#">
              Home
            </a>
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-blue-400" href="#">
              Rules
            </a>
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-blue-400" href="#">
              Contact
            </a>
          </nav>

          <button className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-blue-800">
            Login
          </button>
        </div>
      </header>

      <main className="flex flex-grow flex-col items-center justify-center p-6 sm:p-12">
        <div className="animate-fade-in-up flex w-full max-w-[640px] flex-col items-center">
          <div className="mb-8 flex items-center justify-center rounded-full bg-blue-50 p-6 dark:bg-primary/10">
            <span className="material-symbols-outlined text-6xl text-primary dark:text-blue-400 sm:text-7xl">check_circle</span>
          </div>

          <div className="mb-10 space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Registration Received</h2>
            <p className="mx-auto max-w-md text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Your application is currently being verified by the Organizing Committee.
            </p>
          </div>

          <div className="mb-8 flex w-full flex-col items-center justify-between gap-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a2332] sm:flex-row">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <p className="text-sm font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">Registration ID</p>
              <p className="font-mono text-2xl font-bold tracking-wider text-primary dark:text-blue-400">MEO-2024-8392</p>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">Keep this ID safe for future reference.</p>
            </div>

            <button className="group flex items-center gap-2 rounded-lg border border-transparent bg-slate-100 px-4 py-2.5 text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-200 active:scale-95 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-700">
              <span className="text-sm font-semibold whitespace-nowrap">Copy ID</span>
              <span className="material-symbols-outlined text-lg transition-colors group-hover:text-primary dark:group-hover:text-blue-400">
                content_copy
              </span>
            </button>
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              className="w-full rounded-lg bg-primary px-8 py-3 text-center font-bold text-white shadow-lg shadow-blue-900/10 transition-colors hover:bg-blue-800 sm:w-auto"
              href="#"
            >
              Return to Home
            </a>
            <a
              className="w-full rounded-lg border border-slate-200 bg-white px-8 py-3 text-center font-bold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-[#1a2332] dark:text-slate-200 dark:hover:bg-slate-800 sm:w-auto"
              href="#"
            >
              View Rules
            </a>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-[#1a2332]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 Mongolia Economic Olympiad. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-blue-400" href="#">
              Privacy Policy
            </a>
            <a className="text-sm text-slate-500 transition-colors hover:text-primary dark:text-slate-400 dark:hover:text-blue-400" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
