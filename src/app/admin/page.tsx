"use client";

import { useMemo, useState } from "react";

type StudentStatus = "Pending" | "Verified" | "Flagged";

type StudentEntry = {
  id: string;
  name: string;
  initials: string;
  school: string;
  submittedAt: string;
  status: StudentStatus;
  avatarClass: string;
};

const initialEntries: StudentEntry[] = [
  {
    id: "MEO-2024-8392",
    name: "Altan Sukhbat",
    initials: "AS",
    school: "Ulaanbaatar High School No. 1",
    submittedAt: "Oct 24, 2023",
    status: "Pending",
    avatarClass: "from-blue-400 to-blue-600",
  },
  {
    id: "MEO-2024-8393",
    name: "Bolormaa Erdene",
    initials: "BE",
    school: "Darkhan-Uul School 5",
    submittedAt: "Oct 23, 2023",
    status: "Verified",
    avatarClass: "from-purple-400 to-pink-600",
  },
  {
    id: "MEO-2024-8394",
    name: "Gankhuyag Batbayar",
    initials: "GB",
    school: "Orkhon Empathy School",
    submittedAt: "Oct 23, 2023",
    status: "Flagged",
    avatarClass: "from-green-400 to-teal-600",
  },
  {
    id: "MEO-2024-8395",
    name: "Nomin-Erdene G.",
    initials: "NG",
    school: "Hovd Secondary School",
    submittedAt: "Oct 22, 2023",
    status: "Verified",
    avatarClass: "from-orange-400 to-red-500",
  },
  {
    id: "MEO-2024-8396",
    name: "Tengis Oyuntuya",
    initials: "TO",
    school: "Ulaanbaatar Elite School",
    submittedAt: "Oct 21, 2023",
    status: "Pending",
    avatarClass: "from-cyan-400 to-blue-500",
  },
  {
    id: "MEO-2024-8397",
    name: "Sarnai Batmunkh",
    initials: "SB",
    school: "Khovd Laboratory School",
    submittedAt: "Oct 20, 2023",
    status: "Pending",
    avatarClass: "from-fuchsia-400 to-violet-600",
  },
  {
    id: "MEO-2024-8398",
    name: "Erkhembayar Luvsan",
    initials: "EL",
    school: "Erdenet STEM School",
    submittedAt: "Oct 19, 2023",
    status: "Verified",
    avatarClass: "from-emerald-400 to-green-600",
  },
  {
    id: "MEO-2024-8399",
    name: "Munkhjin Tseren",
    initials: "MT",
    school: "Sukhbaatar Public School",
    submittedAt: "Oct 18, 2023",
    status: "Flagged",
    avatarClass: "from-rose-400 to-red-600",
  },
];

const pageSize = 5;

function getStatusBadge(status: StudentStatus) {
  if (status === "Verified") {
    return "bg-yellow-100 text-status-verified dark:bg-yellow-900/30 dark:text-yellow-400";
  }
  if (status === "Flagged") {
    return "bg-red-100 text-status-flagged dark:bg-red-900/30 dark:text-red-400";
  }
  return "bg-blue-100 text-status-pending dark:bg-blue-900/30 dark:text-blue-300";
}

function nextStatus(status: StudentStatus): StudentStatus {
  if (status === "Pending") return "Verified";
  if (status === "Verified") return "Flagged";
  return "Pending";
}

