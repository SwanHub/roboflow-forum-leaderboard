import { DiscourseDirectoryResponse } from "@/app/types";

/**
 * Fetches public user list from Discourse via our internal API route
 * Uses hardcoded parameters: period='monthly', order='likes_received'
 * @returns Promise resolving to Discourse directory response
 */
export async function fetchDiscoursePublicUserList(): Promise<DiscourseDirectoryResponse> {
  try {
    const response = await fetch("/api/likes-received", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
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
