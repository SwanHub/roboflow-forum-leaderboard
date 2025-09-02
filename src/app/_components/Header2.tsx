import Link from "next/link";

export default function Header2() {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <Link href="/" className="nav-logo mr-5"></Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              href="https://leaderboard.discuss.roboflow.com"
              className="nav-link"
            >
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <Link href="https://blog.roboflow.com" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="https://docs.roboflow.com" className="nav-link">
              Docs
            </Link>
          </li>
          <li className="nav-item">
            <Link href="https://roboflow.com/youtube" className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link href="https://luma.com/roboflow" className="nav-link">
              Weekly Webinar
            </Link>
          </li>
          <li className="nav-item">
            <Link href="https://universe.roboflow.com" className="nav-link">
              Universe
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
