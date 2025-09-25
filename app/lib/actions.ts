"use server";

import { NewsItem } from "@/types";

//Get News Data Request
export async function getNews(): Promise<NewsItem[]> {
  const token = process.env.API_TOKEN;

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/news?category=general`,
      {
        headers: {
          "X-Finnhub-Token": `${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Error Fetching news");
  }
}
