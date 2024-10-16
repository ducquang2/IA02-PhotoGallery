import { baseUrl } from "../utils/constants";

type searchPhotoParams = { query: string; page?: number; per_page?: number };
/**
 * @description The `searchPhoto` function allows users to search for photos based on a query string.
 *
 * @param query - The search term to find relevant photos (required).
 * @param page - The page number of results to retrieve (optional, defaults to 1).
 * @param per_page - The number of results per page (optional, defaults to 10).
 * @returns - List of photo from Unsplash.
 */
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

type getPhotoParams = {
  photoId: string;
};
/**
 * @description The `getPhoto` function retrieves detailed information about a specific photo using its ID.
 *
 * @param photoId - The id of photo to get data (required).
 * @returns - The photo data from Unsplash.
 */
export async function getPhoto({ photoId }: getPhotoParams) {
  const res = await fetch(`${baseUrl}/photos/${photoId}/?`, {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
    },
  });
  return res.json();
}
