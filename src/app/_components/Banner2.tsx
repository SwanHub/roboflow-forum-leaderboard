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
    title: "🏆 September Roboflow Community Awards",
    link: "https://discuss.roboflow.com/t/september-roboflow-community-awards/11273",
    imageUrl:
      "https://canada1.discourse-cdn.com/flex029/uploads/roboflow1/original/2X/9/952103b6fcef9a329a73fbc25209508075f46d0c.jpeg",
  },
  {
    title: "🏆 August Roboflow Community Awards",
    link: "https://discuss.roboflow.com/t/august-roboflow-community-awards/11122",
    imageUrl:
      "https://canada1.discourse-cdn.com/flex029/uploads/roboflow1/original/2X/c/cd3a0440a79d41dc8e7aa0773b34af9566fbb783.jpeg",
  },
  {
    title: "🏆 July Roboflow Community Awards",
    link: "https://discuss.roboflow.com/t/july-roboflow-community-awards/10867/7",
    imageUrl:
      "https://canada1.discourse-cdn.com/flex029/uploads/roboflow1/original/2X/d/dbc0fe35db471d8f92f73a2de9ca33dcb5a72527.png",
  },
];
