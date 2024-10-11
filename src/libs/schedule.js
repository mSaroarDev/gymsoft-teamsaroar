import axios from "axios";

// create new schedule
export const createSchedule = async (values) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/create`,
      values
    );
    return res;
  } catch (error) {
    return error;
  }
};

// get all schedule
export const getSchedules = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/all`
    );
    return res;
  } catch (error) {
    return error;
  }
};

// update a schedule
export const editSchedule = async (id) => {
  try {
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/edit?id=${id}`
    );

    return res;
  } catch (error) {
    return error;
  }
};

// update a schedule
export const deniedSchedule = async (id) => {
  try {
    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/reject?id=${id}`
    );

    return res;
  } catch (error) {
    return error;
  }
};
