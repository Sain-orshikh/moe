export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="bg-accent text-center text-xs font-bold tracking-widest text-white uppercase shadow-sm md:text-sm z-50 py-2 px-4">
        National Academic Competition • Mongolia Economic Olympiad 2026
      </div>

      <header className="sticky top-0 z-40 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light bg-surface-light/95 px-4 py-4 shadow-sm backdrop-blur lg:px-40">
        <div className="flex items-center gap-4 text-primary">
          <div className="flex size-10 items-center justify-center rounded bg-primary text-white shadow-md">
            <span className="material-symbols-outlined">school</span>
          </div>
          <h2 className="text-xl leading-tight font-bold tracking-tight text-primary uppercase">
            Mongolia Economic Olympiad
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-8 text-sm font-semibold text-text-main md:flex">
            <a className="hover:border-primary hover:text-primary border-b-2 border-transparent py-1 transition-colors" href="#">
              About
            </a>
            <a className="hover:border-primary hover:text-primary border-b-2 border-transparent py-1 transition-colors" href="#">
              Rules
            </a>
            <a className="hover:border-primary hover:text-primary border-b-2 border-transparent py-1 transition-colors" href="#">
              Contact
            </a>
          </nav>
          <div className="hidden h-6 w-px bg-border-light md:block" />
          <button className="flex h-9 items-center justify-center overflow-hidden rounded-md border border-border-light bg-background-light px-4 text-xs font-bold tracking-wide text-text-main transition-all hover:border-primary hover:bg-white">
            <span className="truncate">MNG | ENG</span>
          </button>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        <section className="w-full border-b border-border-light bg-surface-light px-4 py-16 lg:px-40 lg:py-24">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 flex flex-col gap-8 lg:order-1">
              <div className="flex flex-col gap-6 text-left">
                <div className="relative">
                  <h1 className="text-5xl leading-[1.1] font-black tracking-tight text-primary lg:text-6xl">
                    Mongolia Economic <br /> Olympiad 2026
                  </h1>
                  <div className="mt-6 mb-2 h-1 w-32 bg-secondary" />
                </div>
                <p className="max-w-xl text-lg leading-relaxed font-normal text-text-muted lg:text-xl">
                  The premier national-level academic challenge fostering economic literacy, critical thinking, and
                  advanced problem-solving skills among high school students across Mongolia.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-bold tracking-wide text-white uppercase shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90">
                  Register Now
                </button>
                <button className="flex h-12 items-center justify-center rounded-md border-2 border-primary bg-transparent px-8 text-base font-bold tracking-wide text-primary uppercase transition-colors hover:bg-primary hover:text-white">
                  Download Syllabus
                </button>
              </div>
              <div className="mt-6 flex items-center gap-12">
                <div>
                  <p className="text-3xl font-black text-primary">500+</p>
                  <p className="text-sm font-semibold tracking-wider text-text-muted uppercase">Students</p>
                </div>
                <div className="h-10 w-px bg-border-light" />
                <div>
                  <p className="text-3xl font-black text-primary">20+</p>
                  <p className="text-sm font-semibold tracking-wider text-text-muted uppercase">Schools</p>
                </div>
                <div className="h-10 w-px bg-border-light" />
                <div>
                  <p className="text-3xl font-black text-primary">3</p>
                  <p className="text-sm font-semibold tracking-wider text-text-muted uppercase">Rounds</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -inset-2 rotate-2 transform rounded-lg bg-gradient-to-tr from-primary/10 to-secondary/10" />
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border-4 border-white bg-gray-100 shadow-2xl">
                <img
                  alt="Students taking exam"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK5KRSopLCqbg4gJYiewKCKGHzCUMYuzw-k7UFb21W8NQJRSI_RhcthSrQt6nUOhzVEfP3RxJVcSG5MrCKqT8CFIL8R86YYtfLAyyQYzYGTgzCQtz3oLnKIEV6LCXC1rtxhb-uCjvp3SEmFdvvKjp_ZvVnZCBgI_Cs3AuZKKPh_ATC9lB1CcbvPYI5NOB1XJvuEOo-UL6iTqtvTjef8jLiB7Jwj8BGKYSbAeqAgoMl4v63nmj10mCfKLHXnx5i5SJmFIFFxcj4BLc"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>
              <div className="absolute -right-6 -bottom-6 hidden max-w-[200px] rounded-lg border border-border-light bg-white p-5 shadow-xl lg:block">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-2xl">verified</span>
                    <span className="text-xs font-bold tracking-wider uppercase">Verified</span>
                  </div>
                  <p className="text-sm leading-tight font-bold text-text-main">
                    Officially recognized by Ministry of Education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-background-light px-4 py-20 lg:px-40">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary uppercase md:text-4xl">
                Important Dates &amp; Criteria
              </h2>
              <div className="h-1 w-24 rounded-full bg-secondary" />
              <p className="mt-2 max-w-2xl text-lg text-text-muted">
                Mark your calendars. Strict adherence to deadlines is mandatory for participation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="group relative flex flex-col gap-5 rounded-lg border-2 border-primary bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-2 py-1 text-[10px] font-bold text-white uppercase">
                  Closing Soon
                </div>
                <div className="flex size-14 items-center justify-center rounded-full bg-blue-50 text-primary">
                  <span className="material-symbols-outlined text-3xl">calendar_month</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-primary uppercase">Registration</h3>
                  <p className="text-base font-bold text-accent">October 15, 2026</p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    Final deadline for submission of application and fees.
                  </p>
                </div>
              </div>

              <div className="group relative flex flex-col gap-5 rounded-lg border border-border-light bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <div className="flex size-14 items-center justify-center rounded-full bg-blue-50 text-primary">
                  <span className="material-symbols-outlined text-3xl">edit_document</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-primary uppercase">Preliminaries</h3>
                  <p className="text-base font-bold text-text-main">November 10, 2026</p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    National online examination covering core economics.
                  </p>
                </div>
              </div>

              <div className="group relative flex flex-col gap-5 rounded-lg border border-border-light bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <div className="flex size-14 items-center justify-center rounded-full bg-blue-50 text-primary">
                  <span className="material-symbols-outlined text-3xl">emoji_events</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-primary uppercase">Final Round</h3>
                  <p className="text-base font-bold text-text-main">December 15, 2026</p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    In-person case study &amp; quiz bowl in Ulaanbaatar.
                  </p>
                </div>
              </div>

              <div className="group relative flex flex-col gap-5 rounded-lg border border-border-light bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                <div className="flex size-14 items-center justify-center rounded-full bg-blue-50 text-primary">
                  <span className="material-symbols-outlined text-3xl">school</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-primary uppercase">Eligibility</h3>
                  <p className="text-base font-bold text-secondary">Grades 9-12</p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    Open to all high school students with valid student ID.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full border-y border-border-light bg-white py-12">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-8 px-4 opacity-80 md:flex-row md:gap-20 lg:px-40">
            <p className="text-xs font-bold tracking-widest text-text-muted uppercase">Supported By</p>
            <div className="flex flex-wrap items-center justify-center gap-12 grayscale transition-all duration-500 hover:grayscale-0 md:gap-16">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-primary">account_balance</span>
                <span className="text-lg font-bold text-text-main">National Bank</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-primary">corporate_fare</span>
                <span className="text-lg font-bold text-text-main">EconInstitute</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-primary">local_library</span>
                <span className="text-lg font-bold text-text-main">University of Finance</span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden border-t-2 border-accent bg-primary">
          <div className="absolute inset-0 opacity-10 [background-image:url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-24 text-center lg:px-40">
            <div className="flex flex-col items-center gap-8">
              <div className="flex size-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                <span className="material-symbols-outlined text-4xl text-secondary">workspace_premium</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Ready to Compete at the National Level?
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed font-light text-blue-100">
                Join the brightest young minds in Mongolia. Validate your economic knowledge, win scholarships, and
                gain prestigious national recognition.
              </p>
              <div className="mt-6 flex flex-col gap-6 sm:flex-row">
                <button className="flex h-14 items-center justify-center rounded-md bg-secondary px-10 text-lg font-bold tracking-wide text-primary uppercase shadow-lg transition-transform hover:-translate-y-1 hover:bg-secondary/90">
                  Register Now
                </button>
                <button className="flex h-14 items-center justify-center rounded-md border-2 border-white/30 bg-transparent px-10 text-lg font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10">
                  View Past Papers
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-light bg-surface-light pt-16 pb-12">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 lg:px-40">
          <div className="flex flex-col justify-between gap-12 md:flex-row">
            <div className="flex max-w-sm flex-col gap-6">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-3xl">school</span>
                <span className="text-xl font-bold tracking-tight text-text-main uppercase">Mongolia Economic Olympiad</span>
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                Empowering the next generation of economists and leaders through academic excellence and competition.
                Established 2026.
              </p>
            </div>

            <div className="flex flex-wrap gap-12 md:gap-24">
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-bold tracking-wider text-primary uppercase">Resources</h4>
                <a className="text-sm font-medium text-text-muted transition-colors hover:text-accent" href="#">
                  Syllabus
                </a>
                <a className="text-sm font-medium text-text-muted transition-colors hover:text-accent" href="#">
                  Past Papers
                </a>
                <a className="text-sm font-medium text-text-muted transition-colors hover:text-accent" href="#">
                  Rules &amp; Regulations
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-bold tracking-wider text-primary uppercase">Contact</h4>
                <a className="text-sm font-medium text-text-muted transition-colors hover:text-accent" href="#">
                  info@mneconomics.org
                </a>
                <a className="text-sm font-medium text-text-muted transition-colors hover:text-accent" href="#">
                  +976 11 324567
                </a>
                <address className="text-sm not-italic font-medium text-text-muted">Ulaanbaatar, Mongolia</address>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-6 border-t border-border-light pt-8 md:flex-row">
            <p className="text-sm font-medium text-text-muted">© 2026 Mongolia Economic Olympiad. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-text-muted transition-colors hover:text-primary" href="#">
                <img
                  alt="Facebook"
                  className="h-5 w-5 opacity-60 filter hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6fuaFWqveEY_n_2EiZFVdukNKCvdAc5QBcZd8KN4G85EZyJQNlXZ2Y6bJOSyO206dNoLmcvU7pYmqs8w4a2HK_7ejbpd4jDrkJecOBCN1cUKIimNr49cYXYYUhPbQHEsaWovzsalHnD6SkDPdaDukxyysDVLQLM77iUJG7VztS2pryeHqgQRo2-pUXWggd4IiNzWb6nuvsyeT5Ga6eYlAd-fNpy9cpxkL4MbJgzx-APbQX1iZmW-9a6P8aN8z6g4yWnRLeRCIHv0"
                />
              </a>
              <a className="text-text-muted transition-colors hover:text-primary" href="#">
                <img
                  alt="Instagram"
                  className="h-5 w-5 opacity-60 filter hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjjw8FKRwIk5VzQaLFM6ZvkpQdfTI1pfDXvJktkbQC8i7jOw4AhC5SB_GhZ17XrFVj-bue7MBbZsL2ntEuNYLRau2C_AWiqRQNNGWWz-6UO4eZSP572c9jKWDqU_Sh6Bu6U8yXcpEWSTmIeR4zJ_8F_X-K4Q8dXtrfKrfbkEMoc4Ko1CY1t3IjH6lf5rswT93CcqgZgFswwqWd67L0JpB8BirMCO9j3AbvEN9O3PbwoatEOrjsl0QLvf0GiQNpxuexMxP7DYcQzJA"
                />
              </a>
              <a className="text-text-muted transition-colors hover:text-primary" href="#">
                <img
                  alt="LinkedIn"
                  className="h-5 w-5 opacity-60 filter hover:opacity-100"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb_VOa0YAOA-DLf63N6nyjHePNyjaMpOG9LJBXSndplxcnUu3os-aVaifCfLxP266-j2QmypPM_BbzBDoQiL2uyhMxGWLWzqjfRrURZ9ZKReDnK3Vxecjx0gd0acHPnT_AC0AKVfnJRTA-Y0RNj-wyWW8cjrlg3DHyHpgHPuZmViWcMaKcZzX-CfHnU-pIEs95GjUekVEINmeecpTBO1oopPVDZqnMzj6XlbPn_F6wchUElGBKj1zNgjegA3fN5WuQpCITFPxPMMw"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