function createPreviewDetails(entry: StudentEntry) {
  const normalizedName = entry.name.toLowerCase().replace(/[^a-z\s]/g, "").trim().replace(/\s+/g, ".");
  return {
    studentId: `S-${entry.id.split("-").slice(1).join("-")}`,
    email: `${normalizedName}@student.meo.mn`,
    course: "Economics Olympiad Track",
    transactionId: `TXN-${entry.id.replace(/\D/g, "")}`,
    amount: "₮35,000",
    paymentMethod: "Bank Transfer",
    paymentDate: `${entry.submittedAt} - 10:42 AM`,
    receiptFile: "receipt_scan_oct24.jpg (2.4 MB)",
    receiptImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfOwcu_-ycwM7i2mneX_SVx7Js5R35ltjoEZ77nwSu2fQr86flPb5SrNG2cBEiD0mG22qKhrLCAj5CAVLVQ1OJiLx10GEpSYiX7XSoLna2lVqGHYZ9iIfp7abTZ2WkHzKVvsI9BLh19E8UrhE-z3sU5EWfvPLvA5RzP6gSGGQh_GJIMLJyNXtVeK2UgiIdXyTV1ojfI1uK7LQP7NQm3jXP4qGoa8TAi8lbKUA1Xj7o0KsPBhVMEjPiTEnFDeosfxzK7NLTA38MhrQ",
  };
}

