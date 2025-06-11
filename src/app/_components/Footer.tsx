import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div
      className="pb-10 pt-15"
      style={{ backgroundColor: "#2c005b", color: "#4b4c4d" }}
    >
      <footer>
        <ul className="p-0 list-none text-center text-lg leading-relaxed mb-0 flex flex-row justify-center">
          <li className="px-2.5">
            <Link
              href="https://roboflow.com"
              target="_blank"
              className="text-white opacity-80 hover:opacity-100 font-medium tracking-tight"
            >
              Home
            </Link>
          </li>
          <li className="px-2.5">
            <Link
              href="https://roboflow.com/press"
              target="_blank"
              className="text-white opacity-80 hover:opacity-100 font-medium tracking-tight"
            >
              Press
            </Link>
          </li>
          <li className="px-2.5">
            <Link
              href="https://roboflow.com/careers"
              target="_blank"
              className="text-white opacity-80 hover:opacity-100 font-medium tracking-tight"
            >
              Careers
            </Link>
          </li>
          <li className="px-2.5">
            <Link
              href="https://roboflow.com/about"
              target="_blank"
              className="text-white opacity-80 hover:opacity-100 font-medium tracking-tight"
            >
              About
            </Link>
          </li>
          <li className="px-2.5">
            <Link
              href="https://roboflow.com/terms"
              target="_blank"
              className="text-white opacity-80 hover:opacity-100 font-medium tracking-tight"
            >
              Terms
            </Link>
          </li>
          <li className="px-2.5">
            <Link
              href="https://roboflow.com/privacy"
              target="_blank"
              className="text-white opacity-80 hover:opacity-100 font-medium tracking-tight"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
        <p className="mt-4 text-center text-sm mb-0" style={{ color: "#aaa" }}>
          &copy; 2024 Roboflow, Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
