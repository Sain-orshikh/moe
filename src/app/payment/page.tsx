export default function PaymentPage() {
  return (
    <div className="bg-background-light font-display text-slate-900 min-h-screen flex flex-col dark:bg-background-dark dark:text-slate-100">
      <header className="sticky top-0 z-10 w-full border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Mongolia Economic Olympiad</h1>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">
              Home
            </a>
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">
              Rules
            </a>
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">
              Results
            </a>
            <a className="text-sm font-medium text-slate-600 transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-3 sm:flex">
              <div
                className="h-8 w-8 rounded-full border border-slate-300 bg-slate-200 bg-cover bg-center dark:border-slate-600 dark:bg-slate-700"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD29heXZb6zmHqihJVQqDwk1c-sXHqYVnz37y7vsle-TRlSyoW05MEPMPXmk6N4FY0_PQAHUS1Facuaq_QVCr6Uw_f60PeUICh8RCP3N2nDTAe-5VXbYUT6c7LcZjVdGKjrf0vXvXiqTzP3gIoLp1R3n67eDEx8KYHicwyoi6mWjW6hk8j_RWIV4j4Nd20PPV6GlJiOAco8XIohrfR6_LKMePtCUUl9HXjbLb80woYI6fICxFHk0bwDOT2PDKnLoET-6oi18CP7WRk")',
                }}
              />
            </div>
            <button className="flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-blue-800">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="flex w-full flex-grow flex-col items-center px-4 py-10 sm:px-6">
        <div className="flex w-full max-w-[800px] flex-col gap-8">
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Payment Instructions &amp; Upload
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">
              Please complete the transfer and upload your receipt below for verification.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-700 dark:bg-slate-800/50 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">account_balance</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Official Payment Details</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Transfer fee to this account</p>
                </div>
              </div>
              <button className="group flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-primary hover:text-primary dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:text-primary">
                <span className="material-symbols-outlined text-[18px]">content_copy</span>
                <span>Copy Details</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 p-6">
              <div className="grid grid-cols-1 items-center gap-2 border-b border-slate-100 pb-4 sm:grid-cols-[140px_1fr] sm:gap-4 dark:border-slate-800">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Bank Name</p>
                <div className="flex items-center gap-2">
                  <div
                    className="size-6 rounded-sm bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmp3KCTO-zIz0wawTBrk5uCGaPSYwJIsnXxZfxEzlPx3MhizANWUXSwQszm_ujw1UYRxVDXWlhKxodj5oU36Gzksg02wAdcqHU-zw2ZUlXDHG65aiPMSbrSnlXxaFFGSQxKahC-bd7Fys_CsER-M3Raaolpv4iy4CfOB1fqcZYAZAbjqzVnDl2FWcYhuJvt899my94AXxt4OA-Uz30pc1x8sujmogOgNVw8pmxdbCheTq13ZZgCWAK3ymzz_YuDSlTyg4_iMP9fKw")',
                    }}
                  />
                  <p className="text-base font-semibold text-slate-900 dark:text-white">Khan Bank</p>
                </div>
              </div>

              <div className="grid grid-cols-1 items-center gap-2 border-b border-slate-100 pb-4 sm:grid-cols-[140px_1fr] sm:gap-4 dark:border-slate-800">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Account Number</p>
                <div className="flex items-center justify-between gap-4 sm:justify-start">
                  <p className="text-xl font-mono font-bold tracking-wide text-slate-900 dark:text-white">5050 1234 56</p>
                  <span className="inline-flex items-center justify-center rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    MNT
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[140px_1fr] sm:gap-4">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Recipient Name</p>
                <p className="text-base font-semibold text-slate-900 dark:text-white">Mongolia Economic Olympiad NGO</p>
              </div>
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-4">
            <h3 className="px-1 text-xl font-bold text-slate-900 dark:text-white">Upload Proof of Payment</h3>

            <div className="group relative cursor-pointer rounded-xl border-2 border-dashed border-slate-300 bg-white transition-colors hover:border-primary dark:border-slate-700 dark:bg-slate-900 dark:hover:border-primary">
              <input aria-label="Upload payment receipt" className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0" type="file" />
              <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[32px] text-primary">cloud_upload</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    <span className="text-primary">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">SVG, PNG, JPG or PDF (max. 5MB)</p>
                </div>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Sender Name</label>
                <input
                  className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none focus:border-transparent focus:ring-2 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  placeholder="Enter the name on the account"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Transaction Date</label>
                <input
                  className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none focus:border-transparent focus:ring-2 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  type="date"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Additional Notes (Optional)</label>
              <textarea
                className="w-full resize-none rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-900 outline-none focus:border-transparent focus:ring-2 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                placeholder="Any additional information about the payment..."
                rows={3}
              />
            </div>

            <div className="flex justify-end pt-4">
              <button className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-blue-800 sm:w-auto">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                Submit Payment Proof
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 py-6 text-slate-400 dark:text-slate-500">
            <span className="material-symbols-outlined text-[16px]">lock</span>
            <p className="text-xs font-medium">Your payment information is securely processed.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
