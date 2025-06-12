import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const period = body.period || "monthly";
    const order = body.order || "likes_received";
    const page = 0;

    const url = new URL(`https://discuss.roboflow.com/directory_items.json`);
    url.searchParams.append("period", period);
    url.searchParams.append("order", order);
    url.searchParams.append("page", page.toString());

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Api-Key": process.env.DISCOURSE_API_KEY || "",
        "Api-Username": "system",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Discourse error response:", errorText);
      throw new Error(
        `Discourse API error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data = await response.json();
    console.log(
      `Discourse response received for period "${period}" and order "${order}", directory items count:`,
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
