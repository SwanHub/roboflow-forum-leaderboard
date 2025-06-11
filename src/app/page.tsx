"use client";

import { fetchDiscoursePublicUserList } from "@/lib/api/discourse";
import useSWR from "swr";
import { DiscourseDirectoryResponse } from "./types";
import { ErrorDisplay } from "./_components/ErrorDisplay";
import { Loading } from "./_components/Loading";
import { ListItem_Leaderboard } from "./_components/ListItem_Leaderboard";

function Banner() {
  return (
    <div
      className="relative rounded-lg overflow-hidden mb-8"
      style={{
        backgroundImage: `url('https://canada1.discourse-cdn.com/flex029/uploads/roboflow1/original/2X/7/7586de4041d21349fc4e6e18c0b10f24d2317c4d.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-3">
          Roboflow Forum Leaderboard
        </h1>
        <p className="text-xl text-white/90 font-medium">
          Most active members in the last month
        </p>
      </div>
    </div>
  );
}

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

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto" style={{ maxWidth: "1092px" }}>
        <Banner />

        <div className="mb-8">
          {data?.meta && (
            <p className="text-sm text-gray-500 text-center">
              Last updated:{" "}
              {new Date(data.meta.last_updated_at).toLocaleString()}
            </p>
          )}
        </div>

        {error && <ErrorDisplay error={error} />}
        {isLoading && <Loading />}

        {data && !error && (
          <div className="space-y-3">
            {data.directory_items.slice(0, 10).map((item, index) => (
              <ListItem_Leaderboard
                key={item.id}
                item={item}
                rank={index + 1}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
