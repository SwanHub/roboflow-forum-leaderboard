import { DiscourseDirectoryResponse } from "@/app/types";

export type TimePeriod = "weekly" | "monthly" | "yearly" | "all";
export type OrderType = "likes_received" | "post_count" | "likes_given";

export async function fetchDiscoursePublicUserList(
  period: TimePeriod = "monthly",
  order: OrderType = "likes_received"
): Promise<DiscourseDirectoryResponse> {
  try {
    const response = await fetch("/api/likes-received", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ period, order }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || `HTTP ${response.status}: ${response.statusText}`
      );
    }

    return data;
  } catch (error) {
    console.error("Error fetching Discourse user list:", error);
    throw error;
  }
}
