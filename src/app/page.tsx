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
    <main className="min-h-screen bg-white">
      <Header />
      <div className="mx-auto py-24" style={{ maxWidth: "1092px" }}>
        <Banner />

        <div className="mb-8">
          {data?.meta && (
            <p className="text-sm text-gray-900 text-center">
              Last updated:{" "}
              {new Date(data.meta.last_updated_at).toLocaleDateString()}
            </p>
          )}
        </div>

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
