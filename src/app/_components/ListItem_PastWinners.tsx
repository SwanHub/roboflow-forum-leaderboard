import { Trophy } from "lucide-react";
import { DirectoryItem } from "../types";
import Link from "next/link";

function TrophyIcon({ rank }: { rank: number }) {
  const trophyColor =
    rank === 1
      ? "text-yellow-400"
      : rank === 2
      ? "text-gray-300"
      : "text-amber-600";

  return <Trophy className={`text-2xl ${trophyColor}`} />;
}

export function ListItem_PastWinners({
  winner,
  rank,
}: {
  winner: DirectoryItem;
  rank: number;
}) {
  const credits = rank === 1 ? 50 : rank === 2 ? 25 : 10;
  const baseURL = "https://yyz1.discourse-cdn.com/flex029";
  const size = 240;
  const avatarTemplate = winner.user.avatar_template;
  const avatarURL = avatarTemplate.replace(/\{size\}/, size.toString());

  return (
    <Link
      href={`https://discuss.roboflow.com/u/${winner.user.username}/summary`}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="relative flex items-center gap-4 p-4 bg-white border border-gray-200">
        <div className="absolute -top-5 -right-5 p-2 bg-white border border-gray-200 rounded-full">
          <TrophyIcon rank={rank} />
        </div>
        <div className="flex-shrink-0">
          <img
            src={`${
              avatarURL.startsWith("http")
                ? avatarURL
                : `${baseURL}${avatarURL}`
            }`}
            alt={`${winner.user.username} avatar`}
            className="w-12 h-12 rounded-full bg-gray-200"
          />
        </div>
        <div className="flex-grow">
          <div className="font-semibold text-gray-900 whitespace-nowrap">
            {winner.user.name || winner.user.username}
          </div>
          <div className="text-sm text-gray-600">@{winner.user.username}</div>
        </div>
        <div className="flex-shrink-0">
          <div className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium">
            +{credits} credits
          </div>
        </div>
      </div>
    </Link>
  );
}
