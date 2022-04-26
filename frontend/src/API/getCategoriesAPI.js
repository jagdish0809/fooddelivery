import { GET } from "../utils/http";

export default async function getCategoryAPI(setAllCategories) {
  try {
    const { json } = await GET("http://localhost:7000/api/categories");
    setAllCategories(json.data);
  } catch (err) {
    console.log(err);
  }
}
