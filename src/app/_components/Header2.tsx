import Link from "next/link";

export default function Header2() {
  const navLinks = [
    { href: "https://discuss.roboflow.com/", label: "Forum", isExternal: true },
    { href: "https://app.roboflow.com/", label: "Projects", isExternal: true },
    {
      href: "https://universe.roboflow.com/",
      label: "Universe",
      isExternal: true,
    },
    {
      href: "https://docs.roboflow.com/",
      label: "Documentation",
      isExternal: true,
    },
    { href: "https://blog.roboflow.com/", label: "Blog", isExternal: true },
  ];

  return (
    <div className="sticky top-0 left-0 right-0 w-full mx-auto z-50">
      <div
        className="h-16 flex items-center overflow-hidden gap-3"
        style={{
          background:
            "linear-gradient(225deg, rgba(184,164,245,.11), rgba(149,238,232,.11) 32.81%, rgba(96,124,233,.11) 70.83%, rgba(184,164,245,.11)), #fff",
        }}
      >
        {navLinks.map((link) => {
          const isSelected = link.label === "Forum"; // You can modify this logic based on current page

          return (
            <Link
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className={`
                inline-block float-left text-gray-700 rounded-md leading-5 text-sm font-medium px-3 py-2
                transition-colors duration-150 ease-in-out
                hover:bg-violet-100 hover:text-violet-700
                ${isSelected ? "bg-white/80 text-violet-700" : ""}
              `}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
