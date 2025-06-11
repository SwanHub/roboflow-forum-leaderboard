import Link from "next/link";

export const RoboflowLogo = () => {
  return (
    <div className="flex flex-row items-center relative">
      <Link href={"/"} className="flex w-full relative z-10">
        <img
          src={"/logos/roboflow_full_logo_color.png"}
          className="object-contain"
          style={{ height: 40 }}
        />
      </Link>
    </div>
  );
};
