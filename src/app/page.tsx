"use client";

import { fetchDiscoursePublicUserList, TimePeriod } from "@/lib/api/discourse";
import useSWR from "swr";
import { DiscourseDirectoryResponse } from "./types";
import { ErrorDisplay } from "./_components/ErrorDisplay";
import { Loading } from "./_components/Loading";
import { ListItem_Leaderboard } from "./_components/ListItem_Leaderboard";
import { Banner } from "./_components/Banner";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ListItem_PastWinners } from "./_components/ListItem_PastWinners";
import Link from "next/link";
import { useState } from "react";
import { MAY_WINNERS } from "./constants";

function TimePeriodSelector({
  selectedPeriod,
  onPeriodChange,
}: {
  selectedPeriod: TimePeriod;
  onPeriodChange: (period: TimePeriod) => void;
}) {
  const periods: { value: TimePeriod; label: string }[] = [
    { value: "weekly", label: "Week" },
    { value: "monthly", label: "Month" },
    { value: "yearly", label: "Year" },
    { value: "all", label: "All-time" },
  ];

  return (
    <div className="inline-flex overflow-hidden">
      {periods.map((period) => (
        <button
          key={period.value}
          onClick={() => onPeriodChange(period.value)}
          className={`px-4 py-2 text-base font-medium transition-colors cursor-pointer border-b-2 border-b-transparent ${
            selectedPeriod === period.value
              ? "border-b-violet-800 text-violet-800"
              : "bg-white text-gray-900 hover:bg-violet-50"
          }`}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("monthly");

  const fetcher = (): Promise<DiscourseDirectoryResponse> =>
    fetchDiscoursePublicUserList(selectedPeriod);

  const { data, error, isLoading } = useSWR<DiscourseDirectoryResponse>(
    `discourse-leaderboard-${selectedPeriod}`,
    fetcher,
    {
      refreshInterval: 300000,
      revalidateOnFocus: false,
    }
  );

  const filteredData = data?.directory_items.filter(
    (item) => item.user.title !== "Roboflow" && item.likes_received > 0
  );

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto pt-20 pb-24 px-4" style={{ maxWidth: "1092px" }}>
        <Banner />

        <div className="mb-12">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              May 2025 Winners 🎉
            </h2>
            <Link
              href="https://discuss.roboflow.com/t/announcing-may-2025-forum-champions/12345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-700 opacity-70 hover:opacity-100 transition-opacity"
            >
              read announcement
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
            {MAY_WINNERS?.map((winner, index) => (
              <ListItem_PastWinners
                key={winner.id}
                winner={winner}
                rank={index + 1}
                includeSwag={index === 0}
              />
            ))}
          </div>
        </div>

        {error && <ErrorDisplay error={error} />}
        {isLoading && <Loading />}

        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-base font-medium text-gray-900">
            Likes received:
          </h2>
          <TimePeriodSelector
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
          />
        </div>

        {data && !error && (
          <div>
            {filteredData?.slice(0, 10).map((item, index) => (
              <ListItem_Leaderboard
                key={item.id}
                item={item}
                rank={index + 1}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
