export function Banner() {
  return (
    <div
      className="relative rounded-lg overflow-hidden mb-8"
      style={{
        backgroundImage: `url('https://canada1.discourse-cdn.com/flex029/uploads/roboflow1/original/2X/7/7586de4041d21349fc4e6e18c0b10f24d2317c4d.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative px-8 py-18 text-center">
        <h1 className="text-3xl font-bold text-white mb-3">
          Roboflow Forum Leaderboard
        </h1>
        <p className="text-base text-white font-semibold">Community Heroes</p>
      </div>
    </div>
  );
}
