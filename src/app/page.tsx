"use client";

import { fetchDiscoursePublicUserList } from "@/lib/api/discourse";
import useSWR from "swr";
import { DiscourseDirectoryResponse } from "./types";
import { ErrorDisplay } from "./_components/ErrorDisplay";
import { Loading } from "./_components/Loading";
import { ListItem_Leaderboard } from "./_components/ListItem_Leaderboard";
import { Banner } from "./_components/Banner";

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
    </main>
  );
}
