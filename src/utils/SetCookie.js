import { CreateToken } from "./JWTHelper";

export async function SetCookie(id, fullName, email) {
  const token = await CreateToken(id, fullName, email);
  const cookie = {
    "SeT-Cookie": `token=${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict;`,
  };

  return cookie;
}
