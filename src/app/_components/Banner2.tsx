import Link from "next/link";
import { RECENT_CHAMP_POSTS } from "../constants";

export function Banner2() {
  return (
    <div className="relative rounded-lg overflow-hidden mb-8">
      <div className="relative px-2 md:px-8 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href={RECENT_CHAMP_POSTS[0].link}
          target="_blank"
          rel="noopener noreferrer"
          key={RECENT_CHAMP_POSTS[0].link}
        >
          <div key={RECENT_CHAMP_POSTS[0].link} className="relative">
            <img
              src={RECENT_CHAMP_POSTS[0].imageUrl}
              alt={RECENT_CHAMP_POSTS[0].title}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <Link
          href={RECENT_CHAMP_POSTS[1].link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
          key={RECENT_CHAMP_POSTS[1].link}
        >
          <div key={RECENT_CHAMP_POSTS[1].link} className="relative">
            <img
              src={RECENT_CHAMP_POSTS[1].imageUrl}
              alt={RECENT_CHAMP_POSTS[1].title}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <Link
          href={RECENT_CHAMP_POSTS[2].link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block"
          key={RECENT_CHAMP_POSTS[2].link}
        >
          <div key={RECENT_CHAMP_POSTS[2].link} className="relative">
            <img
              src={RECENT_CHAMP_POSTS[2].imageUrl}
              alt={RECENT_CHAMP_POSTS[2].title}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
