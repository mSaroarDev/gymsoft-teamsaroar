import toast from "react-hot-toast";

export const showSuccess = (text) => {
  return toast.success(text);
};

export const showError = (text) => {
  return toast.error(text);
};
