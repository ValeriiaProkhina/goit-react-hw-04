import axios from "axios";

const API_KEY = "vr47IGWGGTfOV0wb7cLXIrNzpP01o7N87OaVR9_f9Kw";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = `Client-ID ${API_KEY}`;

export default async function fetchImages(query, page = 1) {
  const { data } = await axios.get("/search/photos", {
    params: {
      query,
      orientation: "landscape",
      per_page: 16,
      page,
    },
  });
  return data;
}
// Application ID
// 572754;
// Access Key
// vr47IGWGGTfOV0wb7cLXIrNzpP01o7N87OaVR9_f9Kw

// Secret key
// LAkOsl7p06GyhgOu9bBPErtgvnJGrG8x6yOzDkRx5JU
