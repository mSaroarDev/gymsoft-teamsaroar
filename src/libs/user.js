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

// my profile
export const myProfile = async (id) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/my-profile?userId=${id}`
    );
    return res;
  } catch (error) {
    return error;
  }
};

// my profile
export const editProfile = async (id, values) => {
  try {
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/my-profile/edit?userId=${id}`,
      values
    );
    return res;
  } catch (error) {
    return error;
  }
};

// my profile
export const allUsers = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/all`
    );
    return res;
  } catch (error) {
    return error;
  }
};

// my profile
export const deleteUser = async (id) => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/delete?userId=${id}`
    );
    return res;
  } catch (error) {
    return error;
  }
};