export default function AdminPage() {
  const [entries, setEntries] = useState<StudentEntry[]>(initialEntries);
  const [activeFilter, setActiveFilter] = useState<"All" | StudentStatus>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [previewEntry, setPreviewEntry] = useState<StudentEntry | null>(null);

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      const matchesFilter = activeFilter === "All" ? true : entry.status === activeFilter;
      const normalizedQuery = searchQuery.trim().toLowerCase();
      const matchesSearch =
        normalizedQuery.length === 0 ||
        entry.name.toLowerCase().includes(normalizedQuery) ||
        entry.school.toLowerCase().includes(normalizedQuery) ||
        entry.id.toLowerCase().includes(normalizedQuery);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, entries, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredEntries.length / pageSize));
  const pagedEntries = filteredEntries.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const stats = useMemo(() => {
    const pending = entries.filter((entry) => entry.status === "Pending").length;
    const verified = entries.filter((entry) => entry.status === "Verified").length;
    const flagged = entries.filter((entry) => entry.status === "Flagged").length;
    return {
      total: entries.length,
      pending,
      verified,
      flagged,
    };
  }, [entries]);

  const handleFilterChange = (filter: "All" | StudentStatus) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleExportCsv = () => {
    const header = ["RegistrationID", "StudentName", "School", "DateSubmitted", "Status"];
    const rows = filteredEntries.map((entry) => [entry.id, entry.name, entry.school, entry.submittedAt, entry.status]);
    const csv = [header, ...rows].map((row) => row.map((value) => `"${value}"`).join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "meo-registrations.csv");
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleAddSampleEntry = () => {
    const serial = entries.length + 8400;
    const newEntry: StudentEntry = {
      id: `MEO-2024-${serial}`,
      name: `Sample Student ${entries.length + 1}`,
      initials: "SS",
      school: "Sample Provincial School",
      submittedAt: "Oct 25, 2023",
      status: "Pending",
      avatarClass: "from-sky-400 to-indigo-600",
    };

    setEntries((prev) => [newEntry, ...prev]);
    setCurrentPage(1);
  };

  const handleEntryAction = (id: string) => {
    setEntries((prev) => prev.map((entry) => (entry.id === id ? { ...entry, status: nextStatus(entry.status) } : entry)));
  };

  const handleOpenPreview = (entry: StudentEntry) => {
    if (entry.status === "Verified") {
      return;
    }
    setPreviewEntry(entry);
  };

  const handleClosePreview = () => {
    setPreviewEntry(null);
  };

  const handleVerifyFromPreview = () => {
    if (!previewEntry) {
      return;
    }
    setEntries((prev) => prev.map((entry) => (entry.id === previewEntry.id ? { ...entry, status: "Verified" } : entry)));
    setPreviewEntry(null);
  };

  const handleRejectFromPreview = () => {
    if (!previewEntry) {
      return;
    }
    setEntries((prev) => prev.map((entry) => (entry.id === previewEntry.id ? { ...entry, status: "Flagged" } : entry)));
    setPreviewEntry(null);
  };

  const startItem = filteredEntries.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(filteredEntries.length, currentPage * pageSize);

  return (
    <div className="min-h-screen bg-admin-bg-light font-display text-admin-text-main antialiased dark:bg-admin-bg-dark">
      <div className="h-2 w-full bg-linear-to-r from-blue-600 via-admin-primary to-blue-600" />

      <div className="px-4 py-5 md:px-12 xl:px-40">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col">
          <header className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-gray-200 pb-6 md:flex-row dark:border-gray-800">
            <div className="flex w-full items-center gap-4 md:w-auto">
              <div className="flex size-10 items-center justify-center rounded-lg bg-admin-primary/10 text-admin-primary">
                <span className="material-symbols-outlined">grid_view</span>
              </div>
              <div>
                <h2 className="text-xl leading-tight font-bold tracking-tight text-admin-text-main dark:text-white">
                  Olympiad Management Portal
                </h2>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Mongolia Economic Olympiad 2024</p>
              </div>
            </div>

            <div className="flex w-full flex-1 justify-end gap-4 md:w-auto">
              <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-admin-surface-dark dark:text-gray-200 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="hidden sm:inline">Alerts ({stats.pending})</span>
              </button>
              <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-admin-primary px-4 text-sm font-bold text-white shadow-sm shadow-admin-primary/30 transition-colors hover:bg-admin-primary-dark">
                <span className="material-symbols-outlined text-[20px]">logout</span>
                <span>Logout</span>
              </button>
            </div>
          </header>

          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl dark:text-white">Registration Management</h1>
              <p className="max-w-2xl text-base font-normal text-gray-500 dark:text-gray-400">
                Monitor and process student applications across all participating provinces.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleExportCsv}
                className="flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 text-sm font-bold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-admin-surface-dark dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
                <span>Export CSV</span>
              </button>
              <button
                onClick={handleAddSampleEntry}
                className="flex h-10 items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                <span className="material-symbols-outlined text-[20px]">add</span>
                <span>New Entry</span>
              </button>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-admin-surface-dark">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Registrations</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-admin-surface-dark">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Verified Students</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.verified}</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-admin-surface-dark">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Review</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.pending}</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-admin-surface-dark">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Flagged Entries</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.flagged}</p>
            </div>
          </div>

          <div className="mb-4 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white p-2 shadow-sm sm:flex-row dark:border-gray-800 dark:bg-admin-surface-dark">
            <div className="flex w-full gap-2 overflow-x-auto p-1 sm:w-auto">
              {(["All", "Pending", "Verified", "Flagged"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? "bg-gray-900 text-white"
                      : "bg-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="relative mr-2 w-full sm:w-64">
              <span className="material-symbols-outlined absolute inset-y-0 left-0 flex items-center pl-3 text-[20px] text-gray-400">
                search
              </span>
              <input
                value={searchQuery}
                onChange={(event) => handleSearchChange(event.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pr-4 pl-10 text-sm text-gray-900 focus:border-admin-primary focus:ring-2 focus:ring-admin-primary/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                placeholder="Search students..."
                type="text"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-admin-surface-dark">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
                    <th className="px-6 py-4 text-xs font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">Student Name</th>
                    <th className="hidden px-6 py-4 text-xs font-bold tracking-wider text-gray-500 uppercase sm:table-cell dark:text-gray-400">School</th>
                    <th className="hidden px-6 py-4 text-xs font-bold tracking-wider text-gray-500 uppercase md:table-cell dark:text-gray-400">Date Submitted</th>
                    <th className="px-6 py-4 text-xs font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {pagedEntries.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                        No matching records found.
                      </td>
                    </tr>
                  ) : (
                    pagedEntries.map((entry) => (
                      <tr key={entry.id} className="group transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div
                              className={`mr-3 flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-tr ${entry.avatarClass} text-sm font-bold text-white`}
                            >
                              {entry.initials}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900 dark:text-white">{entry.name}</div>
                              <div className="text-xs text-gray-500 sm:hidden dark:text-gray-400">{entry.school}</div>
                              <div className="text-xs text-gray-400 dark:text-gray-500">{entry.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="hidden px-6 py-4 text-sm whitespace-nowrap text-gray-600 sm:table-cell dark:text-gray-300">
                          {entry.school}
                        </td>
                        <td className="hidden px-6 py-4 text-sm whitespace-nowrap text-gray-500 md:table-cell dark:text-gray-400">
                          {entry.submittedAt}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusBadge(entry.status)}`}>
                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
                            {entry.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                          <div className="flex justify-end gap-2">
                            {entry.status !== "Verified" ? (
                              <button
                                onClick={() => handleOpenPreview(entry)}
                                className="rounded-md border border-admin-primary/30 px-3 py-1 font-semibold text-admin-primary transition-colors hover:bg-admin-primary/5"
                              >
                                Preview
                              </button>
                            ) : (
                              <span className="px-3 py-1 text-xs text-gray-400 dark:text-gray-500">No preview</span>
                            )}
                            <button
                              onClick={() => handleEntryAction(entry.id)}
                              className="font-semibold text-admin-primary transition-colors hover:text-admin-primary-dark"
                            >
                              {entry.status === "Pending" ? "Review" : entry.status === "Flagged" ? "Inspect" : "Cycle Status"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-3 dark:border-gray-800 dark:bg-gray-900/50">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Showing <span className="font-medium text-gray-900 dark:text-white">{startItem}</span> to{" "}
                <span className="font-medium text-gray-900 dark:text-white">{endItem}</span> of{" "}
                <span className="font-medium text-gray-900 dark:text-white">{filteredEntries.length}</span> results
              </div>
              <div className="flex gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  className="rounded-lg border border-gray-200 bg-white p-2 text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-admin-surface-dark dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  className="rounded-lg border border-gray-200 bg-white p-2 text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-admin-surface-dark dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {previewEntry ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4">
          <div className="relative max-h-[92vh] w-full max-w-[1200px] overflow-hidden rounded-xl border border-slate-200 bg-background-light shadow-2xl dark:border-slate-800 dark:bg-background-dark">
            <div className="flex items-center justify-between border-b border-slate-200 bg-surface-light px-6 py-4 dark:border-slate-800 dark:bg-surface-dark">
              <div className="flex items-center gap-4">
                <div className="text-primary flex size-8 items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Verification Preview</h3>
              </div>
              <button
                onClick={handleClosePreview}
                className="rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                aria-label="Close preview"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="max-h-[calc(92vh-72px)] overflow-y-auto px-6 py-6">
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <span>Verifications</span>
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                  <span className="font-medium text-slate-900 dark:text-slate-100">#{previewEntry.id}</span>
                </div>
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                  <div>
                    <h4 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Verification Request: #{previewEntry.id}</h4>
                    <p className="mt-1 flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-lg">schedule</span>
                      Submitted on {previewEntry.submittedAt} by {previewEntry.name}
                    </p>
                  </div>
                  <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-bold ${getStatusBadge(previewEntry.status)}`}>
                    <span className="material-symbols-outlined text-lg">pending</span>
                    {previewEntry.status}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="flex flex-col gap-6 lg:col-span-7">
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-surface-light shadow-sm dark:border-slate-800 dark:bg-surface-dark">
                    <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50">
                      <h5 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined text-primary">person</span>
                        Student Information
                      </h5>
                    </div>
                    <dl className="grid grid-cols-1 gap-y-6 p-6">
                      <div className="grid grid-cols-1 gap-4 border-b border-slate-100 pb-4 sm:grid-cols-3 dark:border-slate-800">
                        <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Student Name</dt>
                        <dd className="text-sm font-semibold text-slate-900 sm:col-span-2 dark:text-white">{previewEntry.name}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-4 border-b border-slate-100 pb-4 sm:grid-cols-3 dark:border-slate-800">
                        <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Student ID</dt>
                        <dd className="text-sm font-semibold text-slate-900 sm:col-span-2 dark:text-white">{createPreviewDetails(previewEntry).studentId}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-4 border-b border-slate-100 pb-4 sm:grid-cols-3 dark:border-slate-800">
                        <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Email Address</dt>
                        <dd className="text-sm font-semibold text-slate-900 sm:col-span-2 dark:text-white">{createPreviewDetails(previewEntry).email}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Course</dt>
                        <dd className="text-sm font-semibold text-slate-900 sm:col-span-2 dark:text-white">{createPreviewDetails(previewEntry).course}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-surface-light shadow-sm dark:border-slate-800 dark:bg-surface-dark">
                    <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50">
                      <h5 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined text-primary">payments</span>
                        Payment Details
                      </h5>
                    </div>
                    <dl className="grid grid-cols-1 gap-y-6 p-6">
                      <div className="grid grid-cols-1 gap-4 border-b border-slate-100 pb-4 sm:grid-cols-3 dark:border-slate-800">
                        <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Transaction ID</dt>
                        <dd className="w-fit rounded bg-slate-100 px-2 py-0.5 font-mono text-sm text-slate-900 sm:col-span-2 dark:bg-slate-800 dark:text-white">
                          {createPreviewDetails(previewEntry).transactionId}
                        </dd>
                      </div>
                      <div className="grid grid-cols-1 gap-4 border-b border-slate-100 pb-4 sm:grid-cols-3 dark:border-slate-800">
                        <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Amount Paid</dt>
                        <dd className="text-sm font-bold text-slate-900 sm:col-span-2 dark:text-white">{createPreviewDetails(previewEntry).amount}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-4 border-b border-slate-100 pb-4 sm:grid-cols-3 dark:border-slate-800">
                        <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Payment Method</dt>
                        <dd className="flex items-center gap-2 text-sm font-semibold text-slate-900 sm:col-span-2 dark:text-white">
                          <span className="material-symbols-outlined text-slate-400">account_balance</span>
                          {createPreviewDetails(previewEntry).paymentMethod}
                        </dd>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">Date</dt>
                        <dd className="text-sm font-semibold text-slate-900 sm:col-span-2 dark:text-white">{createPreviewDetails(previewEntry).paymentDate}</dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="flex flex-col gap-6 lg:col-span-5">
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-surface-light shadow-sm dark:border-slate-800 dark:bg-surface-dark">
                    <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50">
                      <h5 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined text-primary">receipt_long</span>
                        Receipt Preview
                      </h5>
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center bg-slate-100 p-6 dark:bg-slate-900">
                      <div className="group relative w-full cursor-pointer overflow-hidden rounded-lg border border-slate-200 shadow-md dark:border-slate-700">
                        <div
                          className="h-96 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                          style={{ backgroundImage: `url(${createPreviewDetails(previewEntry).receiptImage})` }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
                          <span className="translate-y-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-black/80 dark:text-white">
                            Click to expand
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">{createPreviewDetails(previewEntry).receiptFile}</p>
                    </div>

                    <div className="border-t border-slate-200 bg-surface-light p-6 dark:border-slate-800 dark:bg-surface-dark">
                      <div className="flex flex-col gap-3">
                        <button
                          onClick={handleVerifyFromPreview}
                          className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-white shadow-md shadow-primary/20 transition-all active:scale-[0.98] hover:bg-blue-800"
                        >
                          <span className="material-symbols-outlined">check_circle</span>
                          Confirm Payment &amp; Verify
                        </button>
                        <button
                          onClick={handleRejectFromPreview}
                          className="flex w-full items-center justify-center gap-2 rounded-lg border border-transparent bg-transparent px-6 py-3 font-semibold text-red-600 transition-all active:scale-[0.98] hover:border-red-200 hover:bg-red-50 dark:text-red-400 dark:hover:border-red-800 dark:hover:bg-red-900/20"
                        >
                          <span className="material-symbols-outlined">report_problem</span>
                          Reject &amp; Notify Student
                        </button>
                      </div>
                      <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                        Reviewing Administrator: <span className="font-medium text-slate-600 dark:text-slate-300">Admin User</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
