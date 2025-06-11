"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { RoboflowLogo } from "./RoboflowLogo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      setIsAnimating(true);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && isMenuOpen) {
        handleClose();
      }
    };
    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [isMenuOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200"
        style={{
          background:
            "linear-gradient(225deg, rgba(184,164,245,.11), rgba(149,238,232,.11) 32.81%, rgba(96,124,233,.11) 70.83%, rgba(184,164,245,.11)), #fff",
        }}
      >
        <div
          className="flex flex-row items-center justify-between w-full mx-auto py-2.5 px-2"
          style={{ maxWidth: "1092px" }}
        >
          <div className="flex flex-row items-center gap-8">
            <RoboflowLogo />
            <Buttons_Navigation />
          </div>
          <div className="flex items-center gap-4">
            <Button_Menu
              isMenuOpen={isMenuOpen}
              handleClose={handleClose}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>
      </header>
      {isMenuOpen && <Buttons_Navigation_Mobile isAnimating={isAnimating} />}
    </>
  );
}

const Buttons_Navigation = () => {
  return (
    <div className="hidden lg:flex items-center gap-2 px-2">
      <Link
        href="https://discuss.roboflow.com"
        className="text-gray-700 text-sm font-semibold hover:bg-violet-100 transition-all
      px-3 py-1.75 rounded-lg border border-transparent hover:text-violet-800"
      >
        Forum
      </Link>
      <Link
        href="/"
        className="text-sm font-semibold bg-white transition-all
      px-3 py-1.75 rounded-lg border border-transparent text-violet-800"
      >
        Leaderboard
      </Link>
      <Link
        href="https://app.roboflow.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-sm font-semibold hover:bg-violet-100 transition-all
      px-3 py-1.75 rounded-lg border border-transparent hover:text-violet-800"
      >
        Projects
      </Link>
      <Link
        href="https://universe.roboflow.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-sm font-semibold hover:bg-violet-100 transition-all
      px-3 py-1.75 rounded-lg border border-transparent hover:text-violet-800"
      >
        Universe
      </Link>
      <Link
        href="https://docs.roboflow.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-sm font-semibold hover:bg-violet-100 transition-all
      px-3 py-1.75 rounded-lg border border-transparent hover:text-violet-800"
      >
        Documentation
      </Link>
      <Link
        href="https://blog.roboflow.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-sm font-semibold hover:bg-violet-100 transition-all
      px-3 py-1.75 rounded-lg border border-transparent hover:text-violet-800"
      >
        Blog
      </Link>
    </div>
  );
};

const Buttons_Navigation_Mobile = ({
  isAnimating,
}: {
  isAnimating: boolean;
}) => {
  return (
    <div
      className={`fixed left-0 right-0 bg-gray-50 z-40 transition-transform duration-300 ease-in-out ${
        isAnimating ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ top: "68px", height: "calc(100vh - 68px)" }}
    >
      <div className="flex flex-col w-full mb-6">
        <Link
          href="https://discuss.roboflow.com"
          className="w-full py-5 px-6 mt-1 text-left text-gray-600 bg-white border-b border-gray-200"
        >
          <span className="text-lg font-semibold">Forum</span>
        </Link>
        <Link
          href="https://app.roboflow.com/"
          className="w-full py-5 px-6 text-left text-gray-600 bg-white border-b border-gray-200"
        >
          <span className="text-lg font-semibold">Projects</span>
        </Link>
        <Link
          href="https://universe.roboflow.com/"
          className="w-full py-5 px-6 text-left text-gray-600 bg-white border-b border-gray-200"
        >
          <span className="text-lg font-semibold">Universe</span>
        </Link>
        <Link
          href="https://docs.roboflow.com/"
          className="w-full py-5 px-6 text-left text-gray-600 bg-white border-b border-gray-200"
        >
          <span className="text-lg font-semibold">Documentation</span>
        </Link>
        <Link
          href="https://blog.roboflow.com/"
          className="w-full py-5 px-6 text-left text-gray-600 bg-white border-b border-gray-200"
        >
          <span className="text-lg font-semibold">Blog</span>
        </Link>
      </div>
    </div>
  );
};

const Button_Menu = ({
  isMenuOpen,
  handleClose,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  handleClose: () => void;
  setIsMenuOpen: (open: boolean) => void;
}) => {
  return (
    <button
      onClick={() => (isMenuOpen ? handleClose() : setIsMenuOpen(true))}
      className="lg:hidden p-1 text-gray-600 hover:text-gray-900 cursor-pointer"
    >
      {isMenuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="24"
          viewBox="0 0 18 24"
          fill="none"
        >
          <path
            d="M15.2109 19.2703C15.5016 19.5609 15.9797 19.5609 16.2703 19.2703C16.5609 18.9797 16.5609 18.5016 16.2703 18.2109L10.0594 12L16.2703 5.78906C16.5609 5.49844 16.5609 5.02031 16.2703 4.72969C15.9797 4.43906 15.5016 4.43906 15.2109 4.72969L9 10.9406L2.79375 4.72969C2.50312 4.43906 2.025 4.43906 1.73437 4.72969C1.44375 5.02031 1.44375 5.49844 1.73437 5.78906L7.94062 12L1.72969 18.2109C1.43906 18.5016 1.43906 18.9797 1.72969 19.2703C2.02031 19.5609 2.49844 19.5609 2.78906 19.2703L9 13.0594L15.2109 19.2703Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
        >
          <path
            d="M0 3.75C0 3.3375 0.3375 3 0.75 3H20.25C20.6625 3 21 3.3375 21 3.75C21 4.1625 20.6625 4.5 20.25 4.5H0.75C0.3375 4.5 0 4.1625 0 3.75ZM0 11.25C0 10.8375 0.3375 10.5 0.75 10.5H20.25C20.6625 10.5 21 10.8375 21 11.25C21 11.6625 20.6625 12 20.25 12H0.75C0.3375 12 0 11.6625 0 11.25ZM21 18.75C21 19.1625 20.6625 19.5 20.25 19.5H0.75C0.3375 19.5 0 19.1625 0 18.75C0 18.3375 0.3375 18 0.75 18H20.25C20.6625 18 21 18.3375 21 18.75Z"
            fill="currentColor"
          ></path>
        </svg>
      )}
    </button>
  );
};
