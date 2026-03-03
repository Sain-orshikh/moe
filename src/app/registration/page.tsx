export default function RegistrationPage() {
  return (
    <div className="bg-background-light font-sans antialiased min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-neutral-border bg-white backdrop-blur-md shadow-sm dark:border-slate-800 dark:bg-background-dark/95">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-neutral-text-main dark:text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-meo-blue text-white shadow-md">
              <span className="material-symbols-outlined text-2xl">account_balance</span>
            </div>
            <div className="flex flex-col">
              <span className="mb-0.5 text-xs leading-none font-semibold tracking-widest text-meo-red uppercase">
                Official Portal
              </span>
              <h1 className="font-display text-lg leading-none font-bold tracking-tight text-meo-blue dark:text-white">
                Mongolia Economic Olympiad
              </h1>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              className="text-sm font-medium text-neutral-text-sub transition-colors hover:text-meo-blue dark:text-slate-400 dark:hover:text-white"
              href="#"
            >
              Regulations
            </a>
            <a
              className="text-sm font-medium text-neutral-text-sub transition-colors hover:text-meo-blue dark:text-slate-400 dark:hover:text-white"
              href="#"
            >
              Syllabus
            </a>
            <a
              className="text-sm font-medium text-neutral-text-sub transition-colors hover:text-meo-blue dark:text-slate-400 dark:hover:text-white"
              href="#"
            >
              Archive
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden h-9 items-center justify-center rounded border border-neutral-border px-5 text-sm font-semibold text-meo-blue transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800 md:flex">
              Log In
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-grow flex-col items-center justify-start bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] px-4 py-12 sm:px-6">
        <div className="w-full max-w-[780px]">
          <div className="mb-8 text-center">
            <h2 className="font-display mb-2 text-3xl font-bold text-meo-blue dark:text-white">Mongolia Economic Olympiad 2024</h2>
            <p className="text-lg font-medium text-neutral-text-sub dark:text-slate-400">Student Registration Form</p>
          </div>

          <div className="relative overflow-hidden rounded-lg border-t-4 border-meo-blue bg-white shadow-card dark:border-meo-blue dark:bg-slate-900">
            <div className="bg-white px-8 pt-8 pb-4 dark:bg-slate-800/50">
              <div className="relative mb-2 flex items-center justify-between">
                <div className="relative z-10 flex w-1/3 flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-meo-blue text-sm font-bold text-white shadow-md ring-4 ring-white dark:ring-slate-900">
                    1
                  </div>
                  <span className="mt-2 text-xs font-bold tracking-wider text-meo-blue uppercase dark:text-white">Personal</span>
                </div>

                <div className="relative z-10 flex w-1/3 flex-col items-center opacity-50">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-sm font-bold text-slate-400 dark:border-slate-600 dark:bg-slate-800">
                    2
                  </div>
                  <span className="mt-2 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">School</span>
                </div>

                <div className="relative z-10 flex w-1/3 flex-col items-center opacity-50">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-sm font-bold text-slate-400 dark:border-slate-600 dark:bg-slate-800">
                    3
                  </div>
                  <span className="mt-2 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">Review</span>
                </div>

                <div className="absolute top-12 left-0 -z-0 h-0.5 w-full bg-slate-200 px-16 dark:bg-slate-700">
                  <div className="h-full w-1/6 bg-meo-blue" />
                  <div className="absolute top-full left-[16%] mt-0.5 h-0.5 w-[10%] bg-meo-gold" />
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-neutral-border dark:bg-slate-800" />

            <div className="p-8 sm:p-10">
              <form action="#" className="space-y-10" method="POST">
                <section>
                  <div className="mb-6 flex items-end justify-between border-b border-meo-gold pb-2">
                    <h3 className="font-display flex items-center gap-2 text-lg font-bold text-meo-blue dark:text-white">
                      <span className="material-symbols-outlined text-meo-blue">badge</span>
                      Candidate Information
                    </h3>
                    <span className="text-xs font-medium text-meo-red">* Required Fields</span>
                  </div>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div className="col-span-1">
                      <label className="form-label-meo" htmlFor="first-name">
                        First Name <span className="text-meo-red">*</span>
                      </label>
                      <input
                        autoComplete="given-name"
                        className="form-input-meo"
                        id="first-name"
                        name="first-name"
                        placeholder="Enter your first name"
                        type="text"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="form-label-meo" htmlFor="last-name">
                        Last Name <span className="text-meo-red">*</span>
                      </label>
                      <input
                        autoComplete="family-name"
                        className="form-input-meo"
                        id="last-name"
                        name="last-name"
                        placeholder="Enter your last name"
                        type="text"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="form-label-meo" htmlFor="dob">
                        Date of Birth <span className="text-meo-red">*</span>
                      </label>
                      <input className="form-input-meo" id="dob" name="dob" type="date" />
                    </div>

                    <div className="col-span-1">
                      <label className="form-label-meo" htmlFor="gender">
                        Gender <span className="text-meo-red">*</span>
                      </label>
                      <div className="relative">
                        <select className="form-input-meo appearance-none" defaultValue="" id="gender" name="gender">
                          <option disabled value="">
                            Select gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Prefer not to say</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-text-sub dark:text-slate-400">
                          <span className="material-symbols-outlined text-sm">expand_more</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1 sm:col-span-2">
                      <label className="form-label-meo" htmlFor="email">
                        Email Address <span className="text-meo-red">*</span>
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-text-sub dark:text-slate-400">
                          <span className="material-symbols-outlined text-lg">mail</span>
                        </div>
                        <input
                          autoComplete="email"
                          className="form-input-meo pl-11"
                          id="email"
                          name="email"
                          placeholder="student@example.com"
                          type="email"
                        />
                      </div>
                      <p className="mt-1 text-xs italic text-neutral-text-sub dark:text-slate-500">
                        Official communication will be sent to this address.
                      </p>
                    </div>

                    <div className="col-span-1 sm:col-span-2">
                      <label className="form-label-meo" htmlFor="phone">
                        Phone Number <span className="text-meo-red">*</span>
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-text-sub dark:text-slate-400">
                          <span className="material-symbols-outlined text-lg">call</span>
                        </div>
                        <input
                          autoComplete="tel"
                          className="form-input-meo pl-11"
                          id="phone"
                          name="phone"
                          placeholder="+976 9911 2233"
                          type="tel"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="mb-6 border-b border-meo-gold pb-2">
                    <h3 className="font-display flex items-center gap-2 text-lg font-bold text-meo-blue dark:text-white">
                      <span className="material-symbols-outlined text-meo-blue">school</span>
                      Academic Affiliation
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                    <div className="col-span-1 sm:col-span-2">
                      <label className="form-label-meo" htmlFor="school-name">
                        Official School Name <span className="text-meo-red">*</span>
                      </label>
                      <input
                        className="form-input-meo"
                        id="school-name"
                        name="school-name"
                        placeholder="e.g. Ulaanbaatar High School No. 1"
                        type="text"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="form-label-meo" htmlFor="province">
                        Region / Province <span className="text-meo-red">*</span>
                      </label>
                      <div className="relative">
                        <select className="form-input-meo appearance-none" defaultValue="" id="province" name="province">
                          <option disabled value="">
                            Select jurisdiction
                          </option>
                          <option value="ulaanbaatar">Ulaanbaatar</option>
                          <option value="arkhangai">Arkhangai</option>
                          <option value="bayankhongor">Bayankhongor</option>
                          <option value="darkhan">Darkhan-Uul</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-text-sub dark:text-slate-400">
                          <span className="material-symbols-outlined text-sm">expand_more</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <label className="form-label-meo" htmlFor="grade">
                        Current Grade <span className="text-meo-red">*</span>
                      </label>
                      <div className="relative">
                        <select className="form-input-meo appearance-none" defaultValue="" id="grade" name="grade">
                          <option disabled value="">
                            Select grade level
                          </option>
                          <option value="10">Grade 10</option>
                          <option value="11">Grade 11</option>
                          <option value="12">Grade 12</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-text-sub dark:text-slate-400">
                          <span className="material-symbols-outlined text-sm">expand_more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="mb-6 border-b border-meo-gold pb-2">
                    <h3 className="font-display flex items-center gap-2 text-lg font-bold text-meo-blue dark:text-white">
                      <span className="material-symbols-outlined text-meo-blue">emoji_events</span>
                      Olympiad Category
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <label className="form-label-meo">
                      Select Examination Track <span className="text-meo-red">*</span>
                    </label>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <label className="group relative cursor-pointer">
                        <input defaultChecked className="peer sr-only" name="category" type="radio" value="macro" />
                        <div className="relative rounded border border-neutral-border bg-white p-4 shadow-sm transition-all duration-200 hover:border-gray-400 peer-checked:border-meo-blue peer-checked:ring-1 peer-checked:ring-meo-blue dark:border-slate-700 dark:bg-slate-800 dark:peer-checked:border-blue-400">
                          <div className="flex items-start justify-between">
                            <div className="flex flex-col">
                              <span className="mb-1 block text-sm font-bold tracking-wide text-meo-blue uppercase dark:text-white">
                                Macroeconomics
                              </span>
                              <span className="text-xs leading-relaxed text-neutral-text-sub dark:text-slate-400">
                                National curriculum standard. Theory and policy analysis focus.
                              </span>
                            </div>
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 group-hover:border-gray-400 peer-checked:border-meo-blue">
                              <div className="h-2.5 w-2.5 rounded-full bg-meo-blue opacity-0 transition-opacity peer-checked:opacity-100" />
                            </div>
                          </div>
                          <div className="absolute top-0 bottom-0 left-0 w-1 rounded-l bg-meo-blue opacity-0 transition-opacity peer-checked:opacity-100" />
                        </div>
                      </label>

                      <label className="group relative cursor-pointer">
                        <input className="peer sr-only" name="category" type="radio" value="finance" />
                        <div className="relative rounded border border-neutral-border bg-white p-4 shadow-sm transition-all duration-200 hover:border-gray-400 peer-checked:border-meo-blue peer-checked:ring-1 peer-checked:ring-meo-blue dark:border-slate-700 dark:bg-slate-800 dark:peer-checked:border-blue-400">
                          <div className="flex items-start justify-between">
                            <div className="flex flex-col">
                              <span className="mb-1 block text-sm font-bold tracking-wide text-meo-blue uppercase dark:text-white">
                                Financial Literacy
                              </span>
                              <span className="text-xs leading-relaxed text-neutral-text-sub dark:text-slate-400">
                                Applied banking and personal finance management modules.
                              </span>
                            </div>
                            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 group-hover:border-gray-400 peer-checked:border-meo-blue">
                              <div className="h-2.5 w-2.5 rounded-full bg-meo-blue opacity-0 transition-opacity peer-checked:opacity-100" />
                            </div>
                          </div>
                          <div className="absolute top-0 bottom-0 left-0 w-1 rounded-l bg-meo-blue opacity-0 transition-opacity peer-checked:opacity-100" />
                        </div>
                      </label>
                    </div>
                  </div>
                </section>

                <div className="mt-4 border-t border-neutral-border pt-8 dark:border-slate-800">
                  <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
                    <button
                      className="w-full rounded border border-meo-blue px-6 py-3 text-sm font-bold text-meo-blue transition-colors hover:bg-blue-50 focus:ring-2 focus:ring-meo-blue focus:ring-offset-2 focus:outline-none sm:w-auto"
                      type="button"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex w-full items-center justify-center gap-2 rounded bg-meo-blue px-8 py-3 text-sm font-bold text-white shadow transition-all hover:bg-[#0E2F6F] focus:ring-2 focus:ring-meo-blue focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-slate-900 sm:w-auto"
                      type="submit"
                    >
                      <span>Proceed to Verification</span>
                      <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                    </button>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-2 rounded border border-slate-100 bg-slate-50 py-2 text-xs text-neutral-text-sub dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-500">
                    <span className="material-symbols-outlined text-sm text-meo-red">lock</span>
                    <span>Your data is encrypted and securely processed according to national standards.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-text-sub dark:text-slate-400">
              Encountering technical difficulties?{" "}
              <a className="font-bold text-meo-blue transition-colors hover:text-meo-red hover:underline dark:text-blue-400" href="#">
                Contact Secretariat Support
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-neutral-border bg-white py-8 dark:border-slate-800 dark:bg-background-dark">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-xl text-meo-blue">verified_user</span>
            <p className="text-xs font-medium text-neutral-text-sub dark:text-slate-500">
              © 2024 Mongolia Economic Olympiad. Authorized by the Ministry of Education.
            </p>
          </div>

          <div className="flex gap-6">
            <a className="text-neutral-text-sub transition-colors hover:text-meo-blue dark:text-slate-500 dark:hover:text-white" href="#">
              <span className="sr-only">Facebook</span>
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  fillRule="evenodd"
                />
              </svg>
            </a>

            <a className="text-neutral-text-sub transition-colors hover:text-meo-blue dark:text-slate-500 dark:hover:text-white" href="#">
              <span className="sr-only">Twitter</span>
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
