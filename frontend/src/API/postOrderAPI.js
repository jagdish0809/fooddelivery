import { POST } from "../utils/http";

async function postOrderAPI({
  resetTotalCost,
  orderSpecifications,
  token,
  emptyCart,
  setCartIsLoading,
  toggleCart,
  history,
}) {
  try {
    const { response } = await POST(
      "http://localhost:7000/api/orders",
      orderSpecifications,
      token
    );

    setCartIsLoading(false);

    if (response.status === 201) {
      emptyCart();
      resetTotalCost();
      toggleCart(false);

      return history.push("/myAccount/myOrders");
    }
  } catch (err) {
    console.log(err);
  }
}
export default postOrderAPI;
