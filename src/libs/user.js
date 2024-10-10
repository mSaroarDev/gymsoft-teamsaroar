import axios from "axios";

export const register = async (values) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
      values
    );
    return res;
  } catch (error) {
    return error;
  }
};

// login
export const login = async (values) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
      values
    );
    return res;
  } catch (error) {
    return error;
  }
};

// login
export const logout = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`
    );
    return res;
  } catch (error) {
    return error;
  }
};
