"use client";

import {
  fetchDiscoursePublicUserList,
  TimePeriod,
  OrderType,
} from "@/lib/api/discourse";
import useSWR from "swr";
import { DiscourseDirectoryResponse } from "./types";
import { ErrorDisplay } from "./_components/ErrorDisplay";
import { Loading } from "./_components/Loading";
import { ListItem_Leaderboard } from "./_components/ListItem_Leaderboard";

import Footer from "./_components/Footer";
import { ListItem_PastWinners } from "./_components/ListItem_PastWinners";
import Link from "next/link";
import { useState } from "react";
import { SEPTEMBER_WINNERS } from "./constants";
import { ChevronRight } from "lucide-react";
import Header2 from "./_components/Header2";
import { Banner2 } from "./_components/Banner2";

function TimePeriodSelector({
  selectedPeriod,
  onPeriodChange,
}: {
  selectedPeriod: TimePeriod;
  onPeriodChange: (period: TimePeriod) => void;
}) {
  const periods: { value: TimePeriod; label: string }[] = [
    { value: "weekly", label: "Week" },
    { value: "monthly", label: "Month" },
    { value: "yearly", label: "Year" },
  ];

  return (
    <div className="inline-flex overflow-hidden">
      {periods.map((period) => (
        <button
          key={period.value}
          onClick={() => onPeriodChange(period.value)}
          className={`px-4 py-2 text-sm font-medium transition-colors hover:bg-violet-50 cursor-pointer ${
            selectedPeriod === period.value
              ? "border-b-2 border-b-violet-800 text-gray-900"
              : "border-b-2 border-b-transparent text-gray-800 "
          }`}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}

// Order Selector Component (Dropdown)
function OrderSelector({
  selectedOrder,
  onOrderChange,
}: {
  selectedOrder: OrderType;
  onOrderChange: (order: OrderType) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const orders: { value: OrderType; label: string }[] = [
    { value: "likes_received", label: "Likes Received" },
    { value: "post_count", label: "Post Count" },
    { value: "likes_given", label: "Likes Given" },
  ];

  const selectedOrderLabel =
    orders.find((order) => order.value === selectedOrder)?.label ||
    "Likes Received";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none
        focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
      >
        {selectedOrderLabel}
        <ChevronRight
          size={16}
          className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-20">
            {orders.map((order) => (
              <button
                key={order.value}
                onClick={() => {
                  onOrderChange(order.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md ${
                  selectedOrder === order.value
                    ? "bg-violet-50 text-violet-700"
                    : "text-gray-700"
                }`}
              >
                {order.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Home() {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("monthly");
  const [selectedOrder, setSelectedOrder] =
    useState<OrderType>("likes_received");

  const fetcher = (): Promise<DiscourseDirectoryResponse> =>
    fetchDiscoursePublicUserList(selectedPeriod, selectedOrder);

  const { data, error, isLoading } = useSWR<DiscourseDirectoryResponse>(
    `discourse-leaderboard-${selectedPeriod}-${selectedOrder}`,
    fetcher,
    {
      refreshInterval: 300000,
      revalidateOnFocus: false,
    }
  );

  const filteredData = data?.directory_items.filter(
    (item) => item.user.title !== "Roboflow"
  );

  console.log(filteredData);

  return (
    <main className="min-h-screen bg-white">
      <Header2 />
      <div className="sticky-subheader">
        <div className="subheader-container">
          <Link href="/" className="subheader-title">
            <img
              src="/logos/forum_leaderboard_header.png"
              alt="Roboflow Forum Leaderboard"
              width={360}
              height={360}
            />
          </Link>
        </div>
      </div>
      {/* <Modal_HowItWorks
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
      <div className="mx-auto pt-8 pb-24 px-4" style={{ maxWidth: "1110px" }}>
        <Banner2 />

        <div className="mb-12">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              September 2025 Winners 🎉
            </h2>
            <Link
              href="https://discuss.roboflow.com/t/september-roboflow-community-awards/11273"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-700 opacity-70 hover:opacity-100 transition-opacity"
            >
              read announcement
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
            {SEPTEMBER_WINNERS?.map((winner, index) => (
              <ListItem_PastWinners
                key={index}
                winner={winner}
                rank={index + 1}
                includeSwag={index === 0}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <OrderSelector
            selectedOrder={selectedOrder}
            onOrderChange={setSelectedOrder}
          />
          <TimePeriodSelector
            selectedPeriod={selectedPeriod}
            onPeriodChange={setSelectedPeriod}
          />
        </div>
        {error && <ErrorDisplay error={error} />}
        {isLoading && <Loading />}

        {data && !error && (
          <div>
            {filteredData?.slice(0, 10).map((item, index) => (
              <ListItem_Leaderboard
                key={item.id}
                item={item}
                rank={index + 1}
                order={selectedOrder}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
