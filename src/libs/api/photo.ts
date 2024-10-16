import { baseUrl } from "../utils/constants";

type searchPhotoParams = { query: string; page?: number; per_page?: number };

export async function searchPhoto({
  query,
  page = 1,
  per_page = 10,
}: searchPhotoParams) {
  const urlSearchParams = new URLSearchParams({
    query,
    page: page.toString(),
    per_page: per_page.toString(),
  });
  const res = await fetch(`${baseUrl}/search/photos?${urlSearchParams}`, {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
    },
  });
  return res.json();
}
