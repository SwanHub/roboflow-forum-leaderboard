"use client";

import { useState } from "react";
import { Info, X } from "lucide-react";

export function Banner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          <p className="text-base text-white font-semibold mb-4">
            Community Heroes
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex absolute bottom-4 right-4 cursor-pointer items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            <Info size={16} />
            How does this work?
          </button>
        </div>
      </div>

      <Modal_HowItWorks
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function Modal_HowItWorks({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          How does this work?
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Each month, we crown a new batch of winners based on likes received,
          answers solved, and other key metrics that measure contribution and
          activity.
        </p>
      </div>
    </div>
  );
}
