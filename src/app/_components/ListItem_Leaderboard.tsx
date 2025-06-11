import { DirectoryItem } from "../types";

export function ListItem_Leaderboard({
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
