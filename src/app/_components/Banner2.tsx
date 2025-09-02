import Link from "next/link";

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

const RECENT_CHAMP_POSTS = [
  {
    title: "🏆 July Roboflow Community Awards",
    link: "https://discuss.roboflow.com/t/july-roboflow-community-awards/10867/7",
    imageUrl:
      "https://canada1.discourse-cdn.com/flex029/uploads/roboflow1/original/2X/d/dbc0fe35db471d8f92f73a2de9ca33dcb5a72527.png",
  },
  {
    title: "🏆 June Roboflow Community Awards",
    link: "https://discuss.roboflow.com/t/june-roboflow-community-award-winners/10528",
    imageUrl:
      "https://canada1.discourse-cdn.com/flex029/uploads/roboflow1/original/2X/6/676b8f599089adb48b9f3012a8b5937cc1bc5d72.png",
  },
  {
    title: "🏆 May Roboflow Community Awards",
    link: "https://discuss.roboflow.com/t/introducing-roboflow-community-awards-and-may-winners/10207/13",
    imageUrl:
      "https://canada1.discourse-cdn.com/flex029/uploads/roboflow1/original/2X/5/5127368cdb09b2fe3de136882e53c1f4d6fb5416.png",
  },
];
