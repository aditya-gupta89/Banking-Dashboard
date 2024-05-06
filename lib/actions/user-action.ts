// ... your initilization functions
"use server";

import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { cookies } from "next/headers";
export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}



export const signUp = async ({ password, ...userData }: SignUpParams) => {
  const { email, firstName, lastName } = userData;
  const { account } = await createAdminClient();
  let newUserAccount = await account.create(
    ID.unique(),
    email,
    password,
    `${firstName} ${lastName}`
  );
  if (!newUserAccount) throw new Error("Error creating user");

  const session = await account.createEmailPasswordSession(email, password);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
  return newUserAccount;    
};
