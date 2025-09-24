'use server'

import { NewsItem } from "@/types"

//Get News Data Request
export async function getNews(): Promise<NewsItem[]>{
  const token = process.env.API_TOKEN
  try{
    const response = await fetch(`https://finnhub.io/api/v1/news?category=general&token=${token}`)

    if(!response.ok){
      throw new Error('Failed to fetch news')
    }

    return await response.json()
  
  } catch(error){
    throw new Error('Error Fetching news')
  }
}