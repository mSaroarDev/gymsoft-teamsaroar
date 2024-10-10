import { headers } from "next/headers";

export const useUserId = () => {
  const headerList = headers();
  const userId = headerList.get("id");

  return userId;
};
