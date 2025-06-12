import { OrderType } from "@/lib/api/discourse";
import { DirectoryItem } from "../types";
import Link from "next/link";

function getRankColor(rank: number): string {
  const colors = [
    "text-violet-500",
    "text-violet-600",
    "text-purple-700",
    "text-purple-800",
    "text-indigo-900",
    "text-indigo-900",
    "text-indigo-900",
    "text-indigo-900",
    "text-indigo-900",
    "text-indigo-900",
  ];

  return colors[Math.min(rank - 1, colors.length - 1)];
}

export function ListItem_Leaderboard({
  item,
  rank,
  order,
}: {
  item: DirectoryItem;
  rank: number;
  order: OrderType;
}) {
  const baseURL = "https://yyz1.discourse-cdn.com/flex029";
  const size = 240;
  const avatarTemplate = item.user.avatar_template;
  const avatarURL = avatarTemplate.replace(/\{size\}/, size.toString());

  return (
    <Link
      href={`https://discuss.roboflow.com/u/${item.user.username}/summary`}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div
        className="flex items-center gap-4 p-4 border-b-2 border-b-gray-200 border-l-2
        border-l-transparent hover:border-l-violet-300 hover:bg-gray-100 transition-colors cursor-pointer"
      >
        <div className="flex-shrink-0 w-8 text-center">
          <span className={`text-2xl font-bold ${getRankColor(rank)}`}>
            #{rank}
          </span>
        </div>
        <div className="flex-shrink-0">
          <img
            src={`${
              avatarURL.startsWith("http")
                ? avatarURL
                : `${baseURL}${avatarURL}`
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
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold text-violet-600">
            {order === "likes_received"
              ? item.likes_received.toLocaleString()
              : order === "post_count"
              ? item.post_count.toLocaleString()
              : item.likes_given.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  );
}
