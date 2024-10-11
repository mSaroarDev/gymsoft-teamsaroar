import axios from "axios";

export const getStatistics = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/stats`
    );
    return res;
  } catch (error) {
    return error;
  }
};
