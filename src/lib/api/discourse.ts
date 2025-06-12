import { DiscourseDirectoryResponse } from "@/app/types";

export type TimePeriod = "weekly" | "monthly" | "yearly" | "all";
export type OrderType = "likes_received" | "post_count" | "likes_given";

/**
 * Fetches public user list from Discourse via our internal API route
 * @param period - Time period for filtering: 'weekly', 'monthly', 'yearly', or 'all'
 * @param order - Sorting order: 'likes_received', 'post_count', or 'likes_given'
 * @returns Promise resolving to Discourse directory response
 */
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

    console.log("data returned from route: ", data);

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
