import { POST } from "../utils/http";

async function forgotPasswordAPI({
  setIsFormLoading,
  setServerError,
  info,
  setIsModalOpen,
}) {
  try {
    setIsFormLoading(true);

    const { response, json } = await POST(
      "http://localhost:7000/api/auth/forgotPassword",
      info
    );

    setIsFormLoading(false);

    if (response.status >= 400) {
      setServerError(json.message);
      return;
    }

    setIsModalOpen(false);
    return;
  } catch (err) {
    console.log(err);
  }
}

export default forgotPasswordAPI;
