import { PUT } from "../utils/http";

export default async function updateOrderState({
  token,
  orderId,
  stateName,
  setIsLoading,
}) {
  try {
    setIsLoading(true);
    const info = { state: stateName };

    await PUT(`http://localhost:7000/api/orders/${orderId}`, info, token);
    setIsLoading(false);
  } catch (err) {
    console.log(err);
  }
}
