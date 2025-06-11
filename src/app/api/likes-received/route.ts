import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Hardcoded parameters
    const period = "monthly";
    const order = "likes_received";
    const page = 0;

    // Build URL with correct endpoint (remove /admin)
    const url = new URL(`https://discuss.roboflow.com/directory_items.json`);
    url.searchParams.append("period", period);
    url.searchParams.append("order", order);
    url.searchParams.append("page", page.toString());

    console.log("Discourse API URL:", url.toString());

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": process.env.DISCOURSE_API_KEY || "",
        "Api-Username": "system",
      },
    });

    console.log("Discourse response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Discourse error response:", errorText);
      throw new Error(
        `Discourse API error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data = await response.json();
    console.log(
      "Discourse response received, directory items count:",
      data.directory_items?.length || 0
    );

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Discourse API error:", error);
    return NextResponse.json(
      { error: `Failed to fetch Discourse data: ${error.message}` },
      { status: 500 }
    );
  }
}
