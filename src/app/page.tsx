"use client";

import { fetchDiscoursePublicUserList } from "@/lib/api/discourse";
import useSWR from "swr";
import { DiscourseDirectoryResponse, DirectoryItem } from "./types";

const fetcher = (): Promise<DiscourseDirectoryResponse> =>
  fetchDiscoursePublicUserList();

function LeaderboardItem({
  item,
  rank,
}: {
  item: DirectoryItem;
  rank: number;
}) {
  const baseURL = "https://yyz1.discourse-cdn.com/flex029";
  const size = 240;
  const avatarTemplate = item.user.avatar_template;
  const avatarURL = avatarTemplate.replace(/\{size\}/, size.toString());
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 w-8 text-center">
        <span
          className={`text-lg font-bold ${
            rank === 1
              ? "text-yellow-500"
              : rank === 2
              ? "text-gray-400"
              : rank === 3
              ? "text-orange-600"
              : "text-gray-600"
          }`}
        >
          #{rank}
        </span>
      </div>

      <div className="flex-shrink-0">
        <img
          src={`${
            avatarURL.startsWith("http") ? avatarURL : `${baseURL}${avatarURL}`
          }`}
          alt={`${item.user.username} avatar`}
          className="w-12 h-12 rounded-full bg-gray-200"
        />
      </div>

      <div className="flex-grow">
        <div className="font-semibold text-gray-900">
          {item.user.name || item.user.username}
        </div>
        <div className="text-sm text-gray-600">@{item.user.username}</div>
        {item.user.title && (
          <div className="text-xs text-blue-600 font-medium">
            {item.user.title}
          </div>
        )}
      </div>

      <div className="text-right">
        <div className="text-2xl font-bold text-violet-600">
          {item.likes_received.toLocaleString()}
        </div>
        <div className="text-sm text-gray-500">likes received</div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="space-y-4">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg animate-pulse"
        >
          <div className="w-8 h-6 bg-gray-200 rounded"></div>
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="flex-grow space-y-2">
            <div className="w-32 h-4 bg-gray-200 rounded"></div>
            <div className="w-24 h-3 bg-gray-200 rounded"></div>
          </div>
          <div className="w-16 h-6 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}

function ErrorDisplay({ error }: { error: Error }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <h3 className="text-red-800 font-semibold">Error loading leaderboard</h3>
      <p className="text-red-600 text-sm mt-1">{error.message}</p>
    </div>
  );
}

export default function Home() {
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
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Forum Leaderboard
          </h1>
          <p className="text-gray-600">
            Top users ranked by likes received this month
          </p>
          {data?.meta && (
            <p className="text-sm text-gray-500 mt-1">
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
              <LeaderboardItem key={item.id} item={item} rank={index + 1} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
