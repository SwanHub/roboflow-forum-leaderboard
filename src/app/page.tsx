"use client";

import { fetchDiscoursePublicUserList } from "@/lib/api/discourse";
import useSWR from "swr";
import { DiscourseDirectoryResponse } from "./types";
import { ErrorDisplay } from "./_components/ErrorDisplay";
import { Loading } from "./_components/Loading";
import { ListItem_Leaderboard } from "./_components/ListItem_Leaderboard";
import { Banner } from "./_components/Banner";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ListItem_PastWinners } from "./_components/ListItem_PastWinners";

export default function Home() {
  const fetcher = (): Promise<DiscourseDirectoryResponse> =>
    fetchDiscoursePublicUserList();
  const { data, error, isLoading } = useSWR<DiscourseDirectoryResponse>(
    "discourse-leaderboard",
    fetcher,
    {
      refreshInterval: 300000,
      revalidateOnFocus: false,
    }
  );

  const filteredData = data?.directory_items.filter(
    (item) => item.user.title !== "Roboflow"
  );

  const topThree = filteredData?.slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div
        className="mx-auto pt-20 pb-24 px-2.5"
        style={{ maxWidth: "1092px" }}
      >
        <Banner />

        {topThree && (
          <div className="mb-12 p-4">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              May 2025 Winners 🎉
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {topThree?.map((winner, index) => (
                <ListItem_PastWinners
                  key={winner.id}
                  winner={winner}
                  rank={index + 1}
                  includeSwag={index === 0}
                />
              ))}
            </div>
          </div>
        )}
        {error && <ErrorDisplay error={error} />}
        {isLoading && <Loading />}

        <h2 className="inline-block pb-2 mb-4 text-violet-800 border-b-2 border-violet-800 cursor-pointer">
          Likes received
        </h2>
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
